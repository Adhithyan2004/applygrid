import { prisma } from "../lib/prisma";
import { ApplicationStatus } from "@prisma/client";
import { calculateStreak } from "../utils/streak";

// Put all services in single one and  returning all
export const getDashboardService = async (userId: string) => {
  const [
    overview,
    metrics,
    recentApplications,
    recentActivity,
    streak,
    user,
    topRoles,
  ] = await Promise.all([
    getOverviewStats(userId),
    getMetrics(userId),
    getRecentApplications(userId),
    getRecentActivity(userId),
    getApplicationStreak(userId),
    prisma.user.findUnique({
      where: { id: userId },
      select: {
        bestStreak: true,
      },
    }),
    getTopAppliedRoles(userId),
  ]);

  return {
    overview,
    metrics,
    recentApplications,
    recentActivity,
    streak,
    bestStreak: user?.bestStreak ?? 0,
    topRoles,
  };
};

// To get all ApplicationStatus counts
export const getOverviewStats = async (userId: string) => {
  const [totalApplications, applied, interviews, offers, rejected, ghosted] =
    await Promise.all([
      prisma.application.count({
        where: { userId },
      }),

      prisma.application.count({
        where: {
          userId,
          currentStatus: ApplicationStatus.APPLIED,
        },
      }),

      prisma.application.count({
        where: {
          userId,
          currentStatus: ApplicationStatus.INTERVIEW,
        },
      }),

      prisma.application.count({
        where: {
          userId,
          currentStatus: ApplicationStatus.OFFER,
        },
      }),

      prisma.application.count({
        where: {
          userId,
          currentStatus: ApplicationStatus.REJECTED,
        },
      }),

      prisma.application.count({
        where: {
          userId,
          currentStatus: ApplicationStatus.GHOSTED,
        },
      }),
    ]);

  return {
    totalApplications,
    applied,
    interviews,
    offers,
    rejected,
    ghosted,
  };
};

// Returns successRate and rejectionRate upto 2 decimals
export const getMetrics = async (userId: string) => {
  const totalApplications = await prisma.application.count({
    where: { userId },
  });

  if (totalApplications === 0) {
    return {
      successRate: 0,
      rejectionRate: 0,
    };
  }

  const [offers, rejected] = await Promise.all([
    prisma.application.count({
      where: {
        userId,
        currentStatus: ApplicationStatus.OFFER,
      },
    }),
    prisma.application.count({
      where: { userId, currentStatus: ApplicationStatus.REJECTED },
    }),
  ]);

  return {
    successRate: Number(((offers / totalApplications) * 100).toFixed(2)),
    rejectionRate: Number(((rejected / totalApplications) * 100).toFixed(2)),
  };
};

// Recent Application (will fiqure out later)
export const getRecentApplications = async (userId: string) => {
  return prisma.application.findMany({
    where: { userId },
    orderBy: {
      appliedDate: "desc",
    },
    take: 4,
    select: {
      id: true,
      companyName: true,
      role: true,
      currentStatus: true,
      experienceLevel: true,
      appliedDate: true,
    },
  });
};

// Recent activity service
export const getRecentActivity = async (userId: string) => {
  return prisma.applicationStatusHistory.findMany({
    where: {
      application: {
        userId,
      },
    },

    orderBy: {
      changedAt: "desc",
    },
    take: 2,
    select: {
      id: true,
      status: true,
      changedAt: true,

      application: {
        select: {
          companyName: true,
        },
      },
    },
  });
};

// Application streak
const getApplicationStreak = async (userId: string) => {
  const applications = await prisma.application.findMany({
    where: { userId },
    select: {
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return calculateStreak(applications.map((app) => app.createdAt));
};

// Top applied roles
export const getTopAppliedRoles = async (userId: string) => {
  const roles = await prisma.application.groupBy({
    by: ["role"],
    where: {
      userId,
    },
    _count: {
      role: true,
    },
    orderBy: {
      _count: {
        role: "desc",
      },
    },
    take: 2,
  });

  const totalApplications = roles.reduce(
    (sum, role) => sum + role._count.role,
    0,
  );

  return roles.map((role) => ({
    role: role.role,
    count: role._count.role,
    percentage: Math.round((role._count.role / totalApplications) * 100),
  }));
};

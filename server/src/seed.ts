import {
  PrismaClient,
  ApplicationStatus,
  ExperienceLevel,
} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create test user
  const user = await prisma.user.create({
    data: {
      name: "Adhi",
      email: "adhi@test.com",
      passwordHash: "hashedpassword",
    },
  });

  console.log("✅ User created");

  const applicationsData = [
    {
      companyName: "Google",
      role: "Backend Engineer",
      currentStatus: ApplicationStatus.APPLIED,
      experienceLevel: ExperienceLevel.INTERN,
    },
    {
      companyName: "Microsoft",
      role: "Frontend Developer",
      currentStatus: ApplicationStatus.INTERVIEW,
      experienceLevel: ExperienceLevel.JUNIOR,
    },
    {
      companyName: "Amazon",
      role: "Full Stack Developer",
      currentStatus: ApplicationStatus.REJECTED,
      experienceLevel: ExperienceLevel.MID,
    },
    {
      companyName: "Netflix",
      role: "Software Engineer",
      currentStatus: ApplicationStatus.REJECTED,
      experienceLevel: ExperienceLevel.SENIOR,
    },
  ];

  for (const app of applicationsData) {
    const application = await prisma.application.create({
      data: {
        userId: user.id,
        companyName: app.companyName,
        role: app.role,
        currentStatus: app.currentStatus,
        experienceLevel: app.experienceLevel,
        appliedDate: new Date(),
      },
    });

    await prisma.applicationStatusHistory.create({
      data: {
        applicationId: application.id,
        status: app.currentStatus,
        note: `Application moved to ${app.currentStatus}`,
      },
    });

    console.log(`✅ Created application for ${app.companyName}`);
  }

  console.log("🎉 Database seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

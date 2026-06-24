import { Request, Response } from "express";
import { ApplicationBody } from "../types/application.types";
import {
  createApplication,
  getAllApplicationService,
  getSingleApplicationService,
  deleteApplicationService,
  updateApplicationService,
} from "../services/application.service";

export const applicationController = async (
  req: Request<{}, {}, ApplicationBody>,
  res: Response,
) => {
  try {
    const {
      companyName,
      role,
      experienceLevel,
      currentStatus,
      appliedDate,
      location,
      salary,
      note,
    } = req.body;

    const date = new Date(appliedDate);

    // Validation section starts
    if (date > new Date()) {
      return res
        .status(400)
        .json({ message: "Applied date cannot be in the future duh!" });
    }

    if (!companyName?.trim()) {
      return res.status(400).json({ message: "Company name is required" });
    }

    if (!role?.trim()) {
      return res.status(400).json({ message: "Role is required" });
    }

    if (!appliedDate) {
      return res.status(400).json({
        message: "Applied date is required",
      });
    }

    const userId = req.userId!;

    const application = await createApplication({
      userId,
      companyName,
      role,
      experienceLevel,
      currentStatus,
      appliedDate: date,
      location,
      salary,
      note,
    });

    res.json(application);
    console.log(req.body.appliedDate);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllApplicationContoller = async (
  req: Request,
  res: Response,
) => {
  try {
    const userId = req.userId as string;
    const applications = await getAllApplicationService(userId);
    res.json(applications);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Failed to fetch applications", error: error.message });
  }
};

export const getSingleApplicationContoller = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const userId = req.userId as string;

    const application = await getSingleApplicationService(id as string, userId);
    res.json(application);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "failed to fetch application", error: error.message });
  }
};

export const deleteApplicationController = async (
  req: Request,
  res: Response,
) => {
  try {
    const userId = req.userId as string;
    const applicationId = req.params.id as string;

    const application = await deleteApplicationService(userId, applicationId);
    res.json(application);
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to delete Application",
      error: error.message,
    });
  }
};

export const updateApplicationController = async (
  req: Request<{ id: string }, {}, Partial<ApplicationBody>>,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const userId = req.userId as string;

    const updateData = {
      ...req.body,
      ...(req.body.appliedDate && {
        appliedDate: new Date(req.body.appliedDate),
      }),
    };

    if (req.body.appliedDate) {
      const date = new Date(req.body.appliedDate);

      if (date > new Date()) {
        return res.status(400).json({
          message: "Applied date cannot be in the future Duh!!",
        });
      }
    }

    const updateApplication = await updateApplicationService(
      id as string,
      userId,
      updateData,
    );
    res.json(updateApplication);
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to update application",
      error: error.message,
    });
  }
};

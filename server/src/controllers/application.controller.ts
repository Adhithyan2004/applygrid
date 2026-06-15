import { Request, Response } from "express";
import {
  ApplicationBody,
  UpdateApplicationStatusHistort,
} from "../types/application.types";
import {
  createApplication,
  updateApplicationStatus,
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
      location,
      salary,
      note,
    } = req.body;
    const userId = req.userId!;
    const appliedDate = new Date();

    const application = await createApplication(
      userId,
      companyName,
      role,
      experienceLevel,
      currentStatus,
      appliedDate,
      location,
      salary,
      note,
    );

    res.json(application);
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
    const updateData = req.body;

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

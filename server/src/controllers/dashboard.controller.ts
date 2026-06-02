import { Request, Response } from "express";
import { getDashboardService } from "../services/dashboard.service";

export const getDashboardController = async (req: Request, res: Response) => {
  try {
    const userId = req.userId as string;

    const dashboard = await getDashboardService(userId);

    res.json(dashboard);
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to fetch dashboard",
      error: error.message,
    });
  }
};

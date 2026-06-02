import express from "express";
import { authenticate } from "../middleware/auth.middleware";
import { getDashboardController } from "../controllers/dashboard.controller";

const router = express.Router();

// Get all stats essesntial for dashboard
router.get("/", authenticate, getDashboardController);

export default router;

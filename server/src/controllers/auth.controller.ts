import {
  registerUser,
  loginUserService,
  refreshAccessToken,
  logoutUserService,
  deleteUserService,
  forgotPasswordService,
  resetPasswordService,
  getCurrentUserService,
  verifyEmailService,
} from "../services/auth.service";
import { Request, Response } from "express";
import { SignupBody, LoginBody } from "../types/auth.types";

export const signupController = async (
  req: Request<{}, {}, SignupBody>,
  res: Response,
) => {
  try {
    const { name, email, password } = req.body;

    if (!name?.trim()) {
      return res.status(400).json({
        message: "Name is required",
      });
    }

    if (!email?.trim()) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    if (!password?.trim()) {
      return res.status(400).json({
        message: "Password is required",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be atleast 8 characters",
      });
    }

    const { user, accessToken, refreshToken } = await registerUser(
      name.trim(),
      email.trim(),
      password.trim(),
    );

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 15 * 60 * 1000,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      message: "User created successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: any) {
    return res.status(400).json({
      message: error.message || "Signup failed",
    });
  }
};

export const loginController = async (
  req: Request<{}, {}, LoginBody>,
  res: Response,
) => {
  try {
    const { email, password } = req.body;

    if (!email?.trim()) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    if (!password?.trim()) {
      return res.status(400).json({
        message: "Passowrd is required duh!",
      });
    }

    const { accessToken, refreshToken } = await loginUserService(
      email,
      password,
    );

    // Set cookies
    res.cookie("accessToken", accessToken, {
      httpOnly: true, //attacker cant access cookies via doc.cookies (cheeky)
      secure: false, //  change in production to "true" (https)
      sameSite: "lax", //to tricksters playing wit fake ass websites type shyt
      maxAge: 15 * 60 * 1000, // Shortlived
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false, //  change in production to true
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // Longlived
    });

    return res.json({
      message: "Login successful",
    });
  } catch (error: any) {
    const message = error instanceof Error ? error.message : "Login failed";

    return res.status(401).json({ message });
  }
};

export const logoutContoller = async (req: Request, res: Response) => {
  try {
    await logoutUserService(req.cookies.refreshToken);

    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    res.json({ message: "Logged out successfully" });
  } catch (error: any) {
    res.status(500).json({ message: "Failed to Logout" });
  }
};

export const refreshController = async (req: Request, res: Response) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: "Refresh token missing" });
  }

  try {
    const newAccessToken = await refreshAccessToken(refreshToken);

    res.cookie("accessToken", newAccessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 15 * 60 * 1000,
    });

    res.json({ message: "Access token refreshed" });
  } catch (error: any) {
    res.status(403).json({ message: error.message });
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id as string;

    await deleteUserService(userId);

    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: "Failed to delete user" });
  }
};

export const forgotPasswordController = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    await forgotPasswordService(email.trim());
    return res.json({
      message:
        "If an account with that email exists, a password reset link has been sent.",
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const resetPasswordController = async (req: Request, res: Response) => {
  try {
    const { token, password } = req.body;

    await resetPasswordService(token, password);

    return res.json({
      message: "Password reset successfully",
    });
  } catch (error: any) {
    return res.status(400).json({
      message: error.message || "Password reset failed",
    });
  }
};

export const getCurrentUserController = async (req: Request, res: Response) => {
  try {
    const userId = req.userId as string;

    const user = await getCurrentUserService(userId);
    res.json(user);
  } catch (error: any) {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
};

export const verifyEmailController = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;

    await verifyEmailService(token as string);

    return res.status(200).json({
      message: "Email verified successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message:
        error instanceof Error ? error.message : "Email verification failed",
    });
  }
};

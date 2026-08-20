import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma";
import { generateAccessToken, generateRefreshToken } from "../utils/token";
import crypto from "crypto";
import { sendPasswordResetEmail } from "./email.service";

export const registerUser = async (
  name: string,
  email: string,
  password: string,
) => {
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      passwordHash,
    },
  });

  const accessToken = generateAccessToken(user.id);
  const refreshToken = generateRefreshToken(user.id);

  return {
    user,
    accessToken,
    refreshToken,
  };
};

export const refreshAccessToken = async (refreshToken: string) => {
  const decoded = jwt.verify(
    refreshToken,
    process.env.JWT_REFRESH_SECRET as string,
  ) as { userId: string };

  const user = await prisma.user.findUnique({
    where: { id: decoded.userId },
  });

  if (!user || user.refreshToken !== refreshToken) {
    throw new Error("Invalid refresh token");
  }

  const newAccessToken = generateAccessToken(user.id);

  return newAccessToken;
};

export const loginUserService = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.passwordHash);

  if (!isMatch) {
    throw new Error("Wrong password");
  }

  const accessToken = generateAccessToken(user.id);
  const refreshToken = generateRefreshToken(user.id);

  // store refresh token in DB
  await prisma.user.update({
    where: { id: user.id },
    data: { refreshToken },
  });

  return { accessToken, refreshToken };
};

export const logoutUserService = async (refreshToken?: string) => {
  if (!refreshToken) return;

  await prisma.user.updateMany({
    where: { refreshToken },
    data: { refreshToken: null },
  });
};

export const deleteUserService = async (userId: string) => {
  if (!userId) throw new Error("User not found");

  await prisma.user.delete({
    where: {
      id: userId,
    },
  });
  return;
};

export const forgotPasswordService = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  console.log("1. user found");

  if (!user) {
    return;
  }

  //Generate token
  const resetToken = crypto.randomBytes(32).toString("hex");

  console.log("2. Token generated");

  //Hash token before storing it (it will be dispalyed in the URL duh)
  const resetTokenHash = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  //Token expires in 15 mins
  const resetTokenExpires = new Date(Date.now() + 15 * 60 * 1000);

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      passwordResetTokenHash: resetTokenHash,
      passwordResetExpires: resetTokenExpires,
    },
  });

  console.log("3. Token stored");

  //TEMPORARY - should removce it later (only for testing)
  const resetUrl = `https://applygrid.adhithyan.org/resetpassword/${resetToken}`;
  console.log("4. Reset URL:", resetUrl);

  await sendPasswordResetEmail(user.email, resetUrl);
  console.log("5. Email function completed");
};

export const resetPasswordService = async (
  token: string,
  newPassword: string,
) => {
  const tokenHash = crypto.createHash("sha256").update(token).digest("hex");

  const user = await prisma.user.findFirst({
    where: {
      passwordResetTokenHash: tokenHash,
      passwordResetExpires: {
        gt: new Date(),
      },
    },
  });

  if (!user) {
    throw new Error("Invalid or expired reset token");
  }

  const passwordHash = await bcrypt.hash(newPassword, 12);

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      passwordHash,

      // Token can never be used again
      passwordResetTokenHash: null,
      passwordResetExpires: null,

      // Revoke existing refresh token
      refreshToken: null,
    },
  });
};

export const getCurrentUserService = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

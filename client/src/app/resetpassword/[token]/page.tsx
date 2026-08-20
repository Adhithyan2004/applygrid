"use client";

import { SubmitEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../../lib/api";
import { Eye, EyeOff } from "lucide-react";

type Props = {
  params: Promise<{
    token: string;
  }>;
};

const ResetPasswordPage = ({ params }: Props) => {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const { token } = await params;

      const response = await api.post("/auth/resetpassword", {
        token,
        password,
      });

      setMessage(response.data.message);

      setTimeout(() => {
        router.push("/user-login");
      }, 1500);
    } catch (error: any) {
      setError(
        error.response?.data?.message || "Invalid or expired reset link",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="p-10 py-14  flex flex-col items-center gap-4"
      >
        <h1 className="font-sora font-semibold text-xl text-primary">
          ApplyGrid
        </h1>
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold">Set New Password</h1>
          <p>Enter your new password below.</p>
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            className="p-3 border rounded-lg w-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-6 top-1/2 -translate-y-1/2"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm password"
            className="p-3 border rounded-lg w-md"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-6 top-1/2 -translate-y-1/2"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-primary text-white py-3 rounded-xl w-md"
        >
          {isLoading ? "Resetting..." : "Reset Password"}
        </button>

        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default ResetPasswordPage;

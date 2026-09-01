"use client";

import React, { useState } from "react";
import { api } from "../lib/api";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export const LoginInput = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setError("");
      const response = await api.post("/auth/login", {
        email,
        password,
      });
      router.push("/");
    } catch (error: any) {
      setError(error.response?.data?.message);
    }
  };

  return (
    <div className="flex flex-col font-sora h-screen lg:h-fit justify-center lg:justify-start mx-10">
      <div className="flex flex-col gap-5">
        <h2 className="lg:text-[22px] text-2xl text-center lg:text-start text-primary font-semibold">
          Log in to ApplyGrid
        </h2>
        <p className="text-center font-semibold lg:hidden">
          A better way to{" "}
          <span className="text-primary">track applications</span>
        </p>
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center lg:items-start gap-5"
        >
          <input
            type="email"
            placeholder="Email"
            className="input-style"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              className="input-style"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-primary"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button
            type="submit"
            className=" h-14 w-80 sm:w-100 lg:w-111.5 bg-primary text-white rounded-[10px] cursor-pointer hover:shadow-md hover:shadow-blue-300"
          >
            Sign In
          </button>
          {error && <p className="text-red-500 text-sm font-inter">{error}</p>}
        </form>
        <p
          className="text-center cursor-pointer text-sm"
          onClick={() => router.push("/forgot-password")}
        >
          Forgotten Password?
        </p>
      </div>
      <div className="flex flex-col items-center lg:items-start lg:gap-5 gap-3 mt-10">
        <h2 className="text-[16px] text-center lg:text-start">
          Don't have an account ?
        </h2>
        <button
          onClick={() => router.push("/user-signup")}
          className="h-14 w-80 sm:w-100 lg:w-full border border-primary text-primary rounded-[10px] cursor-pointer hover:border-2 hover:shadow-lg hover:shadow-blue-100"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

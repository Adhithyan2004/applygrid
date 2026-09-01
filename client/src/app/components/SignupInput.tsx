"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../lib/api";
import { Eye, EyeOff } from "lucide-react";

export const SignupInput = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const response = await api.post("/auth/signup", {
        name,
        email,
        password,
      });
      console.log(response.data);
      router.push("/verify-waiting-page");
    } catch (error: any) {
      setError(error.response?.data?.message || "Something went wrong");
    }
  };

  const passwordsMatch = password === confirmPassword || confirmPassword === "";

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-4 font-sora h-screen lg:h-fit justify-center lg:justify-start mx-10">
        <div>
          <h2 className="lg:text-[22px] text-2xl text-center lg:text-start font-semibold font-inter text-primary">
            Welcome to ApplyGrid
          </h2>
          <p className="font-inter text-center lg:text-start font-light">
            Manage applications, interviews, and opportunities <br /> in one
            organized workspace.
          </p>
        </div>
        <form
          onSubmit={handleSignup}
          className="flex flex-col items-center lg:items-start gap-4"
        >
          <input
            type="text"
            placeholder="Username"
            className="input-style font-inter"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input-style font-inter"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Set Password"
              className="input-style w-full font-inter"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-primary"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Re-Type Password"
              required
              className="input-style font-inter"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setError("");
              }}
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
            className=" h-12 w-80 sm:w-100 lg:w-111.5 bg-primary text-white rounded-[10px] cursor-pointer hover:shadow-md hover:shadow-blue-300"
            type="submit"
            disabled={!passwordsMatch}
          >
            Sign Up
          </button>
          {error && <p className="text-red-500 text-sm font-inter">{error}</p>}
          {!passwordsMatch && (
            <p className="text-red-500 text-sm">Passwords don't match</p>
          )}
        </form>
        <div className="flex flex-col items-center lg:items-start lg:gap-5 gap-3 lg:mt-10">
          <h2 className="text-[16px] font-inter">Already have an account ?</h2>
          <button
            onClick={() => router.push("/user-login")}
            className="h-12 w-80 sm:w-100 lg:w-111 border border-primary text-primary rounded-[10px] font-inter  cursor-pointer hover:shadow-md hover:shadow-blue-300"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

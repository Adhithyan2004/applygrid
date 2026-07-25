"use client";

import { useState } from "react";
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

  const handleSignup = async () => {
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
      router.push("/");
    } catch (error: any) {
      console.log(error.response?.data);
    }
  };

  const passwordsMatch = password === confirmPassword || confirmPassword === "";

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-[22px] font-semibold font-inter">
            Welcome to ApplyGrid
          </h2>
          <p className="font-inter font-light">
            Manage applications, interviews, and opportunities <br /> in one
            organized workspace.
          </p>
        </div>
        <input
          type="text"
          placeholder="Username"
          className="input-style font-inter"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="input-style font-inter"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Set Password"
            className="input-style w-full font-inter"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
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
            placeholder="Re-Type Password"
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
            className="absolute right-6 top-1/2 -translate-y-1/2"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <button
          className=" h-12 w-111.5 bg-gray-300 rounded-[10px] cursor-pointer"
          onClick={handleSignup}
          disabled={!passwordsMatch}
        >
          Sign Up
        </button>
      </div>
      <div className="flex flex-col gap-5 mt-10">
        <h2 className="text-[16px] font-inter">Already have an account ?</h2>
        <button
          onClick={() => router.push("/user-login")}
          className="h-12 w-full border rounded-[10px] font-inter cursor-pointer"
        >
          Sign In
        </button>
      </div>
      {error && <p className="text-red-500 text-sm font-inter">{error}</p>}
      {!passwordsMatch && (
        <p className="text-red-500 text-sm">Passwords don't match</p>
      )}
    </div>
  );
};

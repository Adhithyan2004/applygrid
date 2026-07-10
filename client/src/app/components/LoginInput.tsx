"use client";

import { useState } from "react";
import { api } from "../lib/api";
import { useRouter } from "next/navigation";

export const LoginInput = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setError("");
      const response = await api.post("/auth/login", {
        email,
        password,
      });
      router.push("/");
    } catch (error: any) {
      setError(error.response?.data?.message);
      console.log(error.response?.data);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-5">
        <h2 className="text-[22px] font-semibold">Log in to ApplyGrid</h2>
        <input
          type="email"
          placeholder="Email"
          className="input-style"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-style"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className=" h-14 w-111.5 bg-gray-300 rounded-[10px] cursor-pointer"
        >
          Sign In
        </button>
        <p className="text-center cursor-pointer text-sm">
          Forgotten Password?
        </p>
      </div>
      <div className="flex flex-col gap-5 mt-10">
        <h2 className="text-[16px]">Don't have an account ?</h2>
        <button
          onClick={() => router.push("/user-signup")}
          className="h-14 w-full border rounded-[10px] cursor-pointer"
        >
          Create Account
        </button>
      </div>
      {error && <p className="text-red-500 text-sm font-inter">{error}</p>}
    </div>
  );
};

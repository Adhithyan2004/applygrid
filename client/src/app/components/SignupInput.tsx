"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../lib/api";

export const SignupInput = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
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

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div>
          <h2 className="text-[22px] font-semibold font-inter">
            Welcome to CareerFlow
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
        <input
          type="password"
          placeholder="Set Password"
          className="input-style font-inter"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className=" h-14 w-111.5 bg-gray-300 rounded-[10px] cursor-pointer">
          Sign Up
        </button>
      </div>
      <div className="flex flex-col gap-5 mt-10">
        <h2 className="text-[16px] font-inter">Already have an account ?</h2>
        <button className="h-14 w-full border rounded-[10px] font-inter cursor-pointer">
          Sign In
        </button>
      </div>
    </div>
  );
};

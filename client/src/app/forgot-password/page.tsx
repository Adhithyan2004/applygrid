"use client";

import { SubmitEvent, useState } from "react";
import { api } from "../lib/api";

const Page = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage("");
    setError("");
    setIsLoading(true);

    try {
      const response = await api.post("/auth/forgotpassword", {
        email,
      });

      setMessage(response.data.message);
    } catch (error: any) {
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="p-10 py-14  flex flex-col items-center gap-4"
      >
        <h1 className="font-sora font-semibold text-xl ">ApplyGrid</h1>
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold">
            Did you forgot your password?
          </h1>
          <p className="w-md">
            Enter your email address you're using for your account below and we
            will send you a password reset link
          </p>
        </div>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          className="p-3 border rounded-lg w-md"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={isLoading}
          className="bg-gray-200 py-3 rounded-xl w-md"
        >
          {isLoading ? "Sending..." : "Send reset link"}
        </button>

        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Page;

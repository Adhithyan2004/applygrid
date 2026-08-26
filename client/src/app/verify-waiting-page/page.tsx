"use client";

import { useRouter } from "next/navigation";

const VerifyEmailPage = () => {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md text-center">
        <h1 className="text-3xl font-semibold text-primary">
          Check your email
        </h1>

        <p className="mt-2">
          We've sent you a verification link. Please check your inbox and click
          the link to verify your email address.
        </p>

        <p className="mt-2 text-sm text-red-500">
          The verification link expires in 15 minutes.
        </p>

        <button
          onClick={() => router.push("/user-login")}
          className="bg-primary text-white cursor-pointer hover:shadow-lg hover:shadow-blue-300 py-3 rounded-xl w-md mt-6"
        >
          Back to Login
        </button>
      </div>
    </main>
  );
};

export default VerifyEmailPage;

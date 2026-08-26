"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../../lib/api";

type Props = {
  params: Promise<{
    token: string;
  }>;
};

const VerifyEmailPage = ({ params }: Props) => {
  const router = useRouter();

  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading",
  );

  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const { token } = await params;

        const response = await api.get(`/auth/verify-email/${token}`);

        setStatus("success");
        setMessage(response.data.message);
      } catch (error: any) {
        setStatus("error");
        setMessage(
          error?.response?.data?.message || "Unable to verify your email.",
        );
      }
    };

    verifyEmail();
  }, []);

  if (status === "loading") {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-semibold text-primary">
          Verifying your email...
        </h1>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-semibold text-primary">
          Verification failed
        </h1>
        <p>{message}</p>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col gap-6 items-center justify-center">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-3xl font-semibold text-primary">Email verified!</h1>
        <p>{message}</p>
      </div>
      <button
        className="bg-primary text-white cursor-pointer hover:shadow-lg hover:shadow-blue-300 py-3 rounded-xl w-md "
        onClick={() => router.push("/")}
      >
        Continue to ApplyGrid
      </button>
    </div>
  );
};

export default VerifyEmailPage;

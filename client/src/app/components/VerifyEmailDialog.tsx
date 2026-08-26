"use client";

import { useState } from "react";

type Props = {
  refetchUser: () => Promise<any>;
};

const VerifyEmailDialog = ({ refetchUser }: Props) => {
  const [checking, setChecking] = useState(false);
  const [message, setMessage] = useState("");

  const handleCheckVerification = async () => {
    setChecking(true);
    setMessage("");

    try {
      const result = await refetchUser();

      if (result.data?.emailVerified) {
        // The Home component will re-render and remove the dialog.
        return;
      }

      setMessage(
        "Your email hasn't been verified yet. Please check your inbox.",
      );
    } catch {
      setMessage("Unable to check verification status.");
    } finally {
      setChecking(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h2 className="text-2xl font-semibold">Verify your email</h2>

        <p className="mt-3 text-zinc-600">
          We've sent a verification link to your email address. Please check
          your inbox and verify your account before continuing.
        </p>

        <p className="mt-2 text-sm text-zinc-500">
          The verification link expires in 15 minutes.
        </p>

        {message && <p className="mt-4 text-sm text-red-500">{message}</p>}

        <button
          onClick={handleCheckVerification}
          disabled={checking}
          className="mt-6 w-full rounded-lg bg-[#0020A2] px-4 py-3 text-white disabled:opacity-50"
        >
          {checking ? "Checking..." : "I've verified my email"}
        </button>
      </div>
    </div>
  );
};

export default VerifyEmailDialog;

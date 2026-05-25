"use client";

import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();

  return (
    <div className="mx-16 mt-10 flex justify-between items-center">
      <h1 className="font-sora text-[32px] font-semibold">ApplyGrid</h1>
      <div className="flex gap-4">
        <button
          onClick={() => router.push("/user-signup")}
          className="navbar-btn bg-[#D9D9D9]"
        >
          Sign Up
        </button>
        <button
          onClick={() => router.push("/user-login")}
          className="navbar-btn border"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default NavBar;

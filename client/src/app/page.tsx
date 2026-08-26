"use client";

import BentoHome from "./components/BentoHome";
import { Footer } from "./components/Footer";
import SideNavBar from "./components/SideNavBar";
import { useMe } from "./hooks/useMe";
import VerifyEmailDialog from "./components/VerifyEmailDialog";

export default function Home() {
  const { data: user, isLoading, refetch } = useMe();

  return (
    <div className="h-screen overflow-hidden">
      <div className="ml-10 mr-3 my-2 flex gap-10.5 h-full">
        <SideNavBar />
        <div className="flex-1 px-10 overflow-y-auto">
          <BentoHome />
          <Footer />
        </div>
      </div>
      {!isLoading && user && !user.emailVerified && (
        <VerifyEmailDialog refetchUser={refetch} />
      )}
    </div>
  );
}

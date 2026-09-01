"use client";

import BentoHome from "./components/BentoHome";
import { Footer } from "./components/Footer";
import SideNavBar from "./components/SideNavBar";
import { useMe } from "./hooks/useMe";
import VerifyEmailDialog from "./components/VerifyEmailDialog";
import { MobileNavBar } from "./components/MobileNavBar";

export default function Home() {
  const { data: user, isLoading, refetch } = useMe();

  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full flex">
        <SideNavBar />

        <div className="flex-1 flex flex-col overflow-y-auto h-screen justify-between px-4 sm:px-6 lg:px-10">
          <MobileNavBar />
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

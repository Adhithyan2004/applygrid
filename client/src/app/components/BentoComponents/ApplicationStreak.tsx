"use client";

import { useState } from "react";
import { AddApplicationModal } from "../AddApplicationModal";
import { ApplicationStreakProps } from "@/app/types/types";

export const ApplicationStreak = ({
  streak,
  bestStreak,
}: ApplicationStreakProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isPersonalBest = streak === bestStreak && streak > 0 && bestStreak > 1;
  const hasNoStreak = streak === 0;
  return (
    <div className="font-sora flex flex-col gap-5 h-full justify-between">
      <h2 className="text-[22px] font-semibold">Application Streak</h2>
      <div className="font-semibold ">
        <h2 className="text-[72px]">{streak}</h2>
        <p className="text-[20px] -mt-5">
          {hasNoStreak ? (
            <>
              Start your <br />
              streak today!
            </>
          ) : isPersonalBest ? (
            <>
              New Perosnal <br /> Best
            </>
          ) : (
            <>
              Keep it up! <br />
              Best : {bestStreak}
            </>
          )}
        </p>
      </div>
      <p
        onClick={() => setIsModalOpen(true)}
        className="font-semibold underline cursor-pointer"
      >
        Add Today's Application
      </p>
      <AddApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        application={null}
        mode="create"
      />
    </div>
  );
};

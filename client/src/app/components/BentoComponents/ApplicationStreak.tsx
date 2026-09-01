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
    <div className="font-sora flex flex-col h-full xl:justify-between justify-evenly">
      <h2 className="text-[22px] font-semibold text-primary">
        Application Streak
      </h2>
      <div className="font-semibold space-y-5 rounded-lg bg-[#E5EAFF] border border-primary px-4.25 py-2">
        <div>
          <h2 className="text-[60px] text-primary leading-tight">{streak}</h2>
          <p className="text-[20px] -mt-3 font-medium">
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
              </>
            )}
          </p>
        </div>
        <p>
          Personal Best :{" "}
          <span className="font-semibold text-primary">{bestStreak}</span>
        </p>
      </div>
      <p
        onClick={() => setIsModalOpen(true)}
        className="font-semibold text-primary cursor-pointer"
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

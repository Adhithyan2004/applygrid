export const ApplicationStreak = () => {
  return (
    <div className="font-sora flex flex-col gap-5 h-full justify-between">
      <h2 className="text-[22px] font-semibold">Application Streak</h2>
      <div className="font-semibold ">
        <h2 className="text-[64px]">20</h2>
        <p className="text-[20px] -mt-5">
          New Personal <br /> best
        </p>
      </div>
      <p className="font-semibold underline cursor-pointer">
        Add Today's Application
      </p>
    </div>
  );
};

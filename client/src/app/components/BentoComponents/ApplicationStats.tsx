export const ApplicationStats = () => {
  return (
    <div className="h-full font-sora flex flex-col gap-3">
      <div>
        <h2 className="text-[40px] font-semibold">136</h2>
        <p className="text-[28px] -mt-1.25">Applications</p>
      </div>
      <div>
        <h2 className="text-[40px] font-semibold">14</h2>
        <p className="text-[28px] -mt-1.25">Interviews</p>
      </div>
      <div className="flex gap-4">
        <p>
          Success Rate : <span className="font-semibold text-[22px]">17%</span>
        </p>
        <p>
          Rejection Rate :{" "}
          <span className="font-semibold text-[22px]">68%</span>
        </p>
      </div>
    </div>
  );
};

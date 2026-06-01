const ApplicationRecords = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="text-[24px] font-sora grid grid-cols-2 gap-x-6 gap-y-5">
        <p>
          <span className="font-semibold">136 </span>
          Applied
        </p>
        <p>
          <span className="font-semibold">44 </span>
          Rejected
        </p>
        <p>
          <span className="font-semibold">14 </span>
          Interviews
        </p>
        <p>
          <span className="font-semibold">4 </span>
          Offered
        </p>
        <p>
          <span className="font-semibold">74 </span>
          Ghosted
        </p>
      </div>
      <p className="underline cursor-pointer">View All Applications</p>
    </div>
  );
};

export default ApplicationRecords;

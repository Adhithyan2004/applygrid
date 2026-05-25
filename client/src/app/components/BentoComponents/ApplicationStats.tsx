export const ApplicationStats = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h1 className="text-[24px] font-sora font-semibold">Applications</h1>
        <p className="text-[45px] font-inter font-light">82</p>
      </div>
      <div>
        <h1 className="text-[24px] font-sora font-semibold">Interviews</h1>
        <p className="text-[45px] font-inter font-light">14</p>
      </div>
      <div className="bg-zinc-500 w-fit py-2 px-3 text-white rounded-lg">
        8% more than previous month
      </div>
    </div>
  );
};

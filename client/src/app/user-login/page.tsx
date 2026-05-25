import { LoginInput } from "../components/LoginInput";

const page = () => {
  return (
    <div className="mx-20 mt-10">
      <div className="absolute left-[58%] top-0 h-full w-[0.5px] bg-gray-800 -translate-x-1/2 z-10"></div>
      <p className="p-3 text-[32px] text-gray-600 font-sora font-semibold">
        ApplyGrid
      </p>
      <div className="flex justify-between items-end mt-11">
        <h1 className="text-[52px] leading-16.5 font-sora">
          A better way <br /> to track <br /> applications.
        </h1>
        <div>
          <LoginInput />
        </div>
      </div>
      {/* <footer className="text-xs mt-20 text-center">ApplyGrid ©2026</footer> */}
    </div>
  );
};

export default page;

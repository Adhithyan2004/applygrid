import { SignupInput } from "../components/SignupInput";

const page = () => {
  return (
    <div className="2xl:mx-20 2xl:mt-10 lg:mx-6 lg:my-8">
      <div className="absolute  hidden xl:block  left-[60%] top-0 h-full w-[0.5px] bg-primary -translate-x-1/2 z-10"></div>
      <p className="p-3 hidden lg:block text-[32px] text-primary font-sora font-semibold">
        ApplyGrid
      </p>
      <div className="lg:flex lg:justify-between lg:items-end">
        <h1 className="text-[52px]  hidden lg:block text-black leading-16.5 font-sora">
          A better way <br /> to{" "}
          <span className="text-primary font-semibold">
            {" "}
            track <br /> applications.
          </span>
        </h1>
        <div>
          <SignupInput />
        </div>
      </div>
      {/* <footer className="text-xs text-center">ApplyGrid ©2026</footer> */}
    </div>
  );
};

export default page;

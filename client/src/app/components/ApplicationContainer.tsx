import SearchApplication from "./SearchApplication";
import { LayersPlus } from "lucide-react";
import { TableApplications } from "./TableApplications";
export const ApplicationContainer = () => {
  return (
    <div className="mb-6">
      {/* TODO: Make the SearchApplication stick to the top */}
      <div className="flex justify-between items-center">
        <SearchApplication />
        <LayersPlus
          size={26}
          className="text-zinc-500 cursor-pointer transition duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div>
        <h1 className="font-sora text-[22px] font-semibold my-5">
          All Applications
        </h1>
        <TableApplications />
      </div>
    </div>
  );
};

import { Search } from "lucide-react";

const SearchApplication = () => {
  return (
    <div>
      <div className="relative w-82.5 ">
        <Search
          size={20}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
        />

        <input
          type="text"
          placeholder="Search applications"
          className="
      w-full
      border
      rounded-xl
      py-2.5
      pl-10
      pr-4
      focus:ring-1
      focus:ring-zinc-400
    "
        />
      </div>
    </div>
  );
};

export default SearchApplication;

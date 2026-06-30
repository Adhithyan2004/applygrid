import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (calue: string) => void;
};

const SearchApplication = ({ value, onChange }: Props) => {
  return (
    <div>
      <div className="relative w-82.5 ">
        <Search
          size={20}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
        />

        <input
          value={value}
          type="text"
          placeholder="Search applications"
          onChange={(e) => onChange(e.target.value)}
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

type Props = {
  label: string;
  value: string;
  selected: string;
  activeClass: string;
  onClick: (value: string) => void;
};

export const FilterPill = ({
  label,
  value,
  selected,
  activeClass,
  onClick,
}: Props) => {
  const isSelected = selected === value;
  return (
    <button
      onClick={() => onClick(value)}
      className={`rounded-full px-4 py-2 text-sm transition ${
        isSelected ? activeClass : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
      }`}
    >
      {label}
    </button>
  );
};

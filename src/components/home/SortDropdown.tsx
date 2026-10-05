"use client";

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const SortDropdown = ({
  value,
  onChange,
}: SortDropdownProps) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-white/50">
        Sort By
      </span>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="select select-sm border-white/10 bg-[#151515] text-white"
      >
        <option value="duration">Duration</option>
        <option value="calories">Calories</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default SortDropdown;
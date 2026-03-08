type SelectOption = {
  readonly value: string;
  readonly label: string;
};

type SelectFieldProps = {
  label: string;
  options: readonly SelectOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export function SelectField({
  label,
  options,
  value,
  onChange,
  className = "",
}: SelectFieldProps) {
  return (
    <div className={`flex flex-col gap-1 flex-1 min-w-40 ${className}`}>
      <span className="text-[#8b949e] text-xs font-medium">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-3 py-2 bg-[#161b22] border border-[#30363d] rounded-lg text-[#e6edf3] text-sm cursor-pointer outline-none focus:border-[#58a6ff]"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

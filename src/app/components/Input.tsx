import type { InputProps } from '../types';

export const Input = ({ type = "text", name, value, placeholder, onChange }: InputProps) => {
  const baseClasses = "w-full border border-white bg-transparent text-white rounded-md px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary";
  const placeholderClasses = "placeholder:text-[#6C6C6C]";

  if (type === "textarea") {
    return (
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`${baseClasses} ${placeholderClasses} resize-none h-32`}
      />
    );
  }

  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`${baseClasses} ${placeholderClasses}`}
    />
  );
};

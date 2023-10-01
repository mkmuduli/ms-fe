import { twMerge as tm } from "tailwind-merge";

export default function Button({ children, onClick, className }) {
  return (
    <button
      type="button"
      className={tm(
        "shadow-1 bg-primary-600 h-12 rounded-3xl px-4 text-primary-50 ",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

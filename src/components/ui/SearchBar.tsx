import React from "react";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Buscar",
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 pl-10 text-sm text-slate-700 placeholder-slate-400 focus:border-primary-blue-500 focus:outline-none focus:ring-2 focus:ring-primary-blue-500/20"
      />
      <svg
        className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};

import React from "react";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function AuthInput({ label, className, ...props }: AuthInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-(--muted-foreground)">
        {label}
      </label>

      <input
        {...props}
        className={`mt-2 w-full rounded-lg border border-(--border) bg-(--background) px-4 py-3 text-(--foreground) placeholder:text-(--muted-foreground) focus:outline-none focus:ring-2 focus:ring(--primary)/30 focus:border-(--primary) transition ${className ?? ""}`}
      />
    </div>
  );
}

import * as React from "react";

import { cn } from "../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-10 w-full rounded-md  invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 border border-slate-300 py-2 px-3 text-sm placeholder:text-slate-400   disabled:cursor-not-allowed disabled:opacity-50  ",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export default Input;

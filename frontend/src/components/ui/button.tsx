import * as React from "react";
import { cn } from "../../lib/utils";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => (
  <button
    className={cn(
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 bg-yellow-400 hover:bg-yellow-500 text-white p-2",
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
  </button>
));
Button.displayName = "Button";

export { Button };
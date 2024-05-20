import * as React from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const inputVariants = cva(
  "bg-transparent flex h-10 w-full px-6 py-3 text-sm text-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-accent/80 dark:bg-accent/20",
        destructive:
          "border border-destructive text-destructive hover:border-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      },
      edge: {
        default: "rounded-md",
        sharp: "rounded-none",
        pill: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      edge: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", variant, edge, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, edge, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };

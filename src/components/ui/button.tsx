import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "secondary" | "accent";
  size?: "default" | "sm" | "lg" | "icon" | "xl";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
      outline: "border border-input bg-background hover:bg-muted hover:text-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm",
      accent: "bg-accent text-accent-foreground hover:bg-accent/80 shadow-sm",
      ghost: "hover:bg-muted hover:text-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    };

    const sizes = {
      default: "h-11 px-5 py-2",
      sm: "h-9 px-3 text-xs",
      lg: "h-12 px-8 text-base",
      xl: "h-14 px-10 text-lg font-bold",
      icon: "h-11 w-11",
    };

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-xl text-sm font-semibold ring-offset-background transition-all active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };



import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "secondary" | "accent" | "glow";
  size?: "default" | "sm" | "lg" | "icon" | "xl";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20",
      glow: "bg-primary text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] hover:scale-[1.02] border border-white/20",
      outline: "border border-white/10 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/20",
      accent: "bg-accent text-accent-foreground hover:bg-accent/80 border border-white/5",
      ghost: "hover:bg-white/5 text-muted-foreground hover:text-white",
      link: "text-primary underline-offset-4 hover:underline px-0 h-auto",
    };

    const sizes = {
      default: "h-10 px-6",
      sm: "h-9 px-4 text-xs tracking-wide",
      lg: "h-12 px-8 text-sm",
      xl: "h-14 px-10 text-base rounded-2xl",
      icon: "h-10 w-10",
    };

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-xl text-sm font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
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




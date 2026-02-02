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
      default: "bg-primary text-primary-foreground hover:bg-primary/95 shadow-[4px_4px_0px_0px_rgba(30,64,175,0.2)]",
      outline: "border-2 border-primary bg-background hover:bg-primary/5 text-primary",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/95 shadow-[4px_4px_0px_0px_rgba(5,150,105,0.2)]",
      accent: "bg-accent text-accent-foreground hover:bg-accent/80 shadow-sm",
      ghost: "hover:bg-primary/5 hover:text-primary",
      link: "text-primary underline-offset-4 hover:underline",
    };

    const sizes = {
      default: "h-12 px-6 py-2",
      sm: "h-9 px-4 text-xs font-black uppercase tracking-widest",
      lg: "h-14 px-8 text-base font-black",
      xl: "h-16 px-12 text-xl font-black rounded-lg",
      icon: "h-12 w-12",
    };

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-lg text-sm font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
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




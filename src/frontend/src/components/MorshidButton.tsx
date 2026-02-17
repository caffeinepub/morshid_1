import { Button, buttonVariants } from "@/components/ui/button";
import { forwardRef } from "react";
import type { VariantProps } from "class-variance-authority";

interface MorshidButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const MorshidButton = forwardRef<HTMLButtonElement, MorshidButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        asChild={asChild}
        className={`rounded-lg ${className || ""}`}
        {...props}
      />
    );
  }
);

MorshidButton.displayName = "MorshidButton";

export { MorshidButton };

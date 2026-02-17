import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { forwardRef } from "react";

interface MorshidCardProps extends React.HTMLAttributes<HTMLDivElement> {
  topBorderColor?: string;
}

const MorshidCard = forwardRef<HTMLDivElement, MorshidCardProps>(
  ({ className, topBorderColor, style, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={`border shadow-md ${className || ""}`}
        style={{
          ...(topBorderColor ? { borderTop: `4px solid ${topBorderColor}` } : {}),
          ...style,
        }}
        {...props}
      />
    );
  }
);

MorshidCard.displayName = "MorshidCard";

export { MorshidCard, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };

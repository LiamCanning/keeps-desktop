import React from "react";
import { cn } from "@/lib/utils";

interface TabsBannerProps {
  children: React.ReactNode;
  className?: string;
}

export function TabsBanner({ children, className }: TabsBannerProps) {
  return (
    <div className={cn(
      "hidden md:block bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20",
      className
    )}>
      {children}
    </div>
  );
}

import { OptimizedImage } from "./optimized-image";
import { cn } from "@/lib/utils";

interface LogoImageProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  fallbackSrc?: string;
  priority?: boolean;
}

const sizeClasses = {
  sm: "w-6 h-6",
  md: "w-8 h-8", 
  lg: "w-12 h-12",
  xl: "w-16 h-16"
};

export function LogoImage({ 
  src, 
  alt, 
  size = "md", 
  className,
  fallbackSrc = "/placeholder.svg",
  priority = false
}: LogoImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      fallbackSrc={fallbackSrc}
      priority={priority}
      aspectRatio="square"
      className={cn(
        "rounded-lg object-contain bg-background/50",
        sizeClasses[size],
        className
      )}
    />
  );
}
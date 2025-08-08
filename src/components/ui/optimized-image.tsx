import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  aspectRatio?: "square" | "video" | "auto";
  priority?: boolean;
  skeleton?: boolean;
  className?: string;
  imgClassName?: string;
}

export function OptimizedImage({
  src,
  alt,
  fallbackSrc,
  aspectRatio = "auto",
  priority = false,
  skeleton = true,
  className,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isVisible, setIsVisible] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(false);
  };

  const aspectRatioClass = {
    square: "aspect-square",
    video: "aspect-video",
    auto: ""
  }[aspectRatio];

  const imageSrc = hasError && fallbackSrc ? fallbackSrc : src;

  return (
    <div className={cn("relative overflow-hidden", aspectRatioClass, className)}>
      {/* Skeleton loader */}
      {skeleton && !isLoaded && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      
      {/* Image */}
      <img
        ref={imgRef}
        src={isVisible ? imageSrc : undefined}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "w-full h-full object-contain transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          !isVisible && "invisible",
          props.imgClassName
        )}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        {...props}
      />
      
      {/* Error fallback */}
      {hasError && !fallbackSrc && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <span className="text-muted-foreground text-sm">Image unavailable</span>
        </div>
      )}
    </div>
  );
}
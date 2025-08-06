import { useEffect, useState } from "react";

interface UseImagePreloaderOptions {
  priority?: boolean;
  timeout?: number;
}

export function useImagePreloader(
  src: string | string[],
  options: UseImagePreloaderOptions = {}
) {
  const { priority = false, timeout = 10000 } = options;
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!priority) return;

    const sources = Array.isArray(src) ? src : [src];
    let loadedCount = 0;
    let hasErrorOccurred = false;

    const timeoutId = setTimeout(() => {
      if (!isLoaded) {
        setHasError(true);
      }
    }, timeout);

    const handleLoad = () => {
      loadedCount++;
      if (loadedCount === sources.length) {
        setIsLoaded(true);
        setHasError(false);
        clearTimeout(timeoutId);
      }
    };

    const handleError = () => {
      hasErrorOccurred = true;
      setHasError(true);
      clearTimeout(timeoutId);
    };

    sources.forEach((source) => {
      const img = new Image();
      img.onload = handleLoad;
      img.onerror = handleError;
      img.src = source;
    });

    return () => {
      clearTimeout(timeoutId);
    };
  }, [src, priority, timeout, isLoaded]);

  return { isLoaded, hasError };
}
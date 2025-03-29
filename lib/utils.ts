import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { useEffect, useRef, useCallback } from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Debounce function with proper TypeScript typing
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), wait);
  };
}

// Throttle function for performance-critical events
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Custom hook for tracking previous value
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  
  useEffect(() => {
    ref.current = value;
  }, [value]);
  
  return ref.current;
}

// Memoized event handler creation
export function useEventCallback<T extends (...args: any[]) => any>(
  fn: T,
  dependencies: any[]
): T {
  const ref = useRef<T>(fn);

  useEffect(() => {
    ref.current = fn;
  }, [fn, ...dependencies]);

  return useCallback(
    (...args: Parameters<T>) => {
      const fn = ref.current;
      return fn(...args);
    },
    [ref]
  ) as T;
}

// Safe JSON parse with fallback
export function safeJSONParse<T>(value: string, fallback: T): T {
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

// Format date string consistently
export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Image loading optimization helper
export function getImageSizes(breakpoint: 'sm' | 'md' | 'lg' | 'xl'): string {
  const sizes = {
    sm: '(max-width: 640px) 100vw, 640px',
    md: '(max-width: 768px) 100vw, 768px',
    lg: '(max-width: 1024px) 100vw, 1024px',
    xl: '(max-width: 1280px) 100vw, 1280px'
  };
  
  return sizes[breakpoint];
}

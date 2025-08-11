import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Currency formatting helpers
export function formatGBP(value: number, opts?: { group?: boolean }) {
  const { group = true } = opts || {};
  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: group,
  });
  return formatter.format(isFinite(value) ? value : 0);
}

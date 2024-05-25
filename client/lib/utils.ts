import { type ClassValue, clsx } from "clsx";
import { headers } from "next/headers";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function prefix(str: string, pre: string) {
//   return `${pre}-${str}`;
// }

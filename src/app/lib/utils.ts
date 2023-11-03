import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function rc(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  // const options = ;
  return new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getJwt() {
  return localStorage.getItem("jwt");
}

export function setJwt(jwt: string) {
  localStorage.setItem("jwt", jwt);
}

export function removeJwt() {
  localStorage.removeItem("jwt");
}
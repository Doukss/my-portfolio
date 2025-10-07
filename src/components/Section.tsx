import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({ children, className }: { children: ReactNode; className?: string }) {
  return <section className={cn("max-w-6xl mx-auto px-6", className)}>{children}</section>;
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";

const ITEMS = [
  { label: "HOME", href: "/", icon: "home" },
  { label: "WORK", href: "/work", icon: "grid_view" },
  { label: "JOURNEY", href: "/journey", icon: "route" },
  { label: "ABOUT", href: "/about", icon: "person" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 z-50 flex h-20 w-full items-center justify-around border-t-4 border-on-background bg-surface px-2 md:hidden">
      {ITEMS.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex w-16 flex-col items-center justify-center p-1 transition-all duration-100 ${
              isActive
                ? "scale-110 border-2 border-on-background bg-primary-container text-on-primary-container shadow-brutal"
                : "text-on-surface-variant hover:bg-secondary-fixed active:scale-95"
            }`}
          >
            <Icon name={item.icon} filled={isActive} />
            <span className={`mt-1 text-[10px] ${isActive ? "font-bold" : ""} font-mono text-label-bold`}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
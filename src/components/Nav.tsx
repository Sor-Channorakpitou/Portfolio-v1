"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "ABOUT", href: "/about" },
  { label: "WORK", href: "/work" },
  { label: "JOURNEY", href: "/journey" },
  { label: "EDUCATION", href: "/education" },
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav
      className={`sticky top-0 z-50 w-full ${
        isHome ? "bg-background" : "bg-electric-cyan dark:bg-primary-fixed"
      } shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]`}
    >
      <div className="mx-auto flex max-w-page items-center justify-between px-gutter py-4">
        <Link href="/" className="group flex items-center gap-2">
          <span
            className={`whitespace-nowrap font-headline text-2xl font-bold tracking-tighter md:text-headline-md ${
              isHome ? "text-on-background" : "text-on-background dark:text-on-primary-fixed"
            }`}
          >
            VzTu
          </span>
        </Link>
        <div className="hidden items-center gap-stack-lg md:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 py-1 font-mono text-label-bold uppercase transition-colors ${
                  isHome
                    ? "text-on-background hover:bg-primary-container hover:text-on-primary-container"
                    : "text-on-background hover:bg-border-heavy hover:text-primary-fixed dark:text-on-primary-fixed"
                } ${
                  isActive
                    ? isHome
                      ? "border-b-4 border-primary-container"
                      : "border-b-4 border-border-heavy"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-stack-md">
          <ThemeToggle />
          <Link
            href="/about#contact"
            className="hidden border-2 border-black bg-white px-6 py-2 font-mono text-label-bold uppercase text-electric-cyan shadow-[4px_4px_0px_0px_#000000] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:inline-block dark:border-white dark:bg-background dark:text-primary-fixed dark:shadow-[4px_4px_0px_0px_#ffffff]"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
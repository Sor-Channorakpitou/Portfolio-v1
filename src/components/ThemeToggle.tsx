"use client";

import Icon from "./Icon";

export default function ThemeToggle() {
  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
  }

  // Both icons stay rendered; a solid block slides under the active mode, so no
  // display toggling is needed (the icon font's display rule overrides `hidden`).
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="group relative flex h-10 w-[76px] shrink-0 items-center border-2 border-on-background bg-surface-container-lowest shadow-[4px_4px_0px_0px_#000000] transition-all duration-200 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#000000] active:translate-x-1 active:translate-y-1 active:shadow-none dark:shadow-[4px_4px_0px_0px_#ffffff] dark:hover:shadow-[2px_2px_0px_0px_#ffffff] dark:active:shadow-none"
    >
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 w-1/2 bg-on-background transition-transform duration-300 ease-[cubic-bezier(0.7,0,0.3,1)] dark:translate-x-full dark:bg-primary-container"
      />
      <span className="relative z-10 flex h-full w-1/2 items-center justify-center text-primary-container transition-colors duration-300 dark:text-on-background">
        <Icon name="light_mode" filled className="text-xl leading-none" />
      </span>
      <span className="relative z-10 flex h-full w-1/2 items-center justify-center text-on-background transition-colors duration-300 dark:text-black">
        <Icon name="dark_mode" filled className="text-xl leading-none" />
      </span>
    </button>
  );
}

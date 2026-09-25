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

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="flex items-center justify-center border-2 border-on-background bg-surface-container-lowest p-2 text-on-background shadow-[4px_4px_0px_0px_#000000] transition-all duration-200 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:translate-x-0.5 active:translate-y-0.5 active:shadow-none dark:shadow-[4px_4px_0px_0px_#ffffff]"
    >
      <Icon name="dark_mode" className="text-xl text-primary-container dark:hidden" />
      <Icon name="light_mode" filled className="hidden text-xl text-primary-container dark:inline" />
    </button>
  );
}
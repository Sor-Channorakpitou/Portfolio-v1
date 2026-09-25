const SOCIALS = [
  { label: "GITHUB", href: "https://github.com/Sor-Channorakpitou" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/sor-channorakpitou-03496a385" },
];

export default function Footer() {
  return (
    <footer className="mt-section-gap w-full border-t-4 border-on-background bg-border-heavy font-mono uppercase">
      <div className="mx-auto flex max-w-page flex-col items-center justify-between gap-stack-md p-stack-lg md:flex-row">
        <p className="text-label-bold text-primary-fixed">
          ©{new Date().getFullYear()} VzTu. ALL RIGHTS RESERVED.
        </p>
        <nav className="flex gap-stack-md text-label-bold text-surface-variant">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-surface-variant transition-[opacity,transform] hover:scale-105 hover:text-primary-fixed-dim dark:text-primary-fixed"
            >
              {social.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
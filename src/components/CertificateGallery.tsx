"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import type { Certificate } from "@/data/education";

function toPreview(url: string) {
  return url.replace("/view", "/preview");
}

export default function CertificateGallery({ certificates }: { certificates: Certificate[] }) {
  const [active, setActive] = useState<Certificate | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
        {certificates.map((cert) => (
          <article
            key={cert.title}
            className="flex flex-col border-2 border-on-background bg-surface-container-lowest p-stack-lg shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]"
          >
            <span className="mb-stack-md w-max border-2 border-on-background bg-primary-container px-3 py-1 font-mono text-label-bold uppercase text-on-primary-container">
              {cert.year}
            </span>
            <h3 className="mb-stack-sm font-headline text-headline-md uppercase text-on-background">
              {cert.title}
            </h3>
            <p className="mb-stack-sm font-mono text-label-bold uppercase text-primary">{cert.issuer}</p>
            <p className="mb-stack-md text-body-md text-on-surface-variant">{cert.note}</p>
            <button
              type="button"
              onClick={() => setActive(cert)}
              className="mt-auto inline-flex w-max items-center gap-2 border-2 border-on-background bg-surface-container-lowest px-4 py-2 font-mono text-label-bold uppercase text-on-background shadow-brutal transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:shadow-[4px_4px_0px_0px_#ffffff] dark:hover:shadow-none"
            >
              View Certificate
              <Icon name="open_in_new" className="text-sm" />
            </button>
          </article>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="flex max-h-[90vh] w-full max-w-4xl flex-col border-2 border-on-background bg-surface-container-lowest shadow-brutal dark:shadow-[8px_8px_0px_0px_#000000]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b-2 border-on-background p-stack-md">
              <div>
                <h3 className="font-headline text-headline-md uppercase text-on-background">
                  {active.title}
                </h3>
                <p className="mt-1 font-mono text-label-bold uppercase text-primary">
                  {active.issuer} · {active.year}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={active.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 border-2 border-on-background bg-surface-container-lowest px-3 py-1.5 font-mono text-label-bold uppercase text-on-background transition-colors hover:bg-primary-container hover:text-on-primary-container"
                >
                  Open
                  <Icon name="open_in_new" className="text-sm" />
                </a>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="flex items-center border-2 border-on-background bg-border-heavy px-3 py-1.5 font-mono text-label-bold uppercase text-primary-fixed shadow-[4px_4px_0px_0px_var(--color-primary-container)] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  <Icon name="close" />
                </button>
              </div>
            </div>
            <iframe
              src={toPreview(active.link)}
              title={active.title}
              className="h-[70vh] min-h-0 w-full border-0"
            />
          </div>
        </div>
      )}
    </>
  );
}
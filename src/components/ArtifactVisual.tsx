import type { Artifact } from "@/data/projects";
import Icon from "./Icon";

type Props = {
  artifact: Artifact;
  aspectClass: string;
};

function TerminalArtifact({ lines }: { lines: string[] }) {
  return (
    <div className="flex h-full w-full flex-col justify-start gap-2 bg-border-heavy p-4 font-mono text-code-sm text-primary-fixed">
      <div className="flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-full bg-surface-bright" />
        <span className="h-3 w-3 rounded-full bg-surface-bright" />
        <span className="h-3 w-3 rounded-full bg-surface-bright" />
        <span className="ml-2 text-surface-variant dark:text-surface-bright">designer.exe</span>
      </div>
      <div className="mt-2 flex flex-col gap-1">
        {lines.map((line, i) => (
          <span key={i} className={line.startsWith("$") ? "text-surface-bright" : "text-primary-fixed-dim"}>
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ArtifactVisual({ artifact, aspectClass }: Props) {
  return (
    <div className={`relative ${aspectClass} overflow-hidden border-2 border-on-background bg-surface-container`}>
      {artifact.type === "image" && (
        <img
          src={artifact.src}
          alt={artifact.label}
          loading="lazy"
          className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
        />
      )}
      {artifact.type === "terminal" && <TerminalArtifact lines={artifact.lines} />}
      {artifact.type === "icon" && (
        <div className="flex h-full w-full items-center justify-center bg-primary-container">
          <Icon name={artifact.icon} className="text-[120px] text-on-background transition-transform duration-300 group-hover:scale-110 dark:text-on-primary-container" />
        </div>
      )}
    </div>
  );
}
import type { Artifact } from "@/data/projects";
import Icon from "./Icon";

type Props = {
  artifact: Artifact;
  aspectClass: string;
};

function WindowDots({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
      <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
      <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      <span className="ml-2 truncate text-[#9aa7a8]">{title}</span>
    </div>
  );
}

function TerminalArtifact({ lines }: { lines: string[] }) {
  return (
    <div className="flex h-full w-full flex-col justify-start gap-2 overflow-auto bg-border-heavy p-4 font-mono text-code-sm text-primary-fixed">
      <WindowDots title="terminal" />
      <div className="mt-2 flex flex-col gap-1">
        {lines.map((line, i) => (
          <span
            key={i}
            className={`whitespace-pre ${line.startsWith("$") ? "text-[#eaf2f3]" : "text-primary-fixed-dim"}`}
          >
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}

function CodeArtifact({ file, lines }: { file: string; lines: string[] }) {
  return (
    <div className="flex h-full w-full flex-col gap-2 overflow-auto bg-border-heavy p-4 font-mono text-code-sm">
      <WindowDots title={file} />
      <pre className="mt-2 text-[#eaf2f3]">
        {lines.map((line, i) => (
          <span key={i} className="block whitespace-pre">
            <span className="mr-4 inline-block w-5 select-none text-right text-[#7d8a8b]">{i + 1}</span>
            {line}
          </span>
        ))}
      </pre>
    </div>
  );
}

export default function ArtifactVisual({ artifact, aspectClass }: Props) {
  // Code and terminal panels size to their content; only visuals keep a fixed ratio.
  const isText = artifact.type === "code" || artifact.type === "terminal";
  return (
    <div
      className={`relative overflow-hidden border-2 border-on-background bg-surface-container ${
        isText ? "min-h-48 bg-border-heavy" : aspectClass
      }`}
    >
      {artifact.type === "image" && (
        <img
          src={artifact.src}
          alt={artifact.label}
          loading="lazy"
          className="h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
        />
      )}
      {artifact.type === "terminal" && <TerminalArtifact lines={artifact.lines} />}
      {artifact.type === "code" && <CodeArtifact file={artifact.file} lines={artifact.lines} />}
      {artifact.type === "icon" && (
        <div className="flex h-full w-full items-center justify-center bg-primary-container">
          <Icon name={artifact.icon} className="text-[120px] text-on-background transition-transform duration-300 group-hover:scale-110 dark:text-on-primary-container" />
        </div>
      )}
    </div>
  );
}

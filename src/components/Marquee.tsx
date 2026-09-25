const ITEMS = [
  "OPEN TO INTERNSHIP",
  "REACTJS",
  "TAILWIND",
  "EXPRESSJS",
  "TYPESCRIPT",
  "POSTGRES",
  "MYSQL",
];

export default function Marquee() {
  return (
    <div className="relative flex overflow-hidden whitespace-nowrap border-b-4 border-on-background bg-border-heavy py-stack-sm font-mono text-label-bold uppercase tracking-widest text-primary-fixed">
      {[0, 1].map((copy) => (
        <div key={copy} className="animate-marquee flex shrink-0" aria-hidden={copy === 1}>
          {ITEMS.map((item) => (
            <span key={item} className="flex items-center">
              <span className="px-4">{item}</span>
              <span>{"//"}</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
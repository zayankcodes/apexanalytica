// ── Rotating concentric circuitry network ──────────────────────────────
const RINGS = [480, 400, 320, 240, 160, 80];

export default function TechBackground() {
  return (
    <svg
      className="fixed left-1/2 top-1/2 -z- h-[200vmax] w-[200vmax]
                 -translate-x-1/2 -translate-y-1/2 origin-center
                 pointer-events-none opacity-30"
      viewBox="0 0 1000 1000"
      fill="none"
    >
      <g
        className="animate-spinSlow origin-center"
        stroke="#2563ff"
        strokeWidth="0.8"
        strokeLinecap="round"
      >
        {RINGS.map((r) => (
          <circle key={r} cx="500" cy="500" r={r} />
        ))}

        {Array.from({ length: 72 }).map((_, i) => {
          const a = (i / 72) * Math.PI * 2;
          return (
            <line
              key={i}
              x1={500 + Math.cos(a) * 60}
              y1={500 + Math.sin(a) * 60}
              x2={500 + Math.cos(a) * 500}
              y2={500 + Math.sin(a) * 500}
              strokeOpacity="0.18"
            />
          );
        })}

        {RINGS.flatMap((r, ri) =>
          Array.from({ length: 24 }).map((_, i) => {
            const a = ((i + ri * 5) / 24) * Math.PI * 2;
            return (
              <circle
                key={`${r}-${i}`}
                cx={500 + Math.cos(a) * r}
                cy={500 + Math.sin(a) * r}
                r={ri % 2 ? 1 : 1.5}
                fill="#3b82ff"
                fillOpacity="0.5"
              />
            );
          })
        )}
      </g>
    </svg>
  );
}

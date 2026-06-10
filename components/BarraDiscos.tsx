"use client";

/**
 * Barra olímpica en SVG: dibuja un disco por ejercicio del día,
 * pintados los completados. Réplica del renderBarra() original.
 */
export function BarraDiscos({
  total,
  hechos,
  lastAdded,
}: {
  total: number;
  hechos: number;
  /** índice (0-based) del disco recién marcado, para animarlo */
  lastAdded: number | null;
}) {
  const discos = [];
  for (let j = 0; j < total; j++) {
    const h = 42 - j * 4;
    const y = 27 - h / 2;
    const lx = 92 - j * 13;
    const rx = 199 + j * 13;
    if (j < hechos) {
      const anim =
        lastAdded === j
          ? { animation: "platein .28s cubic-bezier(.2,1.4,.4,1)" }
          : undefined;
      discos.push(
        <rect key={`l${j}`} fill="#C9252D" stroke="#A31C24" strokeWidth="1.5" x={lx} y={y} width="9" height={h} rx="3" style={anim} />,
        <rect key={`r${j}`} fill="#C9252D" stroke="#A31C24" strokeWidth="1.5" x={rx} y={y} width="9" height={h} rx="3" style={anim} />,
      );
    } else {
      discos.push(
        <rect key={`l${j}`} fill="none" stroke="#C4BBA2" strokeDasharray="3 3" strokeWidth="1.5" x={lx} y={y} width="9" height={h} rx="3" />,
        <rect key={`r${j}`} fill="none" stroke="#C4BBA2" strokeDasharray="3 3" strokeWidth="1.5" x={rx} y={y} width="9" height={h} rx="3" />,
      );
    }
  }

  return (
    <svg id="barraSvg" viewBox="0 0 300 50" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <line stroke="#43464D" strokeWidth="5" strokeLinecap="round" x1="14" y1="27" x2="286" y2="27" />
      <rect fill="#6B6E76" x="16" y="24" width="86" height="6" rx="3" />
      <rect fill="#6B6E76" x="198" y="24" width="86" height="6" rx="3" />
      <rect fill="#1C1B17" x="100" y="20" width="6" height="14" rx="2" />
      <rect fill="#1C1B17" x="194" y="20" width="6" height="14" rx="2" />
      {discos}
    </svg>
  );
}

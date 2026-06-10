"use client";

import { useState } from "react";
import { type Ejercicio, TIPO } from "@/lib/data";

export function ExerciseCard({
  ej,
  num,
  hecho,
  peso,
  onToggle,
  onPeso,
  onOpenModal,
}: {
  ej: Ejercicio;
  num: number;
  hecho: boolean;
  peso: string;
  onToggle: () => void;
  onPeso: (value: string) => void;
  onOpenModal: () => void;
}) {
  const [imgError, setImgError] = useState(false);
  const [tl, tc] = TIPO[ej.t] ?? ["", ""];

  return (
    <article className={`card${hecho ? " hecho" : ""}`}>
      <div className="card-top">
        <div
          className="fig-img"
          role="button"
          tabIndex={0}
          aria-label={`Ver ${ej.n}`}
          onClick={onOpenModal}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onOpenModal();
            }
          }}
        >
          {imgError ? (
            <div className="fallback">🏋️</div>
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={ej.img}
              alt={ej.n}
              loading="lazy"
              onError={() => setImgError(true)}
            />
          )}
          <div className="lupa" aria-hidden="true">
            🔍
          </div>
        </div>

        <div className="info">
          <span className="num">EJERCICIO {String(num).padStart(2, "0")}</span>
          <h3 className="nombre">{ej.n}</h3>
          <div className="chips">
            <span className="chip rojo">{ej.s}</span>
            <span className="chip">⏱ {ej.r}</span>
            <span className={`chip ${tc}`}>{tl}</span>
          </div>
          <p className="tip">{ej.tip}</p>
        </div>

        <div className="card-right">
          <button
            className={`check${hecho ? " on" : ""}`}
            aria-pressed={hecho}
            aria-label={`Marcar ${ej.n} como hecho`}
            onClick={onToggle}
          >
            ✓
          </button>
        </div>
      </div>

      <div className="peso-linea">
        <label htmlFor={`p-${num}`}>Mi peso</label>
        <input
          id={`p-${num}`}
          type="text"
          inputMode="text"
          maxLength={50}
          placeholder="ej: 14 kg × 10, 9, 8…"
          value={peso}
          onChange={(e) => onPeso(e.target.value)}
        />
      </div>
    </article>
  );
}

"use client";

import { useEffect } from "react";
import { type Ejercicio, TIPO } from "@/lib/data";
import { ExerciseMedia } from "@/components/ExerciseMedia";

export function ExerciseModal({
  ej,
  onClose,
}: {
  ej: Ejercicio | null;
  onClose: () => void;
}) {
  const open = ej !== null;

  // Bloquea scroll del body + cierre con Escape mientras está abierto.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const [tl, tc] = ej ? TIPO[ej.t] ?? ["", ""] : ["", ""];

  return (
    <div
      className={`modal-overlay${open ? " open" : ""}`}
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-box">
        <button className="modal-close" aria-label="Cerrar" onClick={onClose}>
          ✕
        </button>
        <div className="modal-img">
          {ej && <ExerciseMedia src={ej.img} alt={ej.n} />}
        </div>
        <div className="modal-body">
          <div className="modal-title">{ej?.n}</div>
          <div className="modal-chips">
            {ej && (
              <>
                <span className="chip rojo">{ej.s}</span>
                <span className="chip">⏱ {ej.r}</span>
                <span className={`chip ${tc}`}>{tl}</span>
              </>
            )}
          </div>
          <div className="modal-notes">{ej?.tip}</div>
        </div>
      </div>
    </div>
  );
}

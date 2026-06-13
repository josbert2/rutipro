"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type SaveStatus = "idle" | "loading" | "saving" | "saved" | "error";

interface Progress {
  checks: Record<string, boolean>;
  pesos: Record<string, string>;
}

const EMPTY: Progress = { checks: {}, pesos: {} };

export function exId(di: number, gi: number, ei: number) {
  return `d${di}g${gi}e${ei}`;
}

/**
 * Estado de progreso (checks + pesos) persistido en localStorage.
 * Replica el window.storage del HTML original: debounce de 600ms al guardar
 * y un indicador de estado ("Guardando…" / "Guardado").
 *
 * Cada rutina pasa su propia `storageKey`, así los progresos no se pisan.
 * Al cambiar de rutina, recarga el progreso de esa clave.
 */
export function useProgress(storageKey: string) {
  const [progress, setProgress] = useState<Progress>(EMPTY);
  const [status, setStatus] = useState<SaveStatus>("loading");
  const [ready, setReady] = useState(false);
  const saveT = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Carga (solo cliente) y recarga al cambiar de rutina.
  useEffect(() => {
    setReady(false);
    setStatus("loading");
    let cargado: Progress = EMPTY;
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const d = JSON.parse(raw) as Partial<Progress>;
        cargado = { checks: d.checks || {}, pesos: d.pesos || {} };
      }
    } catch {
      /* ignora json corrupto */
    }
    setProgress(cargado);
    setStatus("idle");
    setReady(true);
    // Cancela cualquier guardado pendiente al cambiar de clave / desmontar.
    return () => {
      if (saveT.current) clearTimeout(saveT.current);
    };
  }, [storageKey]);

  const persist = useCallback(
    (next: Progress) => {
      setStatus("saving");
      if (saveT.current) clearTimeout(saveT.current);
      saveT.current = setTimeout(() => {
        try {
          localStorage.setItem(storageKey, JSON.stringify(next));
          setStatus("saved");
        } catch {
          setStatus("error");
        }
      }, 600);
    },
    [storageKey],
  );

  const toggleCheck = useCallback(
    (id: string) => {
      setProgress((prev) => {
        const checks = { ...prev.checks };
        if (checks[id]) delete checks[id];
        else checks[id] = true;
        const next = { ...prev, checks };
        persist(next);
        return next;
      });
    },
    [persist],
  );

  const setPeso = useCallback(
    (id: string, value: string) => {
      setProgress((prev) => {
        const pesos = { ...prev.pesos };
        const v = value.trim();
        if (v) pesos[id] = v;
        else delete pesos[id];
        const next = { ...prev, pesos };
        persist(next);
        return next;
      });
    },
    [persist],
  );

  const resetDia = useCallback(
    (ids: string[]) => {
      setProgress((prev) => {
        const checks = { ...prev.checks };
        ids.forEach((id) => delete checks[id]);
        const next = { ...prev, checks };
        persist(next);
        return next;
      });
    },
    [persist],
  );

  return { progress, status, ready, toggleCheck, setPeso, resetDia };
}

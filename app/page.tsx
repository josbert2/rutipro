"use client";

import { useEffect, useMemo, useState } from "react";
import { DIAS, type Ejercicio } from "@/lib/data";
import { exId, useProgress, type SaveStatus } from "@/lib/useProgress";
import { BarraDiscos } from "@/components/BarraDiscos";
import { ExerciseCard } from "@/components/ExerciseCard";
import { ExerciseModal } from "@/components/ExerciseModal";

const STATUS_TXT: Record<SaveStatus, string> = {
  idle: "Listo",
  loading: "Cargando…",
  saving: "Guardando…",
  saved: "Guardado",
  error: "Error al guardar",
};

export default function Home() {
  const [activeDay, setActiveDay] = useState(0);
  const [modalEj, setModalEj] = useState<Ejercicio | null>(null);
  const [lastAdded, setLastAdded] = useState<number | null>(null);

  const { progress, status, ready, toggleCheck, setPeso, resetDia } =
    useProgress();

  // Día activo inicial = día de la semana (lun–vie), igual que el original.
  useEffect(() => {
    const d = new Date().getDay();
    setActiveDay(d >= 1 && d <= 5 ? d - 1 : 0);
  }, []);

  const totalDia = (di: number) =>
    DIAS[di].grupos.reduce((a, g) => a + g.ej.length, 0);
  const doneDia = (di: number) =>
    DIAS[di].grupos.reduce(
      (a, g, gi) =>
        a + g.ej.filter((_, ei) => progress.checks[exId(di, gi, ei)]).length,
      0,
    );

  const dia = DIAS[activeDay];
  const total = totalDia(activeDay);
  const hechos = doneDia(activeDay);
  const completo = hechos === total && hechos > 0;

  // Índice global del disco recién marcado, para animar la barra.
  const orderIndex = useMemo(() => {
    // mapa id -> índice de orden dentro del día
    const map: Record<string, number> = {};
    let i = 0;
    dia.grupos.forEach((g, gi) =>
      g.ej.forEach((_, ei) => {
        map[exId(activeDay, gi, ei)] = i++;
      }),
    );
    return map;
  }, [dia, activeDay]);

  const handleToggle = (id: string, wasOn: boolean) => {
    // si se está marcando (no desmarcando) y completa la barra, animamos
    setLastAdded(!wasOn ? hechos : null);
    toggleCheck(id);
  };

  const handleReset = () => {
    const ids: string[] = [];
    dia.grupos.forEach((g, gi) =>
      g.ej.forEach((_, ei) => ids.push(exId(activeDay, gi, ei))),
    );
    resetDia(ids);
    setLastAdded(null);
  };

  let ejIdx = 0;

  return (
    <div className="wrap">
      <header>
        <span className="eyebrow">Mancuernas + banco plano e inclinado</span>
        <h1>
          Rutina de
          <br />
          <span className="rojo">Fierros</span>
        </h1>
        <p className="sub">
          <b>5 días · 2× por músculo · ejercicios distintos cada sesión.</b>{" "}
          Mantén la rutina 6–8 semanas y sube cargas.
        </p>
        <span className="objetivo">Objetivo: mamado en diciembre</span>
        <div className={`guardado${status === "saved" ? " on" : ""}`}>
          <span className="dot" />
          <span>{ready ? STATUS_TXT[status] : STATUS_TXT.loading}</span>
        </div>
      </header>

      <div className="barra-zona">
        <div className="barra-label">
          <span>
            {dia.tag} — {hechos} de {total} discos
          </span>
          <span className={`cargada${completo ? " show" : ""}`}>
            ¡Barra cargada! 🔩
          </span>
        </div>
        <BarraDiscos
          total={total}
          hechos={hechos}
          lastAdded={lastAdded}
        />
      </div>

      <nav className="dias" aria-label="Días de entrenamiento">
        {DIAS.map((d, i) => {
          const h = doneDia(i);
          const t = totalDia(i);
          return (
            <button
              key={d.key}
              className={`dia-btn${i === activeDay ? " activo" : ""}`}
              onClick={() => {
                setActiveDay(i);
                setLastAdded(null);
              }}
            >
              <span className="d">{d.dia}</span>
              <span className="n">{d.tag}</span>
              <span className="hechos">{h > 0 ? `${h}/${t} ✓` : " "}</span>
            </button>
          );
        })}
      </nav>

      <main aria-live="polite">
        <div className="dia-head">
          <h2 dangerouslySetInnerHTML={{ __html: dia.titulo }} />
          <p className="dia-meta">
            <b>{dia.tag}</b> · {dia.dur}
          </p>
          <div className="info-cards">
            <div className="info-card">
              <div className="info-card-label">⚡ Calentamiento</div>
              {dia.warmup}
            </div>
            <div className="info-card">
              <div className="info-card-label">🧘 Estiramiento final</div>
              {dia.stretch}
            </div>
          </div>
        </div>

        {dia.grupos.map((g, gi) => (
          <div key={g.nom}>
            <div className="musculo-header">
              <span className="musculo-nombre">{g.nom}</span>
              <span className="musculo-count">{g.ej.length} ejercicios</span>
            </div>
            <div className="lista">
              {g.ej.map((e, ei) => {
                ejIdx++;
                const id = exId(activeDay, gi, ei);
                const on = !!progress.checks[id];
                return (
                  <ExerciseCard
                    key={id}
                    ej={e}
                    num={ejIdx}
                    hecho={on}
                    peso={progress.pesos[id] ?? ""}
                    onToggle={() => handleToggle(id, on)}
                    onPeso={(v) => setPeso(id, v)}
                    onOpenModal={() => setModalEj(e)}
                  />
                );
              })}
            </div>
          </div>
        ))}

        <div className="dia-pie">
          <button className="reset" onClick={handleReset}>
            Reiniciar día
          </button>
          <span className={`completo-tag${completo ? " show" : ""}`}>
            ¡Sesión completa! 💪
          </span>
        </div>
      </main>

      <section className="notas">
        <h3 className="notas-titulo">El reglamento</h3>
        <details open>
          <summary>Las 5 reglas que te ponen grande</summary>
          <div className="det-body">
            <p>
              <b>1. Sobrecarga progresiva.</b> Anota peso y reps (usa la línea
              &quot;mi peso&quot;). Cuando completes el tope de reps en todas las
              series, sube de peso.
            </p>
            <p>
              <b>2. Cerca del fallo.</b> Las últimas 2–3 reps tienen que costar
              de verdad.
            </p>
            <p>
              <b>3. No cambies los ejercicios cada semana.</b> Mantén esta
              rutina 6–8 semanas. La variedad ya está incorporada (A ≠ B).
            </p>
            <p>
              <b>4. Técnica y rango completo.</b> Bajada de 2–3 s y buen
              estiramiento. Media rep = medio resultado.
            </p>
            <p>
              <b>5. Fuera del gimnasio:</b> 1.6–2.2 g de proteína por kg, 7–9 h
              de sueño, sin eso no hay músculo.
            </p>
          </div>
        </details>
        <details>
          <summary>Plan hasta fin de año</summary>
          <div className="det-body">
            <ul>
              <li>
                <b>Junio–Julio:</b> clavar la técnica y establecer pesos base.
              </li>
              <li>
                <b>Agosto–Octubre:</b> progresión agresiva. Aquí está el grueso.
              </li>
              <li>
                <b>Noviembre:</b> semana de descarga y empuje final.
              </li>
              <li>
                <b>Diciembre:</b> mamado. 📸
              </li>
            </ul>
          </div>
        </details>
      </section>

      <footer>
        Marca tus ejercicios y anota tus pesos: <b>quedan guardados</b> para tu
        próxima sesión.
      </footer>

      <ExerciseModal ej={modalEj} onClose={() => setModalEj(null)} />
    </div>
  );
}

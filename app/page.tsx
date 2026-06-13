"use client";

import { useEffect, useState } from "react";
import { RUTINAS, CALENTAMIENTO, type Ejercicio } from "@/lib/data";
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
  const [activeRoutine, setActiveRoutine] = useState(0);
  const [activeDay, setActiveDay] = useState(0);
  const [modalEj, setModalEj] = useState<Ejercicio | null>(null);
  const [lastAdded, setLastAdded] = useState<number | null>(null);

  const rutina = RUTINAS[activeRoutine];
  const dias = rutina.dias;

  const { progress, status, ready, toggleCheck, setPeso, resetDia } =
    useProgress(rutina.storageKey);

  // Día activo inicial = "hoy" según cada rutina. Se recalcula al cambiar de set.
  useEffect(() => {
    setActiveDay(rutina.diaInicial(new Date().getDay()));
    setLastAdded(null);
  }, [rutina]);

  const totalDia = (di: number) =>
    dias[di].grupos.reduce((a, g) => a + g.ej.length, 0);
  const doneDia = (di: number) =>
    dias[di].grupos.reduce(
      (a, g, gi) =>
        a + g.ej.filter((_, ei) => progress.checks[exId(di, gi, ei)]).length,
      0,
    );

  const dia = dias[activeDay];
  const total = totalDia(activeDay);
  const hechos = doneDia(activeDay);
  const completo = hechos === total && hechos > 0;

  const handleToggle = (id: string, wasOn: boolean) => {
    // si se está marcando (no desmarcando), animamos el disco recién cargado
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
      <nav className="rutina-switch" aria-label="Elegir rutina">
        {RUTINAS.map((r, i) => (
          <button
            key={r.key}
            className={`rutina-pill${i === activeRoutine ? " activo" : ""}`}
            aria-pressed={i === activeRoutine}
            onClick={() => setActiveRoutine(i)}
          >
            {r.nombre}
          </button>
        ))}
      </nav>

      <header>
        <span className="eyebrow">{rutina.eyebrow}</span>
        <h1>
          {rutina.heroTop}
          <br />
          <span className="rojo">{rutina.heroRojo}</span>
        </h1>
        <p className="sub">
          <b>{rutina.subBold}</b>
          {rutina.subRest}
        </p>
        <span className="objetivo">{rutina.objetivo}</span>
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
        {dias.map((d, i) => {
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
              <div className="info-card-label">🧘 Estiramiento final</div>
              {dia.stretch}
            </div>
          </div>
        </div>

        <section className="calentamiento" aria-label="Calentamiento">
          <div className="cal-head">
            <span className="cal-titulo">⚡ Calentamiento</span>
            <span className="cal-dur">~8–10 min antes de empezar</span>
          </div>
          <ol className="cal-pasos">
            {CALENTAMIENTO.map((p) => (
              <li key={p.fase}>
                <b>{p.fase}.</b> {p.detalle}
              </li>
            ))}
          </ol>
          <p className="cal-hoy">
            <b>Hoy ({dia.tag}):</b> {dia.warmup}
          </p>
        </section>

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

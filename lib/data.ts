export type TipoEjercicio = "C" | "A" | "I";

export interface Ejercicio {
  n: string;
  s: string;
  r: string;
  t: TipoEjercicio;
  tip: string;
  img: string;
}

export interface Grupo {
  nom: string;
  ej: Ejercicio[];
}

export interface Dia {
  key: string;
  dia: string;
  tag: string;
  /** Puede traer <span> para resaltar la letra A/B; se renderiza con dangerouslySetInnerHTML. */
  titulo: string;
  dur: string;
  warmup: string;
  stretch: string;
  grupos: Grupo[];
}

export const TIPO: Record<TipoEjercicio, [string, string]> = {
  C: ["Compuesto", "tipo-C"],
  A: ["Aislado", "tipo-A"],
  I: ["Isométrico", "tipo-I"],
};

export const DIAS: Dia[] = [
  {
    key: "lun",
    dia: "Lun",
    tag: "Pecho & Espalda",
    titulo: 'Lunes <span>A</span>',
    dur: "~65 min",
    warmup:
      "5–10 min cardio suave + movilidad hombros/escápulas; 2 series ligeras de press y remo.",
    stretch: "Pectoral en puerta y dorsal (postura del niño) 20–30 s c/u.",
    grupos: [
      {
        nom: "Pecho",
        ej: [
          { n: "Press banca mancuernas", s: "4×6-10", r: "90s", t: "C", tip: "Rango de fuerza. Controla la bajada 2-3 s.", img: "https://fitcron.com/wp-content/uploads/2021/03/02891301-Dumbbell-Bench-Press_Chest_720.gif" },
          { n: "Press inclinado mancuernas", s: "3×8-12", r: "90s", t: "C", tip: "Enfocado en pectoral superior.", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif" },
          { n: "Aperturas con mancuernas", s: "3×12-15", r: "60s", t: "A", tip: "Estiramiento controlado. Brazos semiflexionados fijos.", img: "https://fitcron.com/wp-content/uploads/2021/03/03081301-Dumbbell-Fly_Chest-FIX_720.gif" },
          { n: "Push-ups lentas", s: "2×AMRAP (-1/2 rep)", r: "60s", t: "C", tip: "Baja despacio 3 s, explota al subir.", img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/push-up.png" },
        ],
      },
      {
        nom: "Espalda",
        ej: [
          { n: "Remo a 1 mano en banco", s: "4×8-12 c/brazo", r: "90s", t: "C", tip: "Codo pegado al cuerpo; torso estable. Lleva el codo a la cadera.", img: "https://hips.hearstapps.com/hmg-prod/images/dumbbell-single-arm-row-1547729333.gif" },
          { n: "Remo inclinado 2 manos", s: "3×8-12", r: "90s", t: "C", tip: "Tira hacia la cadera; minimiza el impulso.", img: "https://fitcron.com/wp-content/uploads/2021/04/03271301-Dumbbell-Incline-Row_Back_720.gif" },
          { n: "Pullover con mancuerna", s: "3×10-15", r: "60s", t: "C", tip: "Estiramiento de dorsales; codos semi-flexionados.", img: "https://cambiandoeljuego.com/wp-content/uploads/2018/09/pullover.gif" },
          { n: "Pájaros deltoide posterior", s: "2-3×15-20", r: "60s", t: "A", tip: "Deltoide posterior y trapecio medio.", img: "https://static.strengthlevel.com/images/exercises/dumbbell-reverse-fly/dumbbell-reverse-fly-800.jpg" },
        ],
      },
    ],
  },
  {
    key: "mar",
    dia: "Mar",
    tag: "Hombros · Brazos",
    titulo: 'Martes <span>A</span>',
    dur: "~70 min",
    warmup:
      "5–10 min cardio + rotaciones de hombros; 2 series ligeras de elevaciones y curl.",
    stretch:
      "Deltoide (cruzado), tríceps tras nuca, bíceps en pared y antebrazo 15–20 s c/u.",
    grupos: [
      {
        nom: "Hombros",
        ej: [
          { n: "Press militar con mancuernas", s: "4×6-10", r: "90s", t: "C", tip: "Core activo; no sobreextiendas la lumbar.", img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/seated-dumbbell-shoulder-press.png" },
          { n: "Elevaciones laterales", s: "4×12-20", r: "60s", t: "A", tip: "Sin impulso; muñeca neutra a la altura del hombro.", img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/03/lateral-raise.png" },
          { n: "Pájaros deltoide posterior", s: "3×15-20", r: "60s", t: "A", tip: "Deltoide posterior y trapecio medio.", img: "https://static.strengthlevel.com/images/exercises/dumbbell-reverse-fly/dumbbell-reverse-fly-800.jpg" },
          { n: "Elevación frontal", s: "2×10-15", r: "60s", t: "A", tip: "Controla arriba y abajo; sin balanceo.", img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/dumbbell-front-raise.png" },
        ],
      },
      {
        nom: "Tríceps",
        ej: [
          { n: "Press cerrado con mancuernas", s: "4×8-12", r: "60s", t: "C", tip: "Codos pegados al cuerpo; empuje vertical.", img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/dumbbell-close-grip-press.png" },
          { n: "Extensión sobre la cabeza", s: "3×10-15", r: "60s", t: "A", tip: "1 mancuerna en copa. Mantén codos hacia adelante.", img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/overhead-triceps-extension.png" },
          { n: "Patada de tríceps", s: "3×12-15", r: "60s", t: "A", tip: "Pausa breve en completa extensión.", img: "https://www.inspireusafoundation.org/wp-content/uploads/2021/10/dumbbell-kickback.png" },
        ],
      },
      {
        nom: "Bíceps",
        ej: [
          { n: "Curl alterno con supinación", s: "4×8-12", r: "60s", t: "A", tip: "Evita balanceo; supina la muñeca al subir.", img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/alternating-dumbbell-curl.png" },
          { n: "Curl martillo", s: "3×10-15", r: "60s", t: "A", tip: "Énfasis en braquial y braquiorradial.", img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/hammer-curl.png" },
          { n: "Curl concentración", s: "3×10-12", r: "60s", t: "A", tip: "Codo en muslo interno; aísla al máximo.", img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/dumbbell-concentration-curl.png" },
        ],
      },
      {
        nom: "Antebrazo",
        ej: [
          { n: "Curl de muñeca palmas arriba", s: "3×15-25", r: "60s", t: "A", tip: "Flexores; recorrido completo.", img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/wrist-curl.png" },
          { n: "Curl de muñeca reverso", s: "3×15-25", r: "60s", t: "A", tip: "Extensores; evita mover los brazos.", img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/reverse-wrist-curl.png" },
          { n: "Farmer hold", s: "3×30-60s", r: "60s", t: "I", tip: "Isométrico de agarre; hombros abajo y core firme.", img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/10/farmers-walk.png" },
        ],
      },
    ],
  },
  {
    key: "mie",
    dia: "Mié",
    tag: "Piernas & Core",
    titulo: "Miércoles",
    dur: "~65 min",
    warmup: "5–10 min trote o soga + sentadillas y estocadas sin peso.",
    stretch:
      "Cuádriceps, isquios, glúteos y pantorrillas 20–30 s; cobra para abdomen.",
    grupos: [
      {
        nom: "Cuádriceps",
        ej: [
          { n: "Sentadilla goblet", s: "4×10-15", r: "90s", t: "C", tip: "Torso erguido; baja hasta paralelo o más.", img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Goblet-Squat_600x600.png?v=1612049778" },
          { n: "Zancadas caminando", s: "3×10-12 c/pierna", r: "90s", t: "C", tip: "Paso largo; rodilla estable.", img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/dumbbell-walking-lunge.png" },
          { n: "Step-up al banco", s: "3×10-12 c/pierna", r: "90s", t: "C", tip: "Empuja con la pierna de apoyo; controla la bajada.", img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/dumbbell-step-up.png" },
        ],
      },
      {
        nom: "Isquios / Glúteos",
        ej: [
          { n: "Peso muerto rumano", s: "4×8-12", r: "90s", t: "C", tip: "Caderas atrás; espalda neutra.", img: "https://static.wixstatic.com/media/c94d75_ed1cfc9ed62b4864aa554972e6b974f4~mv2.gif" },
          { n: "Hip thrust en banco", s: "3×10-12", r: "90s", t: "C", tip: "Pausa 1 seg en máxima contracción.", img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/dumbbell-hip-thrust.png" },
          { n: "Peso muerto a 1 pierna", s: "3×10-12 c/pierna", r: "90s", t: "C", tip: "Equilibrio y control; cadera cuadrada.", img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/single-leg-rdl.png" },
        ],
      },
      {
        nom: "Pantorrillas",
        ej: [
          { n: "Elevación de talones de pie", s: "4×12-20", r: "60s", t: "A", tip: "Pausa arriba 1 seg; rango completo.", img: "https://www.thingys.com.ar/gymapps/tutorial/pant_pie.gif" },
          { n: "Elevación de talones sentado", s: "3×12-15", r: "60s", t: "A", tip: "Énfasis sóleo; ritmo controlado.", img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/seated-calf-raise-dumbbells.png" },
          { n: "Elevación en escalón", s: "3×12-20", r: "60s", t: "A", tip: "Mayor estiramiento; evita el rebote.", img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/standing-calf-raise.png" },
        ],
      },
      {
        nom: "Core",
        ej: [
          { n: "Crunch en banco/suelo", s: "3×15-20", r: "45-60s", t: "A", tip: "Exhala al subir; no tironees el cuello.", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Crunch.gif" },
          { n: "Elevaciones de piernas", s: "3×12-15", r: "45-60s", t: "A", tip: "Lumbares pegadas; controla la bajada.", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lying-Leg-Raise.gif" },
          { n: "Plancha frontal", s: "3×30-45s", r: "30-45s", t: "I", tip: "Isométrico; glúteos y abdomen firmes.", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Plank.gif" },
        ],
      },
    ],
  },
  {
    key: "jue",
    dia: "Jue",
    tag: "Pecho · Hombros · Tríceps",
    titulo: 'Jueves <span>B</span>',
    dur: "~65 min",
    warmup: "Cardio 5–10 min + series ligeras de press y elevaciones.",
    stretch: "Pectoral, deltoide anterior y tríceps 20–25 s c/u.",
    grupos: [
      {
        nom: "Pecho",
        ej: [
          { n: "Press inclinado mancuernas", s: "4×8-12", r: "90s", t: "C", tip: "Hoy el inclinado es el pesado. Pectoral superior.", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif" },
          { n: "Floor press (suelo)", s: "3×8-12", r: "90s", t: "C", tip: "Pausa ligera en el suelo. Codos a 45°.", img: "https://static.strengthlevel.com/images/exercises/dumbbell-floor-press/dumbbell-floor-press-800.jpg" },
          { n: "Press agarre neutro", s: "3×10-12", r: "90s", t: "C", tip: "Palmas mirándose. Codos pegados al cuerpo.", img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/neutral-grip-dumbbell-bench-press.png" },
          { n: "Aperturas o push-ups finisher", s: "2×12-15 / AMRAP", r: "60s", t: "C", tip: "Elige el que prefieras para terminar.", img: "https://fitcron.com/wp-content/uploads/2021/03/03081301-Dumbbell-Fly_Chest-FIX_720.gif" },
        ],
      },
      {
        nom: "Hombros",
        ej: [
          { n: "Press Arnold", s: "4×8-12", r: "90s", t: "C", tip: "No arquees la lumbar; abdomen activo. Rotación completa.", img: "https://fitcron.com/wp-content/uploads/2021/04/02871301-Dumbbell-Arnold-Press-II_Shoulders_720.gif" },
          { n: "Elevaciones laterales con pausa", s: "4×12-20", r: "60s", t: "A", tip: "Pausa 1 seg en contracción máxima.", img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/03/lateral-raise.png" },
          { n: "Pájaros lento y controlado", s: "3×15-20", r: "60s", t: "A", tip: "Deltoide posterior; movimiento fluido.", img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/reverse-dumbbell-fly-incline-bench.png" },
          { n: "Y-raise en banco inclinado", s: "2-3×12-15", r: "60s", t: "A", tip: "Trapecio inferior y deltoides.", img: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Incline-Available-Dumbbell-Y-Raise.gif" },
        ],
      },
      {
        nom: "Tríceps",
        ej: [
          { n: "Fondos entre bancos", s: "4×8-15", r: "60s", t: "C", tip: "Baja controlado; codos hacia atrás.", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bench-Dips.gif" },
          { n: "Skull crushers", s: "3×10-15", r: "60s", t: "A", tip: "Mancuernas a los lados de la cabeza.", img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/lying-triceps-extension.png" },
          { n: "Press francés sentado", s: "2-3×10-15", r: "60s", t: "A", tip: "Estira bien abajo; cuidado con el cuello.", img: "https://www.entrenador.fit/wp-content/uploads/Extensi%C3%B3n-de-triceps-sentado-con-mancuernas.gif" },
        ],
      },
    ],
  },
  {
    key: "vie",
    dia: "Vie",
    tag: "Espalda · Bíceps · Antebrazo",
    titulo: 'Viernes <span>B</span>',
    dur: "~65 min",
    warmup: "Cardio ligero + 2 series suaves de remo y curl.",
    stretch: "Dorsal, bíceps y antebrazo 20–25 s c/u.",
    grupos: [
      {
        nom: "Espalda",
        ej: [
          { n: "Remo pecho apoyado en banco", s: "4×8-12", r: "90s", t: "C", tip: "Pecho apoyado; minimiza el balanceo.", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Chest-Supported-Dumbbell-Row.gif" },
          { n: "Remo 1 mano con pausa 2 seg", s: "3×10-12", r: "90s", t: "C", tip: "Pausa en contracción máxima.", img: "https://static.strengthlevel.com/images/exercises/dumbbell-row/dumbbell-row-800.jpg" },
          { n: "Pull-over lento", s: "2-3×12-15", r: "60s", t: "C", tip: "Controla la excéntrica (bajada).", img: "https://cambiandoeljuego.com/wp-content/uploads/2018/09/pullover.gif" },
          { n: "Encogimientos trapecio", s: "3×12-20", r: "60s", t: "A", tip: "Sube recto y pausa arriba.", img: "https://fitcron.com/wp-content/uploads/2021/04/03291301-Dumbbell-Incline-Shrug_Back_720.gif" },
        ],
      },
      {
        nom: "Bíceps",
        ej: [
          { n: "Curl inclinado en banco", s: "4×8-12", r: "60s", t: "A", tip: "Gran estiramiento; espalda pegada al banco.", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Curl.gif" },
          { n: "Curl spider (pecho apoyado)", s: "3×10-15", r: "60s", t: "A", tip: "Brazos colgando verticales; aísla el pico del bíceps.", img: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Dumbbell-Spider-Curl.gif" },
          { n: "Curl reverso", s: "3×12-15", r: "60s", t: "A", tip: "Agarre prono; trabaja antebrazos y braquial.", img: "https://i.pinimg.com/originals/d9/4f/9d/d94f9ddafd70a0725d160242a7aae78b.gif" },
        ],
      },
      {
        nom: "Antebrazo",
        ej: [
          { n: "Curl martillo lento", s: "3×10-15", r: "60s", t: "A", tip: "Controla la bajada; sin rebote.", img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/hammer-curl.png" },
          { n: "Pronación / supinación", s: "3×12-20 c/lado", r: "60s", t: "A", tip: "Gira la muñeca controladamente con peso ligero.", img: "https://makeagif.com/media/9-10-2015/R6wRqD.gif" },
          { n: "Farmer hold / Dead hang", s: "3×30-60s", r: "60s", t: "I", tip: "Sostén mancuernas pesadas o cuélgate de la barra.", img: "https://gymvisual.com/img/p/2/2/4/6/9/22469.gif" },
        ],
      },
    ],
  },
];

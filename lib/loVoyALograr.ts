// Datos crudos de la rutina "Lo voy a lograr" (plan hipertrofia ~10 kg, Mié–Dom).
// Copiados de rutina-jos (/camila). Se adaptan al formato de rutipro en lib/data.ts.

export interface WorkoutExercise {
  name: string;
  sets: string;
  rest: string;
  notes?: string;
  type: string;
  imageUrl?: string;
  videoUrl?: string;
}

export interface WorkoutGroup {
  name: string;
  muscleGroup: string;
  exercises: WorkoutExercise[];
}

export interface Workout {
  title: string;
  subtitle: string;
  dayOfWeek: number;
  warmup: string;
  stretching: string;
  groups: WorkoutGroup[];
}

export interface WorkoutData {
  [key: number]: Workout;
}



// ─────────────────────────────────────────────────────────────────────────────
// PLAN HIPERTROFIA · MANCUERNAS FIJAS ~10 kg + BANCO · NIVEL INTERMEDIO
//
// Principios aplicados:
//  • Tiempo bajo tensión (TUT): tempo 3-1-2 en la mayoría de ejercicios
//  • Progresión sin subir peso: más series, pausa, rango de movimiento, AMRAP
//  • Variantes de push-up como "movimiento compuesto libre" de alta demanda
//  • Superseries agonista-antagonista donde aplica para mayor volumen eficiente
//  • Core integrado en días de pierna + viernes
// ─────────────────────────────────────────────────────────────────────────────

export const workoutData: WorkoutData = {
  1: {
    title: "MIÉRCOLES",
    subtitle: "Pecho y Espalda",
    dayOfWeek: 1,
    warmup: "5–10 min cardio suave + círculos de hombros; 2 series ligeras de press y remo con la mancuerna más liviana.",
    stretching: "Pectoral en puerta 30s + postura del niño (dorsal) 30s + ángel de pared 10 reps.",
    groups: [
      {
        name: "PECHO (A)",
        muscleGroup: "chest",
        exercises: [
          {
            name: "Press Plano con Mancuernas",
            sets: "4 x 8-12",
            rest: "90s",
            notes: "Base del entrenamiento de pecho. Baja controlado, empuja explosivo. Core activo.",
            type: "Compuesto",
            videoUrl: "/camila/pecho/5---Press-Plano-con-Mancuernas.mp4"
          },
          {
            name: "Press con Mancuernas con Agarre Neutro",
            sets: "4 x 10-12",
            rest: "90s",
            notes: "Palmas mirándose. Mayor estabilidad en hombros y activa más pecho interno.",
            type: "Compuesto",
            videoUrl: "/camila/pecho/4---Press-con-Mancuernas-con-Agarre-Neutro.mp4"
          },
          {
            name: "Vuelo con Mancuernas",
            sets: "3 x 12-15",
            rest: "60s",
            notes: "Aislamiento puro de pecho. Codos ligeramente flexionados, baja hasta sentir el estiramiento.",
            type: "Aislado",
            videoUrl: "/camila/pecho/2---Vuelo-con-Mancuernas.mp4"
          }
        ]
      },
      {
        name: "ESPALDA (A)",
        muscleGroup: "back",
        exercises: [
          {
            name: "Remo con mancuernas con dos brazos anchos",
            sets: "4 x 10-12",
            rest: "90s",
            notes: "Codos abiertos hacia afuera a 45-60°. Enfocado en espalda superior, trapecio medio y romboides. Aprieta 1s arriba.",
            type: "Compuesto",
            videoUrl: "/camila/espalda/1---Remo-con-mancuernas-con-dos-brazos-anchos.mp4"
          },
          {
            name: "Remo con mancuernas con dos brazos estándar",
            sets: "4 x 10-12",
            rest: "90s",
            notes: "Codos pegados al cuerpo. Trabaja dorsales y espalda media. Torso a 45° y control en la excéntrica.",
            type: "Compuesto",
            videoUrl: "/camila/espalda/2---Remo-con-mancuernas-con-dos-brazos-estándar.mp4"
          },
          {
            name: "Elevación lateral inclinada (deltoide posterior)",
            sets: "3 x 15-20",
            rest: "60s",
            notes: "Inclinado hacia adelante. Codos ligeramente flexionados, eleva hacia los lados. Focaliza en deltoide posterior.",
            type: "Aislado",
            videoUrl: "/camila/espalda/5---Elevación-lateral-inclinada.mp4"
          }
        ]
      }
    ]
  },

  2: {
    title: "JUEVES",
    subtitle: "Hombros, Tríceps, Bíceps y Antebrazo",
    dayOfWeek: 2,
    warmup: "5 min cardio + 10 rotaciones de hombro c/dirección + 2 series livianas de elevaciones y curl.",
    stretching: "Deltoide cruzado 20s + tríceps tras nuca 20s + bíceps en pared 20s + antebrazo flexor/extensor 15s c/u.",
    groups: [
      {
        name: "HOMBROS (A)",
        muscleGroup: "shoulders",
        exercises: [
          {
            name: "Press de hombros con mancuernas",
            sets: "4 x 10-12",
            rest: "90s",
            notes: "Movimiento principal de hombros. Core activo, empuja controlado hasta extensión completa.",
            type: "Compuesto",
            videoUrl: "/camila/hombros/2---Press-de-hombros-con-mancuernas.mp4"
          },
          {
            name: "Elevación lateral con mancuernas",
            sets: "4 x 12-15",
            rest: "60s",
            notes: "Deltoides lateral. Codos ligeramente flexionados, eleva hasta la altura de los hombros.",
            type: "Aislado",
            videoUrl: "/camila/hombros/3---Elevación-lateral-con-mancuernas.mp4"
          },
          {
            name: "Elevación lateral inclinado sentado (deltoide posterior)",
            sets: "3 x 15-20",
            rest: "60s",
            notes: "Sentado e inclinado hacia adelante. Focaliza en deltoide posterior sin trampas.",
            type: "Aislado",
            videoUrl: "/camila/hombros/5---Elevación-lateral-inclinado-sentado.mp4"
          }
        ]
      },
      {
        name: "TRÍCEPS (A)",
        muscleGroup: "arms",
        exercises: [
          {
            name: "Extensión de Tríceps por Encima de la Cabeza con Dos Brazos",
            sets: "4 x 10-12",
            rest: "60s",
            notes: "Cabeza larga del tríceps bajo tensión máxima. Codos hacia adelante, baja hasta el fondo.",
            type: "Aislado",
            videoUrl: "/camila/triceps/4---Extensión-de-Tríceps-por-Encima-de-la-Cabeza-con-Dos-Brazos.mp4"
          },
          {
            name: "Extensión de Tríceps Acostado con Mancuernas",
            sets: "3 x 12-15",
            rest: "60s",
            notes: "Tumbado en banco. Baja las mancuernas a los lados de la cabeza, codos fijos. Control total.",
            type: "Aislado",
            videoUrl: "/camila/triceps/2---Extensión-de-Tríceps-Acostado-con-Mancuernas.mp4"
          }
        ]
      },
      {
        name: "BÍCEPS (A)",
        muscleGroup: "arms",
        exercises: [
          {
            name: "Curl con barra EZ de pie",
            sets: "4 x 10-12",
            rest: "60s",
            notes: "Movimiento principal de bíceps. Agarre en la curva de la barra EZ, control total.",
            type: "Aislado",
            videoUrl: "/camila/biceps/5---Curl-con-barra-EZ-de-pie.mp4"
          },
          {
            name: "Curl martillo con mancuernas de pie",
            sets: "3 x 12-15",
            rest: "60s",
            notes: "Agarre neutro (pulgar arriba). Trabaja braquial y braquiorradial. Da grosor al brazo.",
            type: "Aislado",
            videoUrl: "/camila/biceps/4---Curl-Martillo-con-Mancuernas-de-Pie.mp4"
          },
          {
            name: "Curl con mancuernas estándar de pie",
            sets: "3 x 10-12",
            rest: "60s",
            notes: "Clásico curl de bíceps. Supinación en la subida, baja controlado.",
            type: "Aislado",
            videoUrl: "/camila/biceps/2---Curl-con-Mancuernas-Estándar-de-Pie.mp4"
          }
        ]
      },
      {
        name: "ANTEBRAZO (A)",
        muscleGroup: "arms",
        exercises: [
          {
            name: "Curl de muñeca (palmas arriba) – rango completo",
            sets: "3 x 20-25",
            rest: "45s",
            notes: "Deja bajar la mancuerna hasta la punta de los dedos (rango completo) y cierra el puño al subir.",
            type: "Aislado",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Dumbbell-Wrist-Curl.gif"
          },
          {
            name: "Curl de muñeca reverso (palmas abajo)",
            sets: "3 x 15-20",
            rest: "45s",
            notes: "Extensores del antebrazo. Movimiento pequeño y controlado.",
            type: "Aislado",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Dumbbell-Reverse-Wrist-Curl.gif"
          },
          {
            name: "Farmer hold (isométrico de agarre)",
            sets: "3 x 45-60s",
            rest: "60s",
            notes: "Agarra ambas mancuernas lo más fuerte posible. El agarre es el límite real de muchos levantadores.",
            type: "Isométrico",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Farmers-walk_Cardio.gif"
          }
        ]
      }
    ]
  },

  3: {
    title: "VIERNES",
    subtitle: "Piernas y Core",
    dayOfWeek: 3,
    warmup: "5–10 min trote en el lugar o soga + 10 sentadillas goblet vacías + 10 estocadas alternas sin peso.",
    stretching: "Cuádriceps de pie 30s + isquio sentado 30s + glúteo figura 4 tumbado 30s + pantorrilla con pared 30s.",
    groups: [
      {
        name: "CUÁDRICEPS / GLÚTEOS",
        muscleGroup: "legs",
        exercises: [
          {
            name: "Sentadilla goblet (pausa 3s abajo)",
            sets: "4 x 10-15",
            rest: "90s",
            notes: "Con 10 kg la pausa isométrica en la posición baja transforma este ejercicio. Torso erguido, rodillas afuera.",
            type: "Compuesto",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Goblet-Squat.gif"
          },
          {
            name: "Sentadilla búlgara con mancuernas",
            sets: "4 x 8-10 c/pierna",
            rest: "90s",
            notes: "Pie trasero elevado en banco. Es el ejercicio de pierna unilateral más efectivo. Con 10 kg es suficientemente difícil.",
            type: "Compuesto",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lunges.gif"
          },
          {
            name: "Zancadas reversas (paso atrás)",
            sets: "3 x 10-12 c/pierna",
            rest: "75s",
            notes: "Más amigable para rodillas que la zancada frontal. Baja el torso lentamente.",
            type: "Compuesto",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lunges.gif"
          },
          {
            name: "Step-up explosivo al banco",
            sets: "3 x 8-10 c/pierna",
            rest: "75s",
            notes: "Sube explosivo (potencia), baja lento (3s). La combinación potencia + excéntrica maximiza hipertrofia.",
            type: "Compuesto",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Step-up.gif"
          }
        ]
      },
      {
        name: "ISQUIOS / GLÚTEOS",
        muscleGroup: "legs",
        exercises: [
          {
            name: "Peso muerto rumano mancuernas (tempo 4-1-1)",
            sets: "4 x 10-12",
            rest: "90s",
            notes: "Baja en 4 seg sintiendo cada cm del estiramiento. La excéntrica larga es donde ocurre la hipertrofia de isquios.",
            type: "Compuesto",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Romanian-Deadlift.gif"
          },
          {
            name: "Hip thrust con mancuerna (pausa 2s arriba)",
            sets: "4 x 12-15",
            rest: "75s",
            notes: "Hombros en banco, mancuerna en caderas. Aprieta glúteo al máximo y sostén 2s.",
            type: "Compuesto",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Romanian-Deadlift.gif"
          },
          {
            name: "Good morning con mancuernas",
            sets: "3 x 12-15",
            rest: "75s",
            notes: "Mancuernas en hombros (o sostenidas al pecho). Bisagra de cadera con rodillas semi-flexionadas. Activa glúteo e isquio.",
            type: "Compuesto",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Romanian-Deadlift.gif"
          },
          {
            name: "Peso muerto a 1 pierna",
            sets: "3 x 10 c/pierna",
            rest: "75s",
            notes: "Control total. Si balanceas pierdes el beneficio. Cadera cuadrada en todo momento.",
            type: "Compuesto",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Single-Leg-Romanian-Deadlift.gif"
          }
        ]
      },
      {
        name: "PANTORRILLAS",
        muscleGroup: "legs",
        exercises: [
          {
            name: "Elevación de talones en escalón (rango completo)",
            sets: "4 x 15-20",
            rest: "60s",
            notes: "Baja el talón por debajo del nivel del escalón. El rango completo es 3x más efectivo que solo subir.",
            type: "Aislado",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Calf-Raise.gif"
          },
          {
            name: "Elevación de talones sentado (sóleo)",
            sets: "3 x 15-20",
            rest: "60s",
            notes: "Mancuernas sobre los muslos. Rodilla a 90°. El sóleo se desarrolla mejor en posición sentada.",
            type: "Aislado",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Seated-Calf-Raise-dumbbell.gif"
          }
        ]
      },
      {
        name: "CORE",
        muscleGroup: "core",
        exercises: [
          {
            name: "Crunch con mancuerna en pecho",
            sets: "3 x 15-20",
            rest: "45s",
            notes: "Sostén una mancuerna contra el pecho para añadir resistencia. Exhala en la contracción.",
            type: "Aislado",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Crunch.gif"
          },
          {
            name: "Elevaciones de piernas en banco",
            sets: "3 x 12-15",
            rest: "45s",
            notes: "Lumbares pegadas al banco. Baja sin tocar. Opcional: sujeta mancuerna ligera entre pies.",
            type: "Aislado",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Raise.gif"
          },
          {
            name: "Plancha con toque de hombro",
            sets: "3 x 10 toques c/lado",
            rest: "45s",
            notes: "Desde plancha, toca hombro contrario alternando. Evita rotar las caderas. Core antirotacional.",
            type: "Isométrico",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Plank.gif"
          },
          {
            name: "Dead bug (insecto muerto)",
            sets: "3 x 8-10 c/lado",
            rest: "45s",
            notes: "Tumbado boca arriba, extiende brazo y pierna opuesta lentamente. Lumbar pegada al suelo siempre.",
            type: "Isométrico",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Plank.gif"
          }
        ]
      }
    ]
  },

  4: {
    title: "SÁBADO",
    subtitle: "Pecho, Hombros y Tríceps",
    dayOfWeek: 4,
    warmup: "5–10 min cardio + series ligeras de press inclinado y elevaciones laterales.",
    stretching: "Pectoral en puerta 25s + deltoide anterior 20s + tríceps tras nuca 20s.",
    groups: [
      {
        name: "PECHO (B)",
        muscleGroup: "chest",
        exercises: [
          {
            name: "Press Inverso con Mancuernas",
            sets: "4 x 10-12",
            rest: "90s",
            notes: "Variación clavicular. Si te acomoda muñeca/hombro. Enfocado en pecho superior.",
            type: "Compuesto",
            videoUrl: "/camila/pecho/3---Press-Inverso-con-Mancuernas.mp4"
          },
          {
            name: "Jersey con Mancuernas (Pullover)",
            sets: "3 x 12-15",
            rest: "75s",
            notes: "Estiramiento profundo del pecho y dorsales. Baja lento, codos semi-flexionados.",
            type: "Compuesto",
            videoUrl: "/camila/pecho/1---Jersey-con-Mancuernas.mp4"
          },
          {
            name: "Press Plano con Mancuernas",
            sets: "4 x 8-12",
            rest: "90s",
            notes: "Base de pecho. Alterna con agarre neutro si prefieres variar entre semanas.",
            type: "Compuesto",
            videoUrl: "/camila/pecho/5---Press-Plano-con-Mancuernas.mp4"
          }
        ]
      },
      {
        name: "HOMBROS (B)",
        muscleGroup: "shoulders",
        exercises: [
          {
            name: "Remo vertical con mancuernas sentado (controlado)",
            sets: "4 x 10-12",
            rest: "90s",
            notes: "Sentado para evitar impulso. Codos hacia arriba, controlado. Trabaja deltoides y trapecios.",
            type: "Compuesto",
            videoUrl: "/camila/hombros/1---Remo-vertical-con-mancuernas-sentado.mp4"
          },
          {
            name: "Elevación lateral con mancuernas",
            sets: "3 x 12-15",
            rest: "60s",
            notes: "Repetir para darle volumen al deltoide lateral. Control total, sin balanceo.",
            type: "Aislado",
            videoUrl: "/camila/hombros/3---Elevación-lateral-con-mancuernas.mp4"
          },
          {
            name: "Elevación frontal con mancuernas con dos brazos",
            sets: "3 x 10-12",
            rest: "60s",
            notes: "Opcional / volumen bajo. Ambos brazos al mismo tiempo, sube hasta la altura de los hombros.",
            type: "Aislado",
            videoUrl: "/camila/hombros/4---Elevación-frontal-con-mancuernas-con-dos-brazos.mp4"
          }
        ]
      },
      {
        name: "TRÍCEPS (B)",
        muscleGroup: "arms",
        exercises: [
          {
            name: "Extensión Cruzada con Mancuernas con Agarre Neutral",
            sets: "3 x 12-15",
            rest: "60s",
            notes: "Agarre neutro crosse. Complemento y bombeo para tríceps. Controla la excéntrica.",
            type: "Aislado",
            videoUrl: "/camila/triceps/1---Extensión-Cruzada-con-Mancuernas-con-Agarre-Neutral.mp4"
          },
          {
            name: "Patada con Mancuernas",
            sets: "3 x 12-15",
            rest: "60s",
            notes: "Extiende completamente el codo y aprieta el tríceps arriba. Bombeo final.",
            type: "Aislado",
            videoUrl: "/camila/triceps/3---Patada-con-Mancuernas.mp4"
          }
        ]
      }
    ]
  },

  5: {
    title: "DOMINGO",
    subtitle: "Espalda, Bíceps y Antebrazo",
    dayOfWeek: 5,
    warmup: "5 min cardio ligero + 2 series livianas de remo y curl.",
    stretching: "Dorsal (postura del niño) 30s + bíceps en pared 20s + antebrazo flexor/extensor 20s c/u.",
    groups: [
      {
        name: "ESPALDA (B)",
        muscleGroup: "back",
        exercises: [
          {
            name: "Remo con mancuernas con dos brazos por debajo de la mano (supino)",
            sets: "4 x 10-12",
            rest: "90s",
            notes: "Agarre supino (palmas hacia arriba). Enfocado en dorsales e inferiores de la espalda. Codos pegados al cuerpo.",
            type: "Compuesto",
            videoUrl: "/camila/espalda/3---Remo-con-mancuernas-con-dos-brazos-por-debajo-de-la-mano.mp4"
          },
          {
            name: "Remo con mancuernas con dos brazos con agarre neutro",
            sets: "4 x 10-12",
            rest: "90s",
            notes: "Agarre neutro (palmas mirándose). Trabaja dorsales y espalda general. Controla la excéntrica.",
            type: "Compuesto",
            videoUrl: "/camila/espalda/4---Remo-con-mancuernas-con-dos-brazos-con-agarre-neutro.mp4"
          },
          {
            name: "Pullover con mancuerna",
            sets: "3 x 12-15",
            rest: "75s",
            notes: "Complemento para no hacer solo remos. Baja lento sintiendo el estiramiento dorsal. Codos semi-flexionados.",
            type: "Compuesto",
            imageUrl: "/camila/espalda/6---Pullover-con-mancuerna.jpg"
          }
        ]
      },
      {
        name: "BÍCEPS (B)",
        muscleGroup: "arms",
        exercises: [
          {
            name: "Curl con barra de pie con agarre inverso",
            sets: "3 x 12-15",
            rest: "60s",
            notes: "Agarre prono (palmas abajo). Trabaja braquial y braquiorradial. Da grosor real al brazo.",
            type: "Aislado",
            videoUrl: "/camila/biceps/3---Curl-con-Barra-de-Pie-con-Agarre-Inverso.mp4"
          },
          {
            name: "Curl con mancuernas de pie con dos brazos",
            sets: "3 x 10-12",
            rest: "60s",
            notes: "Ambos brazos al mismo tiempo, juntando mancuernas. Buen bombeo después de espalda.",
            type: "Aislado",
            videoUrl: "/camila/biceps/1---Curl-con-Mancuernas-de-Pie-con-Dos-Brazos.mp4"
          },
          {
            name: "Curl con mancuernas estándar de pie (ligero / bombeo)",
            sets: "3 x 12-15",
            rest: "60s",
            notes: "Ligero para bombeo final. Control total, sin impulso.",
            type: "Aislado",
            videoUrl: "/camila/biceps/2---Curl-con-Mancuernas-Estándar-de-Pie.mp4"
          }
        ]
      },
      {
        name: "ANTEBRAZO (B)",
        muscleGroup: "arms",
        exercises: [
          {
            name: "Pronación/supinación con mancuerna",
            sets: "3 x 15 c/dirección",
            rest: "45s",
            notes: "Codo a 90°, gira la muñeca lentamente. Trabaja pronadores y supinadores (músculos olvidados del antebrazo).",
            type: "Aislado",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2025/07/wrist-rotations.gif"
          },
          {
            name: "Curl de muñeca rango completo (dedos abiertos)",
            sets: "3 x 20",
            rest: "45s",
            notes: "Deja la mancuerna rodar hasta la punta de los dedos en cada rep. Rango completo = máxima hipertrofia.",
            type: "Aislado",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Dumbbell-Wrist-Curl.gif"
          },
          {
            name: "Farmer hold (isométrico de agarre)",
            sets: "3 x 45-60s",
            rest: "60s",
            notes: "Termina la semana con un hold fuerte. El agarre potente protege los codos y muñecas a largo plazo.",
            type: "Isométrico",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Farmers-walk_Cardio.gif"
          }
        ]
      }
    ]
  }
};
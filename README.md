# Rutina de Fierros

Tracker de rutina de gimnasio (mancuernas + banco) hecho en **Next.js 16 + React 19 + TypeScript**.

5 días · 2× por músculo · ejercicios distintos cada sesión. Marca ejercicios, anota pesos y mira el progreso del día como una barra olímpica que se va cargando de discos. El progreso queda guardado en `localStorage`.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- CSS plano (estética "papel + tinta + rojo")

## Estructura

```
app/
  layout.tsx       # layout raíz + metadata
  page.tsx         # orquesta tabs, día activo, conteos
  globals.css      # estilos
components/
  BarraDiscos.tsx  # barra olímpica en SVG
  ExerciseCard.tsx # tarjeta de ejercicio (check + peso + imagen)
  ExerciseModal.tsx# modal de detalle
lib/
  data.ts          # los 5 días de rutina (data tipada)
  useProgress.ts   # estado persistido en localStorage
```

## Correr en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Build

```bash
npm run build
npm start
```

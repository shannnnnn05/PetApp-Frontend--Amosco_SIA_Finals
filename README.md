# My Pet App - Frontend

React + TypeScript na interface na may Tailwind CSS at ESLint.

## Pagrun

```
npm install
npm run dev
```

Buksan ang http://localhost:5173.

Kailangang tumatakbo ang backend sa http://localhost:5080. Kung iba ang address nito,
palitan ang `VITE_API_URL` sa `.env` file.

## Scripts


| --- | --- |
| `npm run dev` | Development server |
| `npm run lint` | ESLint check |
| `npm run build` | Type check at production build |
| `npm run preview` | Preview ng build |

## Structure

```
frontend/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── tsconfig.json
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── mgaUri.ts
    ├── mgaSerbisyo/
    │   └── kuninMulaSaDogsApi.ts
    └── mgaBahagi/
        ├── PiliNgLahi.tsx
        ├── LarawanNgAlagangHayop.tsx
        └── KahonNgJson.tsx
```

- `mgaSerbisyo/kuninMulaSaDogsApi.ts` - mga async na tawag sa backend.
- `mgaBahagi/PiliNgLahi.tsx` - combo box ng mga lahi.
- `mgaBahagi/LarawanNgAlagangHayop.tsx` - larawan at loading state.
- `mgaBahagi/KahonNgJson.tsx` - JSON na sagot ng Dog API.

## Theme

Madilim na IT theme: grid background, cyan na accent, at monospace na teksto.
Nasa `src/index.css` ang background at nasa Tailwind classes ang layout.

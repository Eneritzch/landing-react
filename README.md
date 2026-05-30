# Cure — Landing de reserva de restaurante (React)

Landing page para la **reserva de mesa** de un restaurante de cocina de Eli,
construida con **React + Vite**. Existe la [misma landing en Vue](../landing-vue)
con un diseño idéntico.

Demo en vivo: _(se completa tras el despliegue en GitHub Pages)_

## Características

- **Paleta de 4 tonos de rojo sin degradados**, definida con tokens en `:root`.
- **Tipografía de restaurante**: serif *Cormorant Garamond* para títulos e *Inter* para el cuerpo. Estilo minimalista y limpio.
- **Sin emojis**: todos los iconos son SVG propios (`src/icons.js` + `Icon`).
- **Sin líneas comentadas** en el código.
- **Componentes reutilizables**: `Navbar`, `Hero`, `Experience`, `Menu`, `ReservationForm`, `Footer`, `Icon`.
- **Pantalla de Design System** (`DesignSystem`) que documenta colores, tipografía, botones, badges, formularios, tarjetas y tokens de forma/espacio.
- **Formulario de reserva validado en frontend**: nombre, correo (formato), teléfono (formato), fecha (no anterior a hoy), horario, número de personas; ocasión y notas opcionales. Errores en vivo y mensaje de confirmación.
- **Diseño responsive** y navegación clara entre el landing y el Design System.

## Tecnologías

- React 19 + Vite
- CSS puro con sistema de diseño basado en tokens (idéntico a la versión Vue)
- Google Fonts (Cormorant Garamond + Inter)

## Desarrollo local

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Despliegue en GitHub Pages

Incluye el workflow `.github/workflows/deploy.yml` que compila y publica en cada
`push` a `main`.

1. Sube el proyecto a GitHub:
   ```bash
   git remote add origin https://github.com/<usuario>/<repo>.git
   git branch -M main
   git push -u origin main
   ```
2. En GitHub: **Settings → Pages → Source: GitHub Actions**.
3. URL final: `https://<usuario>.github.io/<repo>/`

`vite.config.js` usa `base: './'` (rutas relativas) para funcionar en GitHub Pages.

## Estructura

```
src/
├── components/      Navbar, Hero, Experience, Menu, ReservationForm, Footer, Icon, DesignSystem
├── data.js          contenido (experiencia, platos, horarios)
├── icons.js         set de iconos SVG
├── index.css        sistema de diseño compartido (tokens en :root)
├── App.jsx          composición y navegación landing / design system
└── main.jsx         punto de entrada
```

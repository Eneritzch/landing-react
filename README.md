# Aforo — Landing de registro para entradas de conciertos (React)

Landing page orientada al **registro de usuarios** para comprar entradas de
conciertos, construida con **React + Vite**. Existe la [misma landing en Vue](../landing-vue)
con un diseño idéntico.

Demo en vivo: _(se completa tras el despliegue en GitHub Pages)_

## Características

- **Paleta de 4 tonos de azul sin degradados**, definida con tokens en `:root`.
- **Sin emojis**: todos los iconos son SVG propios (`src/icons.js` + `Icon`).
- **Sin líneas comentadas** en el código.
- **Componentes reutilizables**: `Navbar`, `Hero`, `Benefits`, `Events`, `RegisterForm`, `Footer`, `Icon`.
- **Pantalla de Design System** (`DesignSystem`) que documenta colores, tipografía, botones, badges, formularios, tarjetas y tokens de forma/espacio.
- **Formulario de registro validado en frontend**: nombre, correo (formato), ciudad, contraseña (mínimo 8, letras y números), confirmación que coincide y aceptación de términos. Errores en vivo y mensaje de éxito.
- **Diseño responsive** y navegación clara entre el landing y el Design System.

## Tecnologías

- React 19 + Vite
- CSS puro con sistema de diseño basado en tokens (idéntico a la versión Vue)

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
├── components/      Navbar, Hero, Benefits, Events, RegisterForm, Footer, Icon, DesignSystem
├── data.js          contenido (beneficios, eventos, ciudades)
├── icons.js         set de iconos SVG
├── index.css        sistema de diseño compartido (tokens en :root)
├── App.jsx          composición y navegación landing / design system
└── main.jsx         punto de entrada
```

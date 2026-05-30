# Aurora Café — Landing Page (React)

Landing page de una marca de café de especialidad, construida con **React + Vite**.
Forma parte de un ejercicio comparativo: la [misma landing existe en Vue](../landing-vue)
con un diseño idéntico.

🔗 **Demo en vivo:** _(se completa tras el despliegue en GitHub Pages)_

## ✨ Características

- **Diseño responsive** y organizado (mobile, tablet, desktop).
- **Componentes reutilizables**: `Navbar`, `Hero`, `Features`, `Products`, `Testimonials`, `ContactForm`, `Footer`.
- **Formulario funcional con validaciones en frontend**: nombre, correo (formato válido) y mensaje (mínimo de caracteres), con mensajes de error en vivo y confirmación de envío.
- **Navegación clara**: navbar fija con menú hamburguesa en móvil y scroll suave por secciones.

## 🛠️ Tecnologías

- React 19
- Vite
- CSS puro (sistema de diseño con variables, idéntico al de la versión Vue)

## 🚀 Desarrollo local

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # build de producción en /dist
npm run preview  # previsualizar el build
```

## 🌐 Despliegue en GitHub Pages

Este repo incluye un workflow de GitHub Actions (`.github/workflows/deploy.yml`)
que compila y publica automáticamente en cada `push` a `main`.

Pasos para activarlo:

1. Crea un repositorio en GitHub y sube este proyecto:
   ```bash
   git remote add origin https://github.com/<usuario>/<repo>.git
   git branch -M main
   git push -u origin main
   ```
2. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Cada `push` a `main` desplegará el sitio. La URL será:
   `https://<usuario>.github.io/<repo>/`

> `vite.config.js` usa `base: './'` (rutas relativas), así el sitio funciona
> en GitHub Pages sin necesidad de codificar el nombre del repositorio.

## 📁 Estructura

```
src/
├── components/      # componentes de la interfaz
├── data.js          # contenido (features, productos, testimonios)
├── App.jsx          # composición de la página
├── index.css        # sistema de diseño compartido
└── main.jsx         # punto de entrada
```

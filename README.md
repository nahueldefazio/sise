# SISE - Sistema Integral de Seguridad Electrónica

Este proyecto es una aplicación Next.js para SISE, un sistema integral de seguridad electrónica.

## Configuración para entornos locales y GitHub Pages

Este proyecto está configurado para funcionar tanto en entorno local como en GitHub Pages. La configuración utiliza variables de entorno para determinar si debe usar un prefijo de ruta base (`/sise`) para GitHub Pages.

Las rutas de navegación y las URLs de API se manejan automáticamente a través de las funciones de utilidad `getNavPath` y `getApiUrl` en `app/utils/getNavPath.js`. Estas funciones se encargan de agregar el prefijo de ruta base cuando es necesario.

## Desarrollo local

Para ejecutar el proyecto localmente:

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:3001`.

## Despliegue en GitHub Pages

Para desplegar en GitHub Pages:

1. Asegúrate de que el repositorio esté configurado para GitHub Pages (Settings > Pages)
2. Ejecuta el comando de despliegue:

```bash
npm run deploy
```

Este comando construirá el proyecto con la configuración adecuada para GitHub Pages, estableciendo la variable de entorno `GITHUB_PAGES=true` que activa el prefijo de ruta base `/sise`.

## Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción (sin prefijo de ruta)
- `npm run build:github` - Construye la aplicación para GitHub Pages (con prefijo de ruta `/sise`)
- `npm run start` - Inicia el servidor de producción
- `npm run export` - Exporta la aplicación como HTML estático (sin prefijo de ruta) - Equivalente a `npm run build` debido a la configuración `output: 'export'` en next.config.js
- `npm run export:github` - Exporta la aplicación como HTML estático para GitHub Pages (con prefijo de ruta `/sise`) - Equivalente a `npm run build:github` debido a la configuración `output: 'export'` en next.config.js
- `npm run deploy` - Construye la aplicación para GitHub Pages (con prefijo de ruta `/sise`)

## Estructura del proyecto

- `/app` - Código fuente de la aplicación
- `/public` - Archivos estáticos (imágenes, etc.)
- `/app/(pages)` - Páginas de la aplicación
- `/app/components` - Componentes reutilizables

## Tecnologías utilizadas

- Next.js
- React
- Material UI
- React Intersection Observer
- React Material UI Carousel

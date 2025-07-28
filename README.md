# VaVolando

Este repositorio contiene la base de un sistema de administración y un backend para **VaVolando**.

## Estructura del proyecto

```
vavolando/
├── admin-panel/       # Aplicación de administración construida con React y Vite
│   ├── public/        # Ficheros públicos (HTML y recursos estáticos)
│   ├── src/           # Código fuente de React (lib, pages y components)
│   │   ├── components/
│   │   ├── lib/
│   │   └── pages/
│   ├── package.json   # Declaración de dependencias y scripts
│   ├── vite.config.js # Configuración de Vite con plugin de React
│   ├── tailwind.config.js # Configuración de Tailwind CSS
│   ├── postcss.config.js  # Configuración de PostCSS
│   ├── server.js      # Servidor de desarrollo sencillo (puerto 5173)
│   └── .env.example   # Variables de entorno de ejemplo
├── backend/           # Backend (vacío con un index.js mínimo)
├── excel-template/    # Plantillas de Excel
│   └── pedidos.xlsx
└── .gitignore         # Exclusiones para Node, Vite y entornos privados
```

## Puesta en marcha rápida

Para levantar un servidor de desarrollo básico en el panel de administración:

```bash
cd admin-panel
npm install   # Instala dependencias (puede requerir conexión a internet)
npm run dev   # Inicia el servidor en el puerto 5173
```

El script `npm run dev` utiliza un servidor HTTP sencillo definido en `server.js` para servir el contenido del directorio `public`. De esta manera se obtiene una página base con el mensaje **“VaVolando”**.

## Dependencias

El panel de administración se ha preparado para trabajar con:

- **React 18** y **React Router DOM** para la construcción de interfaces.
- **@supabase/supabase‑js** para integrarse con Supabase.
- **Tailwind CSS** con PostCSS y Autoprefixer para estilos.
- **Chart.js** y **react‑chartjs‑2** para gráficos.
- **PapaParse** para procesar CSV.
- **xlsx** para la lectura de archivos Excel.
- **lucide‑react** para iconos (puede sustituirse por FontAwesome si se prefiere).

Consulta `admin-panel/package.json` para ver todas las dependencias declaradas.

// Servidor de desarrollo sencillo para el panel de administración.
// Utiliza el módulo HTTP de Node para servir archivos estáticos desde
// el directorio `public` en el puerto 5173. Esto permite disponer de
// una página base sin necesidad de herramientas externas.

import { createServer } from 'http';
import { readFile, stat } from 'fs/promises';
import { createReadStream } from 'fs';
import { extname, join, resolve } from 'path';

const PORT = 5173;
const publicDir = resolve('./public');

// Mapeo de tipos MIME básicos para archivos comunes.
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

async function handler(req, res) {
  try {
    // Construye la ruta absoluta al recurso solicitado.
    const urlPath = req.url === '/' ? '/index.html' : req.url;
    const filePath = join(publicDir, urlPath);

    // Verifica que el archivo exista y obtén su tamaño.
    const stats = await stat(filePath);
    if (stats.isFile()) {
      const ext = extname(filePath);
      const mime = mimeTypes[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': mime });
      createReadStream(filePath).pipe(res);
      return;
    }
  } catch (err) {
    // Si el archivo no existe, devuelve 404.
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
    return;
  }
}

createServer(handler).listen(PORT, () => {
  console.log(`Servidor de desarrollo iniciado en http://localhost:${PORT}`);
});

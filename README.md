# 🛸 AeroGuard — Fase 1: diseño y validación del concepto

Proyecto STEAM de 5 integrantes en Chiclayo, Lambayeque. Dron autónomo diseñado para recorrer rutas GPS, capturar imágenes aéreas, medir PM1.0/PM2.5/PM10 y generar alertas georreferenciadas de posible agua estancada para verificación en campo.

> No hay resultados de pruebas todavía. Todas las capacidades son objetivos de diseño o metas de la fase de pruebas.

## Estructura

- `index.html` — página principal.
- `css/motion.css` — sistema de diseño y animaciones.
- `css/viewer.css` — estilos del visor 3D.
- `js/` — módulos: utils, drone-models, viewer, radar, route, mission-sim, ui-animations.

## Correcciones clave

- PMS5003 mide PM2.5/PM10; no detecta microplásticos (línea futura).
- Cámara identifica posible agua estancada; contaminación se confirma en campo.
- Eco procesa en tierra; Pro puede analizar a bordo.
- Autonomías estimadas, sujetas a validación.
- Eco: controladora ArduPilot/Betaflight + GPS; ESP32 = computadora de misión.
- Marco legal: DGAC/MTC (verificar norma vigente).

## Cómo verlo

Activa GitHub Pages (rama `main`, carpeta raíz) o abre `index.html` localmente.

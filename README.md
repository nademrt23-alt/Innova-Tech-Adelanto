# 🛸 AeroGuard — Fase 1: diseño y validación del concepto

Proyecto STEAM de 5 integrantes en Chiclayo, Lambayeque. Dron autónomo diseñado para recorrer rutas GPS, capturar imágenes aéreas, medir PM1.0/PM2.5/PM10 y generar alertas georreferenciadas de posible agua estancada para verificación en campo.

> No hay resultados de pruebas todavía. Todas las capacidades son objetivos de diseño o metas de la fase de pruebas. Las simulaciones son ilustrativas.

## Estructura

- `index.html` — página principal (S0–S14).
- `css/motion.css`, `css/viewer.css` — sistema de diseño y visor.
- `js/` — utils, drone-models, viewer, radar, route, mission-sim, ui-animations, main.
- `docs/PARTE3.md` — publicación, QA, guion de exposición y banco de preguntas.

## Correcciones clave

- PMS5003 mide PM2.5/PM10; no detecta microplásticos (línea futura).
- Cámara identifica posible agua estancada; contaminación se confirma en campo.
- Eco procesa en tierra; Pro puede analizar a bordo.
- Autonomías estimadas, sujetas a validación.
- Eco: controladora ArduPilot/Betaflight + GPS; ESP32 = computadora de misión.
- Marco legal: DGAC/MTC (verificar norma vigente).

## Publicación

GitHub Pages: rama `main`, carpeta raíz. Enlace: https://nademrt23-alt.github.io/Innova-Tech-Adelanto/

## Licencia

[COMPLETAR: licencia del proyecto]

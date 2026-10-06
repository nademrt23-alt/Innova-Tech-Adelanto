# 🛸 AeroGuard — Dron autónomo para monitoreo ambiental

**Proyecto STEAM** de un equipo de 5 integrantes. AeroGuard es un dron autónomo que recorre rutas preestablecidas, captura imágenes y usa inteligencia artificial para detectar posibles charcos de agua contaminada y estimar de manera aproximada los microplásticos en el aire.

## 🌍 Problema

Existen charcos, canales y zonas de agua contaminada que no se detectan a tiempo. Los microplásticos en el aire también son difíciles de medir sin equipos costosos.

**¿Por qué elegimos este problema?** Porque la contaminación afecta la salud y el ambiente, y un dron permite revisar zonas amplias o peligrosas sin exponer a una persona.

## 🎯 Objetivo general

Diseñar, construir y probar un dron autónomo de bajo costo que siga rutas preestablecidas y use cámara, sensores e inteligencia artificial para identificar zonas ambientales que requieren revisión.

## 👥 Roles del equipo

| Rol | Responsabilidad |
|---|---|
| Líder de proyecto | Organiza al equipo y coordina la presentación |
| Ingeniero de hardware | Arma el dron e instala componentes |
| Programador | Configura rutas, telemetría y alertas |
| Especialista en IA | Entrena el modelo y analiza resultados |
| Investigador ambiental | Estudia la contaminación y valida zonas |

## 🧩 Versión económica

- Controlador de vuelo básico
- GPS NEO-6M/7M
- Cámara ESP32-CAM o FPV
- Raspberry Pi Zero 2 W o ESP32-S3
- Sensor PMS5003 y DHT22
- 4 motores brushless, 4 ESC y hélices
- Batería LiPo 3S
- Frame F450 y control remoto

**Costo:** S/ 700 – S/ 1,300.

## 🚀 Versión profesional

- Pixhawk 6C o Cube Orange
- Raspberry Pi 5 o Jetson Nano
- Cámara RGB y térmica opcional
- GPS RTK
- Sensores de partículas, gases y meteorología
- Lidar y sensores de vuelo
- Telemetría, 4G/LTE y Wi-Fi
- Mission Planner, Python, OpenCV y TensorFlow Lite

**Costo:** S/ 3,500 o más.

## 🧠 Funcionamiento

1. Se marca una ruta con puntos GPS.
2. El dron despega y sigue la ruta automáticamente.
3. La cámara toma fotos y videos.
4. La IA busca señales de contaminación.
5. Los sensores miden partículas y condiciones del aire.
6. El sistema guarda ubicación, imágenes y alertas.
7. El dron regresa solo al final o si la batería baja.

> El dron hace una **estimación aproximada**; no reemplaza un análisis de laboratorio.

## 🔒 Seguridad

- No volar cerca de personas, animales o cables.
- Revisar el dron antes de cada vuelo.
- Mantener control manual de emergencia.
- Respetar normas locales y privacidad.

## ✅ Conclusión

AeroGuard demuestra que un dron autónomo con cámara, sensores e IA puede ayudar a detectar zonas sospechosas de contaminación y generar información útil para proteger la salud y el ambiente.

## 🌐 Página interactiva

Abre `index.html` o activa **GitHub Pages** en la rama `main` para ver la versión con animaciones, navegación, pestañas, línea de tiempo y barras de progreso.

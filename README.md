# 🛸 AeroGuard — Dron autónomo para monitoreo ambiental

**Etiqueta del proyecto: Fase 1 — Diseño y validación del concepto.**

AeroGuard es un proyecto STEAM de un equipo de 5 integrantes en Chiclayo, Lambayeque (Perú). Propone un dron autónomo que recorrerá rutas GPS preestablecidas, capturará imágenes aéreas y medirá partículas en suspensión (PM1.0, PM2.5 y PM10) como indicador de calidad del aire.

> **Nota de honestidad técnica:** esta web presenta un concepto en diseño. No hay resultados de pruebas todavía. Todas las capacidades se expresan como objetivos de diseño o metas de la fase de pruebas, no como resultados logrados.

## 1. Problema

En zonas urbanas y periurbanas pueden existir charcos y acumulaciones de agua estancada que no se identifican a tiempo. El agua estancada puede convertirse en criadero de mosquitos y estar asociada a riesgos sanitarios.

**Datos requeridos con fuente oficial:**

- Casos de dengue en Lambayeque/Chiclayo: [COMPLETAR CON FUENTE OFICIAL: MINSA / DIRESA Lambayeque, año].
- Relación con lluvias y El Niño costero: [COMPLETAR CON FUENTE OFICIAL: SENAMHI / MINSA, año].
- Costo o tiempo de inspección manual: [COMPLETAR: municipalidad / salud ambiental].

## 2. Solución propuesta

**Frase de valor:** un dron autónomo de bajo costo, diseñado para identificar áreas con agua estancada y medir partículas en suspensión, generando alertas georreferenciadas para verificación en campo.

### Qué está diseñado para hacer

- Seguir rutas GPS preestablecidas.
- Capturar imágenes aéreas de zonas priorizadas.
- Medir PM1.0, PM2.5 y PM10 como indicador de calidad del aire.
- Marcar áreas con posible agua estancada para verificación en campo.
- Generar alertas georreferenciadas y un mapa de resultados.

### Qué NO hace

- No determina contaminación química o bacteriana del agua.
- No identifica microplásticos en el aire con los sensores propuestos.
- No reemplaza análisis de laboratorio ni inspecciones sanitarias formales.
- No opera sin supervisión ni sin control manual de respaldo.

### Flujo de datos

`Dron → imágenes + datos de sensores + GPS → análisis → alerta georreferenciada → mapa → verificación en campo → autoridad local`

## 3. Cómo funcionará

1. **Planificación:** se definen waypoints y área de vuelo.
2. **Checklist previo:** batería, hélices, GPS, cámara, sensores, clima y autorizaciones.
3. **Despegue controlado:** despegue automático desde punto seguro.
4. **Ruta por waypoints:** el dron sigue la ruta y captura imágenes.
5. **Medición ambiental:** los sensores registran PM1.0, PM2.5, PM10, temperatura y humedad.
6. **Análisis:** Eco analiza en tierra; Pro puede analizar a bordo.
7. **Alerta y retorno:** se registra la alerta georreferenciada y el dron retorna automáticamente.

### Seguridad de vuelo

- Retorno automático al punto de despegue.
- Aterrizaje de seguridad ante batería baja.
- Procedimiento ante pérdida de GPS.
- Control manual de respaldo en todo vuelo.

## 4. Versiones del dron

| Aspecto | AeroGuard Eco | AeroGuard Pro |
|---|---|---|
| Costo estimado | S/ 700 – S/ 1,300 [COMPLETAR: cotizaciones y fecha] | Desde S/ 3,500 [COMPLETAR: cotizaciones y fecha] |
| Controlador de vuelo | Controladora compatible con ArduPilot o Betaflight con soporte GPS | Pixhawk 6C o Cube Orange |
| Computadora de misión | ESP32 como computadora de misión y telemetría | Raspberry Pi 5 o Jetson Nano |
| Procesamiento de imágenes | En tierra, después del vuelo | IA a bordo, durante el vuelo |
| GPS | NEO-6M/7M | GPS RTK |
| Cámara | ESP32-CAM o cámara FPV | RGB + térmica opcional |
| Sensores | PMS5003 + DHT22 | Partículas, gases y meteorología |
| Autonomía estimada | 10–18 min, sujeta a validación | 20–35 min, sujeta a validación |
| Uso | Aprendizaje y pruebas iniciales | Monitoreo más avanzado |

**Condiciones que afectarán la autonomía:** peso total, capacidad y estado de la batería, viento, temperatura, altura de vuelo y perfil de la ruta.

## 5. Inteligencia artificial

**Tarea:** clasificar imágenes aéreas como “posible agua estancada” o “sin evidencia visible”, como apoyo para verificación en campo.

- **Datos:** imágenes propias etiquetadas y conjuntos de datos públicos.
- **Modelo candidato:** MobileNet o YOLO Nano con TensorFlow Lite.
- **Métricas:** precisión, recall y matriz de confusión.
- **Limitaciones:** sombras, reflejos, suelo húmedo, vegetación y cambios de luz.
- **Ética:** no capturar personas ni propiedades privadas; anonimizar o descartar imágenes que contengan datos personales.

**Sobre microplásticos:** el PMS5003 mide partículas PM2.5 y PM10, pero no distingue su composición. Por eso, la detección de microplásticos queda como línea futura y requeriría captura de muestras y análisis de laboratorio.

## 6. Presupuesto

Los precios son estimados y requieren cotizaciones vigentes.

| Ítem | Eco | Pro |
|---|---|---|
| Controladora de vuelo | [COMPLETAR] | [COMPLETAR] |
| GPS | [COMPLETAR] | [COMPLETAR] |
| Cámara | [COMPLETAR] | [COMPLETAR] |
| Computadora | [COMPLETAR] | [COMPLETAR] |
| Sensores | [COMPLETAR] | [COMPLETAR] |
| Motores, ESC y hélices | [COMPLETAR] | [COMPLETAR] |
| Batería y cargador | [COMPLETAR] | [COMPLETAR] |
| Chasis y accesorios | [COMPLETAR] | [COMPLETAR] |
| Imprevistos (10–15%) | [COMPLETAR] | [COMPLETAR] |
| **Total estimado** | [COMPLETAR] | [COMPLETAR] |

## 7. Hoja de ruta y validación

| Fase | Hito medible | Responsable |
|---|---|---|
| 1. Diseño | Lista de componentes, planos y presupuesto aprobado | Líder + Hardware |
| 2. Construcción | Prototipo Eco armado y revisado | Hardware |
| 3. Vuelo controlado | 10 vuelos manuales sin incidentes | Programador + Hardware |
| 4. Ruta autónoma | 20 vuelos de prueba con ruta completa | Programador |
| 5. IA | Modelo entrenado y evaluado con métricas | IA + Ambiental |
| 6. Validación | Comparación con verificación en campo | Ambiental |
| 7. Presentación | Informe, video y exposición final | Todo el equipo |

## 8. Metas de la fase de pruebas

| Meta | Definición | Método de medición | Mínimo de pruebas |
|---|---|---|---|
| Completar ruta | Al menos 90% de vuelos completan la ruta sin intervención manual | Registro de vuelo / telemetría | 20 vuelos |
| Captura útil | Al menos 85% de imágenes son utilizables para análisis | Revisión de imágenes | 20 vuelos |
| Alerta correcta | Al menos 75% de alertas coinciden con verificación en campo | Comparación alerta vs campo | 20 alertas |
| Retorno seguro | Al menos 95% de vuelos terminan con retorno o aterrizaje seguro | Registro de vuelo | 20 vuelos |

## 9. Equipo

| Rol | Responsabilidad | Entregable |
|---|---|---|
| Líder de proyecto | Coordinación y presentación | Plan y informe final |
| Ingeniero de hardware | Armado y mantenimiento | Prototipo operativo |
| Programador | Rutas, telemetría y alertas | Configuración y logs |
| Especialista en IA | Modelo y métricas | Dataset y modelo |
| Investigador ambiental | Zonas, validación e informes | Informe de campo |

[FOTO Y NOMBRES DEL EQUIPO: COMPLETAR]

## 10. Riesgos y mitigación

| Riesgo | Probabilidad | Impacto | Mitigación | Responsable |
|---|---|---|---|---|
| Caída del dron | Media | Alto | Checklist, pruebas graduales, control manual | Hardware |
| Batería insuficiente | Media | Alto | Límite de vuelo y retorno automático | Programador |
| Falsas alertas de IA | Alta | Medio | Validación en campo y mejora del dataset | IA + Ambiental |
| Clima adverso | Media | Alto | No volar con lluvia o viento fuerte | Líder |
| Restricción legal | Baja | Alto | Verificar normativa DGAC/MTC antes de volar | Líder |

## 11. Seguridad, ética y legalidad

- Verificar la normativa vigente de la DGAC/MTC para operación de drones en Perú antes de cada campaña de vuelo.
- Volár solo en zonas autorizadas, abiertas y sin personas expuestas.
- Mantener control manual de respaldo.
- No capturar personas, placas o propiedades privadas sin autorización.
- Distinguir siempre entre “detectado por IA” y “confirmado en campo”.

## 12. Competencia e impacto

| Método | Ventaja | Limitación |
|---|---|---|
| Inspección manual | Precisión y capacidad de toma de muestras | Lenta, costosa y limitada en cobertura |
| Drones comerciales de mapeo | Buena calidad de imagen | Mayor costo y menos enfoque sanitario |
| Imágenes satelitales | Cobertura amplia | Baja resolución y poca frecuencia |
| AeroGuard | Bajo costo, rutas específicas y alertas locales | Requiere validación y no reemplaza laboratorio |

**Impacto:** como hipótesis, AeroGuard podría ayudar a priorizar zonas para inspección sanitaria y reducir el tiempo de detección de agua estancada. Esta hipótesis deberá validarse con datos de campo.

## 13. Qué necesitamos

- Financiamiento o donación de componentes para el prototipo Eco.
- Acceso a una zona segura de pruebas.
- Acompañamiento de salud ambiental o municipio para validación.
- Asesoría técnica en drones e IA.

**Qué recibe el aliado:** reconocimiento en la web y presentaciones, informe de resultados y evidencia del impacto del apoyo.

## 14. Preguntas frecuentes

**¿El dron detecta contaminación química?** No. Está diseñado para identificar posibles zonas de agua estancada; la contaminación debe confirmarse en campo o laboratorio.

**¿Mide microplásticos?** No con los sensores actuales. Mide PM1.0, PM2.5 y PM10; los microplásticos son una línea futura.

**¿Vuela solo?** Sigue rutas programadas, pero siempre con supervisión y control manual de respaldo.

**¿Qué pasa si se agota la batería?** Está diseñado para ejecutar retorno o aterrizaje de seguridad.

**¿Es legal volar?** Debe verificarse la normativa vigente de DGAC/MTC antes de volar.

**¿La IA siempre acierta?** No. Puede confundirse por sombras, reflejos o suelo húmedo; por eso se valida en campo.

**¿Reemplaza a personal de salud?** No. Es una herramienta de apoyo para priorizar inspecciones.

**¿Cuánto cuesta?** Eco: S/ 700–1,300 estimado; Pro: desde S/ 3,500 estimado. Requieren cotizaciones.

## 15. Conclusión

AeroGuard propone un camino realista y verificable para usar un dron autónomo de bajo costo como herramienta de apoyo en la identificación de agua estancada y el monitoreo de partículas en suspensión. Su valor no está en reemplazar análisis profesionales, sino en ayudar a priorizar zonas y reducir tiempos de respuesta.

## Sistema de diseño

```css
:root{
  --color-primary:#0f3d3e;
  --color-primary-600:#14615f;
  --color-accent:#39d98a;
  --color-accent-soft:#d9f7e8;
  --color-risk:#e5484d;
  --color-warning:#f5a524;
  --neutral-0:#ffffff;
  --neutral-100:#f4f6f8;
  --neutral-200:#e3e8ee;
  --neutral-400:#9aa7b5;
  --neutral-600:#4b5a6b;
  --neutral-800:#1c2733;
  --neutral-900:#0d141b;
  --radius-sm:8px;--radius-md:14px;--radius-lg:22px;
  --space-1:4px;--space-2:8px;--space-3:16px;--space-4:24px;--space-5:32px;--space-6:48px;--space-7:64px;
  --shadow-1:0 2px 8px rgba(13,20,27,.08);
  --shadow-2:0 12px 32px rgba(13,20,27,.14);
  --font-display:'Sora',system-ui,sans-serif;
  --font-body:'Inter',system-ui,sans-serif;
  --max-width:1280px;
}
```

## Datos pendientes

- Cifras de dengue y fuentes oficiales — Investigador ambiental.
- Costos y cotizaciones reales — Líder + Hardware.
- Normativa DGAC/MTC vigente — Líder.
- Zonas de prueba autorizadas — Investigador ambiental.
- Dataset de imágenes — Especialista en IA.
- Contacto e institución — Líder.

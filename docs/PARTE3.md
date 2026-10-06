# AeroGuard — Parte 3: ensamblaje, publicación, QA y exposición

**Etiqueta:** Fase 1 — Diseño y validación del concepto. **Simulaciones:** ilustrativas, no representan resultados reales.

## 1. Ensamblaje final

La web integra los módulos de la Parte 2 con la arquitectura S0–S14 de la Parte 1:

- `index.html`: portada, problema, solución, cómo funciona, drones (visor 3D), detección (radar + ruta), misión, validación, equipo, riesgos/legal, apoyo, FAQ y conclusión.
- `css/motion.css` y `css/viewer.css`: sistema de diseño y estilos del visor.
- `js/`: utils, drone-models, viewer, radar, route, mission-sim, ui-animations y main.
- `js/main.js` inicializa cada módulo de forma segura: si uno falla, el resto sigue funcionando.
- Orden de carga: CSS primero; scripts con `defer`; Three.js r128 desde cdnjs.
- Navegación de 7 ítems: Inicio · Problema · Solución · Drones · Validación · Equipo · Apóyanos.

## 2. Publicación en GitHub Pages

1. Verifica que `index.html`, `css/` y `js/` estén en la raíz de la rama `main`.
2. Entra a **Settings → Pages**.
3. En **Build and deployment → Source**, elige **Deploy from a branch**.
4. Selecciona **main** y **/ (root)**. Guarda.
5. Espera 1–3 minutos y abre `https://nademrt23-alt.github.io/Innova-Tech-Adelanto/`.
6. Prueba en móvil, escritorio y ventana privada.
7. Genera un QR del enlace (por ejemplo, con el generador de tu navegador o una herramienta confiable) para la exposición.

**Problemas comunes:**

- Pantalla en blanco: revisa la consola (F12); suele ser una ruta rota.
- Rutas rotas: usa rutas relativas (`css/...`, `js/...`), nunca absolutas.
- Caché: recarga con Ctrl+Shift+R.
- Mayúsculas: Linux distingue `Viewer.js` de `viewer.js`; usa minúsculas.
- Recursos bloqueados: verifica que Three.js cargue desde cdnjs.

**Plan B:** guarda una copia local del sitio y capturas de pantalla; si no hay internet, abre `index.html` local.

## 3. Plan de pruebas y control de calidad

| Caso | Cómo probar | Resultado esperado | Estado |
|---|---|---|---|
| Ortografía y coherencia | Releer todas las secciones | Sin errores; cifras idénticas | [ ] |
| [COMPLETAR] resueltos | Buscar "COMPLETAR" | Todos resueltos o visibles | [ ] |
| Responsive | Probar 360, 768 y 1280 px | Sin desbordes | [ ] |
| Navegadores | Chrome, Safari, Firefox, Edge | Funciona en todos | [ ] |
| Lighthouse | Auditar en Chrome | >90 en las 4 categorías | [ ] |
| Accesibilidad | Navegar solo con teclado | Foco visible, contraste AA | [ ] |
| Movimiento reducido | Activar prefers-reduced-motion | Sin animaciones continuas | [ ] |
| 3D | Hotspots, comparar, explosionar | Todo funciona | [ ] |
| Misión | Iniciar, pausar, reiniciar, saltar | 6 pasos completos | [ ] |
| Sin WebGL | Desactivar WebGL | Alternativa SVG/texto | [ ] |
| Conexión lenta | Simular 3G | Contenido principal primero | [ ] |
| Enlaces | Revisar todos | Ninguno roto; externos con rel=noopener | [ ] |

**Criterio de aprobación:** todos los casos marcados [x], cero errores en consola, Lighthouse >90 y revisión de contenido por los 5 integrantes.

## 4. Guion de exposición (5–7 minutos)

### Apertura (30–45 s) — Líder
"En Chiclayo, después de cada lluvia, el agua se acumula en esquinas, terrenos y canales. [Relato ilustrativo: una familia que enfrenta un caso de dengue]. ¿Cuántas de esas zonas se detectan a tiempo? [Pausa 3 s]. Según [COMPLETAR CON FUENTE OFICIAL: DIRESA Lambayeque, año], los casos de dengue en la región son..."

**Técnica:** storytelling + pregunta retórica + silencio + dato ancla.

### Problema (60 s) — Investigador ambiental
"El problema no es solo el agua: es no saber dónde está. Inspeccionar manualmente es lento y costoso. Prevenir cuesta menos que tratar."

**Técnica:** PAS (problema, agitación, solución) + contraste.

### Solución (60 s) — Líder
"AeroGuard es un dron autónomo diseñado para recorrer rutas, capturar imágenes y medir partículas PM1.0, PM2.5 y PM10. Identifica posibles zonas de agua estancada y genera alertas para verificación en campo. Y somos claros: no detecta contaminación química ni microplásticos; eso requiere laboratorio."

**Técnica:** transparencia = confianza.

### Demostración (90 s) — Programador + IA
"Esto es una simulación ilustrativa. [Mostrar visor 3D Eco y Pro]. El dron sigue waypoints, toma fotos y el radar marca zonas sospechosas. [Iniciar misión]. Cada alerta queda georreferenciada y pasa a verificación en campo."

**Técnica:** mostrar, no solo contar.

### Prueba y rigor (60 s) — IA + Ambiental
"Nuestras metas: 90% de rutas completas en 20 vuelos, 85% de imágenes útiles, 75% de alertas confirmadas en campo, 95% de retornos seguros. Cada meta tiene método de medición."

**Técnica:** autoridad y prueba.

### Plan y pedido (60 s) — Líder
"Necesitamos [COMPLETAR: monto] para el prototipo Eco. A cambio, el aliado recibe reconocimiento, informe de resultados y evidencia de impacto. La temporada de lluvias es nuestra ventana: cada semana cuenta."

**Técnica:** reciprocidad + escasez honesta.

### Cierre (30–45 s) — Líder
"AeroGuard ofrece tres cosas: detección temprana, datos para decidir y prevención que protege a nuestra comunidad. Volvamos a esa familia: con AeroGuard, la alerta llega antes. Apóyanos a construir el prototipo. Gracias."

**Técnica:** regla de tres + retorno a la historia + CTA.

### Versión de 90 segundos
"En Chiclayo, el agua estancada tras las lluvias se convierte en criaderos de dengue. [Pausa]. AeroGuard es un dron autónomo que recorre rutas, toma fotos y mide PM2.5 y PM10 para identificar zonas de riesgo. [Mostrar simulación 20 s]. No reemplaza laboratorios: prioriza dónde inspeccionar. Necesitamos [COMPLETAR] para construir el prototipo Eco. Únete a nosotros."

## 5. Banco de 12 preguntas de jurado

1. **¿Cómo sabe la IA que es peligroso y no agua de lluvia?** No lo sabe con certeza; clasifica "posible agua estancada" y siempre se verifica en campo. *Honestidad: reconocer límite + mitigación.*
2. **¿Qué precisión esperan?** Meta: ≥75% de alertas confirmadas en 20 pruebas. Se mide con matriz de confusión. *Meta + método.*
3. **¿Por qué el sensor no mide microplásticos?** El PMS5003 mide PM2.5/PM10, no composición. Aporta indicador de calidad del aire. Microplásticos = línea futura con laboratorio. *Reconocer limitación.*
4. **¿Y si pierde GPS, batería o hay viento?** RTL automático, aterrizaje por batería baja y control manual. No volamos con viento fuerte. *Mitigación.*
5. **¿Es legal?** Verificaremos la normativa vigente de DGAC/MTC antes de volar. *Honestidad + siguiente paso.*
6. **¿Privacidad?** No capturamos personas ni propiedades sin autorización; descartamos imágenes con datos personales. *Ética.*
7. **¿Diferencia con dron comercial o satélite?** Bajo costo, rutas locales específicas y enfoque sanitario. Satélite: baja resolución. *Posicionamiento.*
8. **¿Cuánto cuesta y quién paga?** Eco: S/700–1,300 estimado. Buscamos financiamiento, aliados y componentes donados. *Transparencia.*
9. **¿Por qué no hay prototipo?** Estamos en Fase 1. Reducimos riesgo con diseño validado, presupuesto y plan de pruebas por fases. *Etapa clara.*
10. **¿Y si hay muchos falsos positivos?** Ajustamos el dataset, mejoramos el modelo y validamos en campo. *Mitigación + siguiente paso.*
11. **¿Cómo escalan a más distritos?** Replicando rutas, capacitando operadores y aliándonos con municipios. *Visión.*
12. **¿Qué fue lo más difícil?** Integrar hardware, software e IA con rigor honesto. Aprendimos a distinguir lo que un sensor puede y no puede hacer. *Aprendizaje.*

## 6. Material de apoyo

- **One-pager:** problema, solución, etapa, presupuesto, pedido, contacto y QR.
- **Demo en vivo:** abrir visor 3D → hotspot → comparar → misión (2 min).
- **Plan B:** sin internet = copia local; sin proyector = one-pager; tiempo recortado = 90 s; pregunta imprevista = "Es una buena pregunta, no tenemos aún el dato; lo validaremos con...".
- **Checklist del día:** laptop, cables, batería, enlace, QR, copias, vestimenta, ensayo final.

## 7. Plan posterior al prototipo

- Nuevas secciones: "Resultados reales", "Fotos y videos de pruebas", "Métricas de IA".
- Mensajes que cambian de condicional a afirmativo solo con evidencia (bitácora de vuelos, dataset, métricas).
- Próximos pasos: ampliar pruebas, alianzas, permisos, financiamiento y, si corresponde, propiedad intelectual.

## 8. [COMPLETAR] pendientes (prioridad)

1. Cifras de dengue + fuente — Investigador ambiental.
2. Cotizaciones y fecha — Líder + Hardware.
3. Normativa DGAC/MTC — Líder.
4. Zonas de prueba — Investigador ambiental.
5. Dataset de imágenes — Especialista en IA.
6. Nombres, fotos, institución y contacto — Líder.

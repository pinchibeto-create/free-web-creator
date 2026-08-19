# Plan de implementación: Nueva Sección de Tratamientos

Añadiré una nueva sección interactiva denominada "¿Cómo te podemos ayudar?" inmediatamente después de la sección de artesanía dental. Esta sección presentará los servicios de Nisado Baani categorizados por la necesidad del paciente, utilizando un diseño editorial, limpio y premium que respeta la identidad visual de la clínica.

## Acciones técnicas

### 1. Gestión de activos
- Importar los nuevos punteros de activos de servicios en `src/data/nisadoAssets.ts`.
- Mapear las imágenes de `user-uploads://nisado_baani_servicios_webp.zip` a las categorías correspondientes:
    - Cuidar y prevenir (`06_cuidar_y_prevenir.webp`)
    - Mejorar mi sonrisa (`05_mejorar_mi_sonrisa.webp`)
    - Restaurar mis dientes (`04_restaurar_mis_dientes.webp`)
    - Alinear y mejorar mi mordida (`03_alinear_mejorar_mordida.webp`)
    - Resolver una cirugía dental (`02_cirugia_dental.webp`)
    - Necesito atención ahora (`01_urgencias_dentales.webp`)

### 2. Componente de Tratamientos
- Implementar la nueva sección en `src/routes/index.tsx`.
- Utilizar una composición asimétrica inspirada en el estilo "Maison BE".
- **Interacción**: Cada categoría incluirá una interacción sutil (hover o click) para revelar la lista detallada de tratamientos.
- **Jerarquía**: La categoría "Mejorar mi sonrisa" tendrá un protagonismo visual superior (imagen más grande o layout destacado).
- **Paleta**: Uso estricto de Marfil, Champagne y Negro Suave. La categoría de urgencias se integrará elegantemente sin alarmismos visuales.

### 3. Estructura de contenido
- **Microtítulo**: TRATAMIENTOS
- **Título**: ¿Cómo te podemos ayudar?
- **Introducción**: Texto centrado en la necesidad del paciente.
- **Categorías**: 6 bloques con imagen, título, frase descriptiva y lista de servicios.

## Verificación
- Comprobar que la sección se inserta exactamente después de `#atelier`.
- Validar el responsive en dispositivos móviles (apilamiento elegante).
- Asegurar que todas las imágenes cargan correctamente desde el CDN.

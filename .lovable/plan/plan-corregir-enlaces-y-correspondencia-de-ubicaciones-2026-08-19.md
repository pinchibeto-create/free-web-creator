# Plan: Corregir Enlaces y Correspondencia de Ubicaciones

El usuario ha solicitado corregir la correspondencia entre los nombres de las sedes y sus respectivas ubicaciones en Google Maps, asegurando que los enlaces sean correctos y se abran en pestañas nuevas. Se debe mantener el orden (Polanco, Del Valle, Roma Sur) y el diseño actual.

## Sedes y Ubicaciones Reales

1.  **Polanco**: Emerson 111. URL: `https://maps.app.goo.gl/U7SbErGsMU7E9QsPA?g_st=iw`
2.  **Del Valle**: Av. Insurgentes Sur 1188. URL: `https://maps.app.goo.gl/c3mQaaiNhKvDhLEF7?g_st=iw`
3.  **Roma Sur**: Tlaxcala 84. URL: `https://www.google.com/maps/search/?api=1&query=19.4076004%2C-99.1645355`

## Cambios Técnicos

### 1. Hero (`src/routes/index.tsx`)
- Actualizar el array de objetos de ubicación en la sección Hero para que los enlaces coincidan con los nombres según la lista anterior.
- Asegurar el uso de `target="_blank"` y `rel="noopener noreferrer"`.

### 2. Footer (`src/routes/index.tsx`)
- Actualizar el array de ubicaciones en el footer para reflejar los mismos enlaces y direcciones.
- Verificar el orden y la correspondencia.

### 3. SEO y Metadatos (`src/routes/index.tsx`)
- Revisar el JSON-LD de `Dentist` en el `head` para que las direcciones en `address` coincidan con la información oficial si es necesario (aunque el usuario se centró en botones/enlaces, es una buena práctica de consistencia).

## Pasos de Ejecución

1.  **Modificar `src/routes/index.tsx`**:
    - Editar el bloque del Hero (alrededor de la línea 298) con los nuevos enlaces.
    - Editar el bloque del Footer (alrededor de la línea 927) con los nuevos enlaces y direcciones exactas proporcionadas.
    - Opcional: Ajustar las direcciones en el JSON-LD (línea 34) para consistencia absoluta.
2.  **Verificación**:
    - Probar los botones en el preview (desktop y móvil) para confirmar que abren las pestañas correctas.

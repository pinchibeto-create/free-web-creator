# Plan para actualización de botones de contacto y reserva

Este plan describe los cambios necesarios para actualizar el botón de reserva y añadir un botón de WhatsApp elegante.

## Cambios solicitados
1.  **Botón de Reserva**: Cambiar el texto de "Reserva Inmediata" a "Agendar valoración".
2.  **Botón de WhatsApp**: Añadir un botón flotante elegante para enviar mensajes por WhatsApp.

## Detalles técnicos
-   **Archivo**: `src/routes/index.tsx`
-   **Botón de Reserva**:
    -   Localizar el botón flotante actual (líneas 402-409).
    -   Actualizar el texto a "Agendar valoración".
    -   Ajustar ligeramente la posición para dar espacio al nuevo botón de WhatsApp.
-   **Botón de WhatsApp**:
    -   Implementar un nuevo botón flotante usando `framer-motion`.
    -   Estilo: Círculo elegante con el icono de WhatsApp, fondo en color Champagne o Verde suave (manteniendo la paleta de lujo), posicionado a la derecha del botón de reserva o encima.
    -   Icono: Usar un SVG de WhatsApp minimalista.

## Pasos de ejecución
1.  Modificar `src/routes/index.tsx` para actualizar el texto del botón existente.
2.  Añadir el componente de botón de WhatsApp en el mismo archivo, asegurando que se integre visualmente con la estética "Luxury Dental".

## Verificación
-   Confirmar que el botón principal ahora dice "Agendar valoración".
-   Verificar la presencia y el estilo del botón de WhatsApp.
-   Asegurar que ambos botones sean funcionales y no se solapen en móviles.

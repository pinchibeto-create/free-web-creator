# Plan: Activar Blur en el Menú de Navegación Móvil

Para mejorar la legibilidad del menú móvil en la página de Nisado Baani, se implementará un efecto de desenfoque (blur) dinámico que se active cuando el menú esté abierto.

## Cambios propuestos

### Navegación y Header
- Modificar el contenedor principal de la navegación (`nav`) para que aplique un efecto de desenfoque más intenso o una capa de fondo específica cuando `isMenuOpen` sea verdadero en dispositivos móviles.
- Asegurar que el `Side Menu Overlay` (el panel lateral que aparece al abrir el menú) tenga una consistencia visual premium con el resto del sitio.

## Detalles técnicos
- Se utilizará el estado `isMenuOpen` ya existente en `src/routes/index.tsx`.
- Se aplicarán clases de Tailwind como `backdrop-blur-md` o `backdrop-blur-xl` condicionalmente.
- Se ajustará el `z-index` y las transiciones para que el efecto sea fluido.
- Se verificará que el contraste del texto sobre el fondo con blur sea óptimo para la lectura.

## Pasos
1. Modificar el componente `nav` en `src/routes/index.tsx` para añadir el blur condicional.
2. Ajustar el overlay del menú lateral para integrarse mejor con el efecto de desenfoque.
3. Validar el cambio en la vista móvil.

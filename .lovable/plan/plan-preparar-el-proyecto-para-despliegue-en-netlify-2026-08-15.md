# Plan: Preparar el proyecto para despliegue en Netlify

Este plan configura el proyecto para que sea fácilmente desplegable en Netlify, utilizando el adaptador oficial de Nitro para TanStack Start.

## Cambios propuestos

### Configuración del proyecto
- **Añadir `netlify.toml`**: Crear el archivo de configuración de Netlify para definir el comando de construcción y la carpeta de publicación.
- **Actualizar `vite.config.ts`**: Configurar el preset de Nitro a `netlify` para asegurar que el servidor se genere correctamente para las funciones de Netlify.

## Pasos detallados

1. **Crear `netlify.toml`**:
   - Definir `[build]` con `command = "npm run build"` y `publish = ".output/public"`.
   - Nitro se encarga de las funciones en `.output/server`.

2. **Modificar `vite.config.ts`**:
   - Pasar la configuración de Nitro con el preset `netlify` dentro de `defineConfig`.
   - Esto anulará el comportamiento predeterminado (que suele ser Cloudflare en el entorno de Lovable).

3. **Verificación**:
   - Comprobar que el archivo `vite.config.ts` sigue siendo válido.
   - Asegurarse de que el comando de construcción en `package.json` es compatible.

## Detalles técnicos
- **Preset de Nitro**: `netlify`
- **Carpeta de salida**: `.output` (estándar de Nitro/Vinxi)
- **Adaptador**: Se asume que Nitro descargará el adaptador necesario durante el build o que ya está disponible.

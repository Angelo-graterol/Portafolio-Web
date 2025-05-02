# Portafolio Web

# LayOut: Header

## 🎯 Propósito

- Mostrar identidad (nombre o logotipo).
- Navegación rápida hacia las secciones principales del sitio
- Adaptable a escritorio y movil
---

## 📐 Estructura General

```plaintext
<header>
  ├── Logo / Nombre
  └── Navegación
       ├── Inicio
       ├── Sobre mí
       ├── Proyectos
       ├── Habilidades
       └── Contacto
```

---
## Contenido 
- Logo/Nombre
  - Texto: "Angelo" o logotipo personal 
  - Ubicación: izquierda del header
- Menú de Navegación:
  - Enlaces ancla con scroll interno hacia secciones:
    - #Inicio
    - #Sobre-mi 
    - #Proyectos
    - #Habilidades
    - #Contacto

## 🎨 Estilos visuales propuestos
- Fondo:
  - --outer-space: #343f3e o --midnight-green: #164E63.

- Tipografía:
  - Títulos/menú: Exo 2

- Tamaño sugerido para ítems: 16px - 18px

- Colores de texto:

  - Normal: --uranian-blue: #BAD5F9

  - Hover: subrayado o cambio a --periwinkle: #C4B5FD

- Padding del header:
  - 1rem 2rem (ajustable según diseño).

## 📱 Responsivo (Móvil)
- Logo centrado o alineado a la izquierda.

- Menú hamburguesa (colapsable).

- Navegación vertical al expandirse.

## 💡 Notas Técnicas
- Usar etiquetas semánticas: < header >, < nav >, < ul >, < a >.

- Scroll suave al hacer clic: scroll-behavior: smooth.

- Posibilidad de position: sticky o fixed.
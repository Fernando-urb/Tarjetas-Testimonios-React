# 💬 Tarjetas de Testimonios - React

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
</div>

<div align="center">
  <h3>🌟 Componente de testimonios elegante y reutilizable construido con React</h3>
</div>

---

## 📝 Descripción

**Tarjetas de Testimonios React** es un componente moderno y elegante que muestra testimonios de clientes de forma atractiva. Desarrollado con React y CSS puro, este proyecto demuestra buenas prácticas de desarrollo frontend y diseño de componentes reutilizables.

### ¿Por qué este proyecto?
- ⚛️ Practicar desarrollo de componentes React
- 🎨 Implementar diseño responsivo y moderno  
- 📦 Crear componentes reutilizables y escalables
- 💡 Manejar props y estado en React
- 🎯 Optimizar UX con transiciones suaves

---

## ✨ Características Principales

### 🎨 **Diseño Elegante**
- Tarjetas con diseño card moderno
- Efectos de hover suaves
- Tipografía cuidadosamente seleccionada
- Esquema de colores profesional
- Sombras y bordes redondeados

### ⚛️ **Componentes React**
- Arquitectura de componentes modular
- Props configurables
- Componentes reutilizables
- Código limpio y bien estructurado
- Hooks modernos de React

### 📱 **Responsive Design**
- Adaptable a móviles, tablets y desktop
- Grid CSS flexible
- Breakpoints optimizados
- Imágenes responsivas
- UX consistente en todos los dispositivos

### 🎭 **Interactividad**
- Efectos de hover elegantes
- Transiciones CSS suaves
- Estados visuales claros
- Animaciones no intrusivas

---

## 🛠️ Tecnologías Utilizadas

<div align="center">

| Frontend | Desarrollo | Herramientas |
|----------|------------|--------------|
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) | ![VS Code](https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white) |
| ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) | ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) | ![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white) |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | ![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black) | ![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) |

</div>

---

## 📂 Estructura del Proyecto

```
Tarjetas-Testimonios-React/
├── 📁 public/
│   ├── index.html
│   └── favicon.ico
├── 📁 src/
│   ├── 📁 components/
│   │   ├── TestimonioCard.jsx
│   │   ├── TestimoniosList.jsx
│   │   └── Avatar.jsx
│   ├── 📁 data/
│   │   └── testimonios.js
│   ├── 📁 styles/
│   │   ├── TestimonioCard.css
│   │   ├── TestimoniosList.css
│   │   └── App.css
│   ├── 📁 assets/
│   │   └── images/
│   ├── App.jsx
│   └── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Instalación y Uso

### Prerequisitos
- Node.js (v14 o superior)
- npm o yarn

### Pasos para ejecutar

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/Fernando-urb/Tarjetas-Testimonios-React.git
   ```

2. **Navega al directorio**
   ```bash
   cd Tarjetas-Testimonios-React
   ```

3. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

4. **Inicia el servidor de desarrollo**
   ```bash
   npm start
   # o
   yarn start
   ```

5. **¡Listo!**
   - La aplicación se abrirá en `http://localhost:3000`

### Build para producción
```bash
npm run build
# o
yarn build
```

---

## 🎥 Demo

> **¡Próximamente!** - Demo en vivo disponible pronto

---

## 🎨 Componentes Principales

### 💬 **TestimonioCard**
Componente principal que renderiza cada testimonio individual.

```jsx
<TestimonioCard 
  nombre="María González"
  cargo="CEO, TechCorp"
  testimonio="Excelente servicio y atención al cliente..."
  avatar="/images/maria.jpg"
  rating={5}
/>
```

**Props disponibles:**
- `nombre` (string): Nombre del cliente
- `cargo` (string): Puesto y empresa
- `testimonio` (string): Texto del testimonio
- `avatar` (string): URL de la imagen
- `rating` (number): Calificación del 1-5

### 📋 **TestimoniosList**
Componente contenedor que maneja la lista de testimonios.

```jsx
<TestimoniosList testimonios={testimoniosData} />
```

### 👤 **Avatar**
Componente reutilizable para mostrar imágenes de perfil.

```jsx
<Avatar src="/path/image.jpg" alt="Nombre Usuario" size="medium" />
```

---

## 📊 Datos de Ejemplo

Los testimonios incluyen datos realistas de ejemplo:

```javascript
const testimonios = [
  {
    id: 1,
    nombre: "María González",
    cargo: "CEO, TechCorp",
    testimonio: "El servicio superó todas nuestras expectativas. El equipo demostró profesionalismo y dedicación excepcionales.",
    avatar: "/images/maria.jpg",
    rating: 5
  },
  {
    id: 2,
    nombre: "Carlos Rodríguez",
    cargo: "Director de Marketing, InnovaCorp",
    testimonio: "Una experiencia increíble. Los resultados hablan por sí solos.",
    avatar: "/images/carlos.jpg",
    rating: 5
  }
  // ... más testimonios
];
```

---

## 🎨 Características de Diseño

### 🎯 **Layout Responsivo**
- **Mobile First:** Diseñado primero para móviles
- **Grid System:** CSS Grid para layouts flexibles
- **Breakpoints:**
  - Móvil: `< 768px` (1 columna)
  - Tablet: `768px - 1024px` (2 columnas)
  - Desktop: `> 1024px` (3 columnas)

### 🌈 **Esquema de Colores**
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #64748b;
  --accent-color: #f59e0b;
  --background: #f8fafc;
  --card-bg: #ffffff;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
}
```

### ✨ **Efectos y Animaciones**
- Transiciones suaves en hover
- Efectos de sombra dinámicos
- Animaciones de entrada escalonadas
- Micro-interacciones elegantes

---

## 📱 Responsive Breakpoints

| Dispositivo | Ancho | Columnas | Espaciado |
|-------------|-------|----------|-----------|
| 📱 Móvil | < 768px | 1 | 16px |
| 📟 Tablet | 768px - 1024px | 2 | 20px |
| 💻 Desktop | 1024px - 1440px | 3 | 24px |
| 🖥️ Large | > 1440px | 4 | 32px |

---

## 🔧 Personalización

### Modificar estilos
```css
/* Personalizar colores en src/styles/variables.css */
:root {
  --primary-color: tu-color-aqui;
}
```

### Agregar nuevos testimonios
```javascript
// En src/data/testimonios.js
export const testimonios = [
  // ... testimonios existentes
  {
    id: nuevo_id,
    nombre: "Nuevo Cliente",
    cargo: "Puesto, Empresa",
    testimonio: "Tu testimonio aquí...",
    avatar: "/ruta/imagen.jpg",
    rating: 5
  }
];
```

---

## 🎯 Casos de Uso

Este componente es perfecto para:

- 🌐 **Landing Pages:** Mostrar credibilidad social
- 📱 **Apps Corporativas:** Testimonios de clientes
- 🛍️ **E-commerce:** Reviews de productos
- 💼 **Portfolios:** Testimonios de clientes
- 🏢 **Sitios Empresariales:** Casos de éxito

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Para colaborar:

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/mejora-testimonios`)
3. Commit tus cambios (`git commit -m 'Añadir nueva característica'`)
4. Push a la rama (`git push origin feature/mejora-testimonios`)
5. Abre un Pull Request

### Ideas para contribuir:
- 🎨 Nuevos temas de colores
- 📱 Mejoras en responsive design
- ✨ Más efectos de animación
- 🔧 Optimizaciones de rendimiento
- 🌐 Soporte para internacionalización
- ♿ Mejoras de accesibilidad

---

## 🚀 Características Técnicas

- **Performance:** Componentes optimizados con React.memo
- **Accesibilidad:** ARIA labels y navegación por teclado
- **SEO:** Estructura semántica correcta
- **Bundle Size:** Optimizado para carga rápida
- **Cross-Browser:** Compatible con navegadores modernos

---

## 📚 Recursos y Referencias

- ⚛️ [React Documentation](https://reactjs.org/docs)
- 🎨 [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📱 [Responsive Design Principles](https://web.dev/responsive-web-design-basics/)
- ♿ [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 👨‍💻 Autor

**Fernando Urbano**

[![GitHub](https://img.shields.io/badge/GitHub-Fernando--urb-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Fernando-urb)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ufer2025-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/ufer2025)
[![Email](https://img.shields.io/badge/Email-fernando__urbano%40outlook.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:fernando_urbano@outlook.com)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">
  <img src="https://komarev.com/ghpvc/?username=Fernando-urb&color=blue&style=flat-square&label=Visitas+al+repositorio"/>
</div>

<div align="center">
  
  **"Cada testimonio cuenta una historia de éxito"** 💬✨
  
</div>

---

⭐ **¡Si te gustó este proyecto, dale una estrella!** ⭐
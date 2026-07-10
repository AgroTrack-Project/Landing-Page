# AgroTrack — Landing Page

Cultiva mejor con datos reales.

Sitio web estático oficial del modelo de negocio AgroTrack, una plataforma que ayuda a agricultores a registrar sus parcelas, monitorear las condiciones del suelo y recibir recomendaciones claras de riego, decidiendo con datos y no con intuición.

Landing page: [https://agrotrack-project.github.io/Landing-Page/](https://agrotrack-project.github.io/Landing-Page/)

---

## Descripción

Más del 70% de los agricultores peruanos toman decisiones de riego por intuición, lo que genera pérdida de nutrientes por exceso de agua o estrés hídrico por escasez. AgroTrack resuelve este problema ofreciendo una tecnología robusta, fácil de usar y de bajo costo operativo para mejorar la salud del suelo, maximizar el rendimiento del cultivo y reducir la pérdida de nutrientes.

Este repositorio contiene el Landing Page del producto, cuyo objetivo es comunicar la propuesta de valor a cada segmento objetivo mediante llamadas a la acción (call-to-action) específicas para cada uno.

---

## Secciones del sitio

| Sección | Descripción |
|---|---|
| Hero | Propuesta de valor principal ("Grow better with real data") con CTA de registro y solicitud de demo. |
| Features | Beneficios y características principales del producto. |
| The problem we solve | Estadísticas y descripción del problema que resuelve AgroTrack en el sector agrícola. |
| Plans | Planes disponibles para los distintos segmentos de usuario. |
| For who | Segmentos objetivo a los que está dirigido el producto. |
| Demo | Sección de demostración/acceso al producto. |

---

## Tecnología

Construido siguiendo las tecnologías open-source definidas para el producto:

- HTML5 — estructura semántica del sitio.
- CSS3 — estilos, diseño responsivo y Design System del producto.
- JavaScript — interactividad, internacionalización (selector EN | ES) y lógica de navegación.

Sin frameworks ni dependencias de build: es un sitio estático servido directamente vía GitHub Pages.

---

## Estructura del repositorio

```
Landing-Page/
├── assets/          # Imágenes, íconos y recursos multimedia
├── css/             # Hojas de estilo del sitio
├── js/              # Scripts de interactividad, i18n y navegación
├── index.html       # Página principal del Landing Page
├── LICENSE          # Licencia MIT
└── README.md        # Este archivo
```

---

## Internacionalización y accesibilidad

- El sitio soporta inglés (en_US) y español latinoamericano (es_419) mediante el selector de idioma ubicado en el header (EN | ES), siendo el inglés el idioma por defecto.
- Se aplican atributos ARIA y buenas prácticas de accesibilidad (a11y) para asegurar una experiencia inclusiva, incluyendo textos alternativos en imágenes y navegación adaptada a distintos dispositivos.

---

## Despliegue

El sitio se despliega automáticamente mediante GitHub Pages, a través del workflow `pages-build-deployment`, el cual se ejecuta ante cada cambio integrado en el branch `main`.

Para ejecutarlo localmente solo necesitas abrir `index.html` en tu navegador, o servirlo con cualquier servidor estático, por ejemplo:

```bash
git clone https://github.com/AgroTrack-Project/Landing-Page.git
cd Landing-Page

python3 -m http.server 5500
```

Luego abre `http://localhost:5500` en tu navegador.

---

## Control de versiones y colaboración

Este repositorio sigue las siguientes convenciones para mantener consistencia en el ciclo de vida del producto:

- GitFlow como workflow de branching (`main`, `develop`, `feature/*`, `release/*`, `hotfix/*`).
- Conventional Commits para los mensajes de commit (`feat:`, `fix:`, `chore:`, etc.).
- Semantic Versioning para el nombrado de releases (versión vigente: `release/v3.0.0`).

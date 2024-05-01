

# Bienvenido a Pomodoro 
[Pomodoro](https://ulternae.github.io/Pomodoro/#/pomodoro) es una aplicación diseñada para mejorar la gestión del tiempo usando la técnica Pomodoro. Esta metodología divide el trabajo en intervalos de tiempo fijos, tradicionalmente de 25 minutos de duración, separados por breves descansos. Nuestra aplicación permite a los usuarios configurar estos tiempos de enfoque y descanso para adaptarse a sus necesidades individuales, ofreciendo una herramienta potente para incrementar la productividad personal. 

## Características  
-  **Navegación con React Router**: Facilita la navegación entre diferentes vistas y configuraciones. 
-  **Gestión de Estado**: Utiliza `createContext` y React para mantener y manipular el estado global de la aplicación. 
-  **Responsive Design**: Asegura una experiencia fluida en dispositivos móviles y de escritorio. 
-  **Pomodoros**: Activa temporizadores que ayudan a los usuarios a concentrarse en sus tareas, con alertas sonoras al finalizar cada intervalo. 
-  **Configuraciones Personalizables**: Permite a los usuarios personalizar la duración de los pomodoros y los descansos, así como la apariencia de la aplicación, incluyendo colores y tipos de letra. 

## Tecnologías Usadas  
-   React
-   React Router
-   Tailwind CSS
-   Vite
-   gh-pages

## Cómo iniciar el proyecto


1.  **Clona el repositorio:**
    
    `git clone https://github.com/Ulternae/Pomodoro.git`
    
2.  **Instala las dependencias:**
    
    `npm i`
    
3.  **Ejecuta el proyecto:**
    
    `npm run dev`
    
Esto correrá la aplicación en `http://localhost:5173/Pomodoro/`.

## Estructura del Proyecto

Descripción de cómo los archivos y carpetas están organizados en el proyecto:
### `public`
- `assets`: Contiene todos los recursos gráficos como imágenes y SVGs utilizados en la aplicación.
- `audio`: Almacena los archivos de sonido en formato MP3 utilizados para la alarma.

### `components`
- `Buttons`: Componentes para seleccionar colores o fuentes, permitiendo una personalización completa.
- `Input`: Permite a los usuarios ajustar el tiempo del contador según sus necesidades.
- `PlaySound`: Reproduce un sonido de alarma al completarse un intervalo de tiempo.
- `TimerCount`: Muestra y actualiza el contador de tiempo en tiempo real.
- `TimerOptions`: Ofrece un menú para seleccionar entre pomodoro, descanso corto o largo.

### `context`
- Gestiona el estado global de la aplicación, proporcionando valores predeterminados y almacenando las preferencias del usuario.

### `pages`
- `Home`: Vista principal donde los usuarios interactúan con el temporizador.
- `Layout`: Define la estructura base común a todas las páginas.
- `Settings`: Modal que permite a los usuarios configurar sus preferencias de tiempo, fuente y color.

## Vista General de la Interfaz de Usuario

![Pomodoro time](https://github.com/Ulternae/Pomodoro/assets/164533943/ecbe7f71-c80d-484a-b167-772036bb37cb)
![Pomodoro Image Settings](https://github.com/Ulternae/Pomodoro/assets/164533943/8d4d6ce7-c804-4b2c-b4ff-15450b58708b)

## Agradecimientos

Quisiera agradecer a [Frontend Mentor](https://www.frontendmentor.io/) por proporcionar el diseño en Figma que fue utilizado como base para el desarrollo de esta aplicación Pomodoro.

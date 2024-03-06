# Pomodoro

![Static Badge](https://img.shields.io/badge/Estado%20-%20Terminado%20-%20green)

## Introducción
Esta app ofrece al usuario una forma más fácil y practica de poder llevar a cabo la técnica pomodoro. 
Como un añadido extra agregue música lofi, una alarma, cambios de tema
y una configuración simple por si el usuario quiere agregar mas o menos tiempo incluye música.


## Tabla de contenido
* [Introducción](#Introducción)
* [Tabla de contenido](#Tabla-de-contenido)
* [Tipo de proyecto](#Tipo-de-proyecto)
* [Capturas de pantalla](#Capturas-de-pantalla)
* [Estrategias](#Estrategias)
* [Tecnologías utilizadas](#Tecnologías-utilizadas)
* [Estructura](#Estructura)
* [Instalación](#Instalación)
* [Uso](#Uso)


## Tipo de proyecto
Proyecto individual.

## Capturas de pantalla 
<p align="center">
<img src="https://i.postimg.cc/jjRQVLx4/Whats-App-Image-2024-03-06-at-01-32-22.jpg" width=200/>
<img src="https://i.postimg.cc/8CkKRy6G/Whats-App-Image-2024-03-06-at-01-32-22-1.jpg" width=200/>
<img src="https://i.postimg.cc/J7Xqkw2J/Whats-App-Image-2024-03-06-at-01-32-23.jpg" width=200/>
</p>

## Estrategias
### Smart y Dumb Component
Se separaron los componentes que se utilizan en el proyecto en smart  y dumb component según la responsabilidad que tengan. Esto lo hice con el objetivo de obtener un código mas conciso y una mejor legibilidad </br> 
**Smart**:  Tendrán la lógica del componente, operaciones complejas , gestionan eventos y acciones del usuario.</br>
**Dumb**: No manejan la lógica, se encargan únicamente de la presentación.


### Carpeta Auxiliar
En esta carpeta guardo distintas funciones o variables constantes que usare a lo largo de todo el proyecto, de esta forma evito repetir código y con las variable contantes definidas evito tener cadenas mágicas 


### Carpeta Type
Aca guardo distintos types que utilizo duranto todo el proyecto

### Utilizo useContext
Dentro de la carpeta context guardo distintos useContext que voy utilizando a lo largo de todo el proyecto, de esta forma evito estar pasando como parametros dichas variables.


## Tecnologías utilizadas
  - React native
  - Typescript
## Estructura 

```
Pomodoro
├─ .gitignore
├─ .vscode
│  └─ .react
├─ app.json
├─ App.tsx
├─ assets
│  ├─ adaptive-icon.png
│  ├─ alarma
│  │  └─ guitarra.mp3
│  ├─ favicon.png
│  ├─ icon.png
│  ├─ musica
│  │  └─ lofi.mp3
│  └─ splash.png
├─ babel.config.js
├─ eas.json
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ auxiliar
│  │  ├─ mensaje.ts
│  │  ├─ range.ts
│  │  └─ tiempo.ts
│  ├─ components
│  │  ├─ dumb
│  │  │  ├─ DBoton.tsx
│  │  │  ├─ DCronometro.tsx
│  │  │  ├─ DMostrarConfig.tsx
│  │  │  ├─ DSalir.tsx
│  │  │  └─ DTiempo.tsx
│  │  └─ smart
│  │     ├─ SAlarma.tsx
│  │     ├─ SCompletado.tsx
│  │     ├─ SConfig.tsx
│  │     ├─ SConfiguracion.tsx
│  │     ├─ SConfigurar.tsx
│  │     ├─ SControlCrono.tsx
│  │     ├─ SDescripcion.tsx
│  │     ├─ SIntervalo.tsx
│  │     ├─ SMusica.tsx
│  │     ├─ SPantalla.tsx
│  │     ├─ STema.tsx
│  │     └─ STiempoPicker.tsx
│  ├─ context
│  │  ├─ ConfiguracionContext.tsx
│  │  ├─ ScreenContext.tsx
│  │  └─ TemaContext.tsx
│  ├─ hook
│  │  ├─ useAlarma.tsx
│  │  ├─ useMusica.tsx
│  │  └─ usePomodoro.tsx
│  ├─ screens
│  │  ├─ Alarma.tsx
│  │  ├─ Completado.tsx
│  │  ├─ Config.tsx
│  │  └─ Inicio.tsx
│  └─ types
│     └─ type.ts
└─ tsconfig.json

```

## Instalación 
Antes de descargar o clonar el repositorio es necesario que usted instale Node (https://nodejs.org/en). </br>
Una vez descargado o clonado el repositorio, abra la terminal en la ruta donde se encuentra el proyecto y escriba el siguiente comando.
```
npm i
```
Esto instalara las dependencias que necesite el proyecto

## Uso
En caso de haber seguido los pasos de la instalación solo debe ejecutar el siguiente comando:
```
npm run start
```
y seguir las instrucciones en pantalla

En caso de saltarse los paso de instalación y querer probar la app para le dejo el link para su descarga en **android**: 
<a href="https://expo.dev/artifacts/eas/q928qJMTd5nhGdMWJFbgHh.apk">APK</a>


</br>

> [!NOTE]
> Recuerde que es una APK así que es necesario dar permisos para poder instalarla


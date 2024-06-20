# CRM en React

En este proyecto se implementa un CR, utilizando React, Auth0, PrimeReact y Bootstrap.

## Índice
1. Instalación
2. Configuración
3. Funcionalidades

## 1. Instalación

### 1. Instalación de entorno

1. Se debe contar con Node.js y npm instalados. [Nodejs](https://nodejs.org/en/download/prebuilt-installer)
2. Crear la aplicación React
3. Instalar dependencias

## 2. Configuración

### Auth0

Este proyecto utiliza Auth0 para la autenticación de los usuarios. Desde [Auth0](https://auth0.com/).

Dentro de Auth0:
1. Creación de cuenta con la que se configurará el proyecto
2. Creación de una aplicación
3. Se configura de acuerdo a las necesidades del proyecto. (Nombre de la aplicación, descripción, logo, callbackURLs, Logout URLs, Allowed Web Origins)
4. Instalación de Auth0 React SDK
    ```npm install @auth0/auth0-react```
5. Configuración del Auth0Provider

### Universe.io

Este proyecto utiliza scripts HTML y CSS de [Universe.io](https://uiverse.io/) para mejorar la experiencia del usuario y el front end. 

### Primereact

Este proyecto utiliza scipts HTML de [Primereact](https://primereact.org/) para mejorar la experiencia de usuario y el front end.

1. Se instala PrimeReact y PrimeIcons
    ```npm install primereact primeicons```

## 3. Funcionalidades
Roles y usuarios
    - Registro
    - Login
    - Manejo de usuarios

## Getting Started with Create React App

Este proyecto fue bootstrapped con [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

**`npm start`**

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

**`npm test`**

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

**`npm run build`**

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

**`npm run eject`**

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

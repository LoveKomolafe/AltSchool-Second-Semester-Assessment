# Counter Assessment App

Welcome to the Assessment Portal. 

This is a simple React Application that demonstrate the use of a custom counter hook, error boundary and error 404 page.

## Contents

- [GettingStarted](#getting-started)
- [Custom Counter Hook](#custom-counter-hook)
- [Components Pages](#components-pages)
- [Styling](#styling)


## Getting Started

1. This project was created using a React + Vite template. The template was installed using the necessary commands and the evironment set up for implementing the code.
Commands: npm create vite (nameOfProject) --template react

2. The dependencies were installed using the npm install command in the terminal.

3. The development server was hosted by using the "npm run dev" command to run the server on the `http://localhost:5173` site.

## Custom Counter Hook

This project include a custom counter hook created in the `src\Hooks\useCounter.jsx` file. This hook provides functions for incrementing, decrementing, resetting, and setting the counter value.

The custom counter hooks was exported and used in the `src\Routes\Counter.jsx` file. 

In the `src\Routes\Counter.jsx` file, the Counter App which is part of the assessment was set up as a page where the custom hook was imported and used to set up the page.

## Components/Pages

1. Root Page
The root page (`src\Routes\Roots.jsx`) which is the landing page of my application displays a welcome message and provide links for navigation. It also includes error handling using the ErrorBoundary and custom ErrorBound component to handle any errors that might occur within this page.

2.  App Page
The app component (`src\App.jsx`) is responsible for handling routing within the application. This component includes the layout and structure of the application and render the appropriate page components based on the route.

3.  The CounterApp Page
This page (`src\Routes\Counter.jsx`) provides a simple user interface for counting and controlling numerical values. Users can increment, decrement, reser and manually set the count value.

4.  The ErrorBoundary Page
This page (`src\Components\ErrorBound.jsx`) allows to test how error boundaries work in React application. The error boundary captureand handle error which then prevent it from crashing the entire application.

5.  The NotFound Page
This page (`src\Components\NotFound.jsx`) is responsible for rendering a user friendly 404error page which indicates that the requested page is not found and offering a way for users to return to the home page of the application.

6.  The Main Page
This page (`src\main.jsx`) renders the main content of the application including the navigation and routing logic as needed.

## Styling

The styling is implemented using css. It is customized in the `src\index.css` file.


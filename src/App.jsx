import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CounterApp from "./Routes/Counter";
import Root from "./Routes/Roots";
import ErrorBoundary from "./Components/ErrorBound";
import './App.css'
import NotFound from "./Components/NotFound";

const router = createBrowserRouter([
  {
  
    path: "/",
    component: Root,
    element: <Root />,
  },

  {
    path: "/counter",
    component: CounterApp,
    element: <CounterApp />,
  },

  {
    path: "/errorBoundary",
    component: ErrorBoundary,
    element: <ErrorBoundary />,
  },

  {
    path: "/error",
    element: <NotFound />,
  },

])

function App() {
    
  return <RouterProvider router={router}></RouterProvider>;
}

export default App

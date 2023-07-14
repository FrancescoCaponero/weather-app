import React from 'react'
import ReactDOM from 'react-dom/client'
import WeatherComponent from './components/WeatherSearch.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import WeatherHome from './components/WeatherHome.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <WeatherHome />,
  },
  {
    path: "/weather",
    element: <WeatherComponent />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

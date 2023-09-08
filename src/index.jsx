import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './screens/Home';
import './components/index.css'
import Resume from './screens/Resume';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './screens/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Resume",
    element: <Resume />
  },
  {
    path: "/Contact",
    element: <Contact />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
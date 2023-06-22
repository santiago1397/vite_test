import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createHashRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/hello/:okay",
    element: <div>okay</div>,
  },
  {
    path: "/hello/",
    element: <div>hello</div>,
  },
  {
    path: "*",
    element: <div>404</div>
  }


],{ basename: "/vite_test"})

/* ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
); */


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<RouterProvider router={router} />);



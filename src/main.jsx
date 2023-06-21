import React from 'react'
import ReactDOM,{createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createHashRouter,createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:okay",
        element: <div>okay</div>
      }
    ]
  },
  {
    path: "/:okay",
    element: <div>lol</div>
  },
  {
    path: "*",
    element: <div>404</div>
  }


])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


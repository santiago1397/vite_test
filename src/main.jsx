import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { 
createHashRouter, 
createBrowserRouter, 
RouterProvider,
BrowserRouter as Router,
Routes,
Route 
}from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hello" element={<div>hello</div>} />
        <Route path="/hello/:okay" element={<div>okay</div>} />
        
      </Routes>
    </Router>
  </React.StrictMode>
);

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


],)

/* ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
); */


/* const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<RouterProvider router={router} />); */



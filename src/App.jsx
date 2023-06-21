import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
      <div className="App">
        <BrowserRouter basename="vite_test">
          <Routes>
            <Route path="/" element={<div>hello</div>} />
            <Route path="/projects" element={<div>projec</div>} />
            <Route path="projects/:projectName" element={<div>dynamic</div>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

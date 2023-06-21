import { HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
      <div className="App">
        <HashRouter basename="vite_test">
          <Routes>
            <Route path="/" element={<div>hello</div>} />
            <Route path="/projects" element={<div>projec</div>} />
            <Route path="projects/:projectName" element={<div>dynamic</div>} />
          </Routes>
        </HashRouter>
      </div>
  );
}

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Components/Portfolio";
import Project from "./Components/Project";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;

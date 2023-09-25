import { Routes, Route, HashRouter } from "react-router-dom";

import Home from "./pages/Home.js";
import Diseases from "./pages/Diseases.js";

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/diseases" element={<Diseases />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
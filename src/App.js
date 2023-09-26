import { Routes, Route, HashRouter } from "react-router-dom";

import Home from "./pages/Home.js";
import Diseases from "./pages/Diseases.js";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/diseases" element={<Diseases/>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
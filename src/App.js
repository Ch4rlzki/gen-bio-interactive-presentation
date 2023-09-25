import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home.js";
import Diseases from "./pages/Diseases.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/diseases" element={<Diseases/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
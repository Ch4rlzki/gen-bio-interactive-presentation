import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import Diseases from "./pages/Diseases.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="*" element={<Home/>}/>
          <Route path="/diseases" element={<Diseases/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
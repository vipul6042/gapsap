import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loginpage from "./pages/loginpage";
import Homepage from "./pages/homepage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/chat" element={<Homepage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Home from "./Home";
import Ifp from "./Ifp";
import Medicare from "./Medicare";
import Medicaid from "./Medicaid";
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/medicare" element={<Medicare />} />
            <Route path="/medicaid" element={<Medicaid />} />
            <Route path="/ifp" element={<Ifp />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

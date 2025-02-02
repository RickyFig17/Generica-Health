import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Ifp from "./Ifp";
import Medicare from "./Medicare";
import Medicaid from "./Medicaid";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/medicare" element={<Medicare />} />
            <Route path="/medicaid" element={<Medicaid />} />
            <Route path="/ifp" element={<Ifp />} />
          </Routes>
        </BrowserRouter>
      </header>
      <Footer />
    </div>
  );
}

export default App;

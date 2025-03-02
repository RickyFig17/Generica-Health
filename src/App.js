import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Ifp from "./Ifp";
import Medicare from "./Medicare";
import Medicaid from "./Medicaid";
import Employers from "./Employers";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Providers from "./Providers";
import Brokers from "./Brokers";
import Terms from "./Footer/Terms";
import Privacy from "./Footer/Privacy";
import JsLibrary from "./JsCodeLibrary/FunctionsLibrary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <JsLibrary />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/medicare" element={<Medicare />} />
            <Route path="/medicaid" element={<Medicaid />} />
            <Route path="/ifp" element={<Ifp />} />
            <Route path="/employers" element={<Employers />} />
            <Route path="/providers" element={<Providers />}></Route>
            <Route path="/brokers" element={<Brokers />}></Route>
            <Route path="/Terms" element={<Terms />}></Route>
            <Route path="/Privacy" element={<Privacy />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
      <Footer />
    </div>
  );
}

export default App;

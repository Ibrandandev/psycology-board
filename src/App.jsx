import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InicioScreen from "./pages/InicioScreen";
import LoginScreen from "./pages/LoginScreen";
import AdministracionScreen from "./pages/AdministracionScreen";
import ErrorScreen from "./pages/ErrorScreen";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<InicioScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/administracion" element={<AdministracionScreen />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

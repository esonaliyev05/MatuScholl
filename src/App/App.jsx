import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../Page/Home";
import Navbar from "../Components/Navbar/Navbar";
import About from "../Page/About";
import Concat from "../Page/Concat";

function App() {
  const location = useLocation();

  const hideNavbar = location.pathname === "/concat";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/concat" element={<Concat />} />
      </Routes>
    </>
  );
}

export default function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

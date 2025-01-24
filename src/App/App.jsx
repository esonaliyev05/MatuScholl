import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css"; // Loader uchun CSS

// Dinamik komponentlar yuklash
const Home = React.lazy(() => import("../Page/Home"));
const About = React.lazy(() => import("../Page/About"));
const Concat = React.lazy(() => import("../Page/Concat"));
const Greetings = React.lazy(() => import("../Page/Greetings"));
const Navbar = React.lazy(() => import("../Components/Navbar/Navbar"));

function App() {
  const [loading, setLoading] = useState(true); // Yuklanish holati
  const location = useLocation();

  const hideNavbar = location.pathname === "/concat";

  useEffect(() => {
    // Sayt to‘liq yuklanib bo‘lgach, loaderni o‘chiradi
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      const handleLoad = () => {
        setLoading(false);
      };

      window.addEventListener("load", handleLoad);

      // Tozalash
      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, []);

  if (loading) {
    // Loader sayt to‘liq yuklangunga qadar ko‘rinadi
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <>
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="spinner"></div>
            <h2>Loading...</h2>
          </div>
        }
      >
        {!hideNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/greetings" element={<Greetings />} />
          <Route path="/concat" element={<Concat />} />
        </Routes>
      </Suspense>
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

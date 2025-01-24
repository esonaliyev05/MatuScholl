import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../Page/Home";
import Navbar from "../Components/Navbar/Navbar";
import About from "../Page/About";
import Concat from "../Page/Concat";
import Greetings from "../Page/Greetings";
import { Suspense } from "react";

function App() {
  const location = useLocation();

  const hideNavbar = location.pathname === "/concat";

  return (
    <>
        <Suspense fallback={
          <>
           <h1>Looder ...</h1>
          </>
        }>

      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/greetings" element={<Greetings/>}/>
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

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import Navbar from "../Components/Navbar/Navbar";
import About from "../Page/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

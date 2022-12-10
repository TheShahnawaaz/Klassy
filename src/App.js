// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Menu from "./Components/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chefs from "./Components/Chefs";
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route exact path="/about" element={<About />} /> */}
        <Route exactf path="/" element={<Home />} />
        <Route exactf path="/home" element={<Home />} />
        <Route exactf path="/about" element={<About />} />
        <Route exactf path="/menu" element={<Menu />} />
        <Route exactf path="/about" element={<About />} />
        <Route exactf path="/chefs" element={<Chefs />} />
        <Route exactf path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

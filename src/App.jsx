import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Portifolio from "./pages/Portifolio/portifolio";
import Contact from "./pages/Contact/contact";
import ScrollToTopButton from "./components/botaoTopo/ScrollToTopButton";


export default function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portifolio" element={<Portifolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </Router>
  );
}

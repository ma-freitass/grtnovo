import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Whatsapp from "../../assets/whatsapp.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Home from "../../pages/Home/home";
import About from "../../pages/About/about";
import Portifolio from "../../pages/Portifolio/portifolio";
import Contact from "../../pages/Contact/contact";

export default function Header() {
  return (
    <BrowserRouter>
      <header>
        <div>
          <div className="bg-faixa flex justify-center h-10 items-center">
            <img
              src={Instagram}
              alt="Logo Instagram"
              className="w-6 h-6 mx-4"
            />
            <img src={Whatsapp} alt="Logo Whatsapp" className="w-6 h-6 mx-4" />
            <img src={Linkedin} alt="Logo Linkedin" className="w-6 h-6 mx-4" />
          </div>
        </div>
        <section>
          <div className="flex justify-center items-center">
            <Link to="/">
              <img src={Logo} alt="Logo GRT" />
            </Link>
          </div>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/about">Sobre</Link>
                </li>
                <li>
                  <Link to="/portifolio">Portifolio</Link>
                </li>
                <li>
                  <Link to="/contact">Contato</Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portifolio" element={<Portifolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

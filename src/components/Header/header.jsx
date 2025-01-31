import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Whatsapp from "../../assets/whatsapp.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Home from "../../pages/Home/home";
import About from "../../pages/About/about";
import Portifolio from "../../pages/Portifolio/portifolio";
import Contact from "../../pages/Contact/contact";
import "./header.module.scss";

export default function Header() {
  return (
    <BrowserRouter>
      <header>
        <div>
          <div className={s.destaque}>
            <img src={Instagram} alt="Logo Instagram" />
            <img src={Whatsapp} alt="Logo Whatsapp" />
            <img src={Linkedin} alt="Logo Linkedin" />
          </div>
        </div>
        <div className="logo">
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

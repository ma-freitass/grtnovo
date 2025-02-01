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
        <section className="bg-faixa flex justify-center h-10 items-center">
          <a href="https://www.instagram.com/grt.engenharia/" target="_blank">
            <img
              src={Instagram}
              alt="Logo Instagram"
              className="w-6 h-6 mx-4 hover:bg-faixa2 rounded-md"
            />
          </a>
          <a href="https://wa.me/5524981417949" target="_blank">
            <img
              src={Whatsapp}
              alt="Logo Whatsapp"
              className="w-6 h-6 mx-4 hover:bg-faixa2 rounded-md"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/grtengenharia-grt/"
            target="_blank"
          >
            <img
              src={Linkedin}
              alt="Logo Linkedin"
              className="w-6 h-6 mx-4 hover:bg-faixa2 rounded-md"
            />
          </a>
        </section>
        <section className="h-36 bg-primary text-titulo font-semibold flex justify-around items-center">
          <Link to="/">
            <img src={Logo} alt="Logo GRT" className="h-16" />
          </Link>
          <div>
            <nav>
              <ul className="w-[30vw] flex justify-around">
                <li>
                  <Link to="/">Home</Link>
                </li>
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

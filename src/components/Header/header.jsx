import { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Whatsapp from "../../assets/whatsapp.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";

export default function Header() {
  useEffect(() => {
    const mobileButton = document.getElementById("mobile-button");
    const mobileMenu = document.getElementById("mobile-menu");

    const toggleMenu = () => {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
    };

    const closeMenu = () => {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
    };

    if (mobileButton) {
      mobileButton.addEventListener("click", toggleMenu);
    }

    if (mobileMenu) {
      mobileMenu.addEventListener("click", closeMenu);
    }

    return () => {
      if (mobileButton) {
        mobileButton.removeEventListener("click", toggleMenu);
      }
      if (mobileMenu) {
        mobileMenu.removeEventListener("click", closeMenu);
      }
    };
  }, []);

  return (
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
          <img src={Logo} alt="Logo GRT" className="h-24" />
        </Link>
        <div>
          <nav id="mobile-menu" className="hidden laptop:block items-center z-40  max-laptop:fixed max-laptop:w-full max-laptop:inset-0">
            <div className="fixed laptop:hidden inset-0 bg-primary/40 backdrop-blur-md"></div>
            <ul className="w-[30vw] laptop:flex justify-around laptop:flex-wrap max-laptop:z-50  max-laptop:divide-y-2 max-laptop:divide-titulo/10 max-laptop:absolute text-2xl max-laptop:p-20 max-laptop:w-full max-laptop:px-10">
              <li className="laptop:hover:underline laptop:hover:underline-offset-4 p-4 block max-laptop:hover:bg-titulo/10 laptop:px-0 laptop:py-2">
                <Link to="/">Início</Link>
              </li>
              <li className="laptop:hover:underline laptop:hover:underline-offset-4 p-4 block max-laptop:hover:bg-titulo/10 laptop:px-0 laptop:py-2">
                <Link to="/about">Sobre</Link>
              </li>
              <li className="laptop:hover:underline laptop:hover:underline-offset-4 p-4 block max-laptop:hover:bg-titulo/10 laptop:px-0 laptop:py-2">
                <Link to="/portifolio">Portifolio</Link>
              </li>
              <li className="laptop:hover:underline laptop:hover:underline-offset-4 p-4 block max-laptop:hover:bg-titulo/10 laptop:px-0 laptop:py-2">
                <Link to="/contact">Contato</Link>
              </li>
            </ul>
          </nav>
        </div>
        <button id="mobile-button" className="flex items-center gap-3 laptop:hidden">
          <span className="h-3 w-6 flex flex-col justify-between *:h-0.5 *:rounded-md *:bg-titulo">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </section>
    </header>
  );
}

import Logo from "../../assets/logo.png";
import Instagram from "../../assets/instagram.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import Linkedin from "../../assets/linkedin.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className="bg-primary flex flex-col items-center h-96 justify-evenly">
        <div>
          <a href="/">
            <img src={Logo} alt="Logo GRT" className="h-36 w-96 drop-shadow-custom	" />
          </a>
        </div>
        <div className="mb-2">
          <p className="font-ethnocentric text-faixa1"> Mais que máquinas. Conectamos inovação à produtividade. </p>
        </div>
        <div className="text-faixa2 font-bold text-center">
          <p> Avenida Paulo Erlei Alves Abrantes, 1110</p>
          <p>Três Poços, Volta Redonda, RJ - CEP: 27240-560</p>
          <p>Contato: (24) 3350-1815 / (24) 98141-7949</p>
        </div>
        <div className="flex justify-center">
          <a href="https://www.instagram.com/grt.engenharia/" target="_blank">
            <img
              src={Instagram}
              alt="instagram-icon"
              className="w-10 h-10 mx-6"
            />
          </a>
          <a href="https://wa.me/5524981417949" target="_blank">
            <img
              src={Whatsapp}
              alt="whatsapp-icon"
              className="w-10 h-10 mx-6"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/grtengenharia-grt/"
            target="_blank"
          >
            <img
              src={Linkedin}
              alt="linkedin-icon"
              className="w-10 h-10 mx-6"
            />
          </a>
        </div>
      </section>

      <div className="bg-faixa text-primary h-12 flex justify-center text-center items-center">
        <p>
          &copy; 2014 - {currentYear} GRT Engenharia - Todos os direitos
          reservados. Desenvolvido por Maiala Freitas.
        </p>
        
      </div>
    </>
  );
}

import Logo from "../../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className="">
        <div>
          <a href="/">
            <img src={Logo} alt="Logo GRT" />
          </a>
        </div>
        <div className="adress">
          <p> Avenida Paulo Erlei Alves Abrantes, 1110</p>
          <p>Três Poços, Volta Redonda, RJ - CEP: 27240-560</p>
        </div>
        <div className="social-media">
          <a href="/">
            <img src="" alt="instagram-icon" />
          </a>
          <a href="/">
            <img src="" alt="whatsapp-icon" />
          </a>
          <a href="/">
            <img src="" alt="linkedin-icon" />
          </a>
        </div>
      </section>

      <section className="rights">
        <p>
          &copy; 2004 - {currentYear} GRT Engenharia - Todos os direitos
          reservados. Desenvolvido por Maiala Freitas.
        </p>
      </section>
    </>
  );
}

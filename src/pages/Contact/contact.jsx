import { useState } from "react";
import Whatsapp from "../../assets/whatsapp.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import { Link } from "react-router-dom";
import Mapa from "../../assets/mapa.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name) newErrors.name = "Nome é obrigatório";
    if (!formData.phone) newErrors.phone = "Telefone é obrigatório";
    if (!formData.message) newErrors.message = "Mensagem é obrigatória";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Formulário enviado com sucesso!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    }
  };

  const handleMapClick = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Avenida+Paulo+Erlei+Alves+Abrantes,+1110+-+Tr%C3%AAs+Po%C3%A7os,+Volta+Redonda,+RJ+-+CEP:+27240-560",
      "_blank"
    );
  };

  return (
    <main>
      <section>
        <div className="bg-gradient-to-b from-faixa1 to-faixa2 w-full h-auto px-6 tablet:px-20">
          <h3 className="text-primary uppercase text-1xl pt-8 text-left ml-8">tire sua duvida</h3>
          <h2 className="text-primary uppercase text-2xl font-bold text-left ml-8 pb-8 font-quantico">Nosso Contato</h2>
        </div>

      </section>

      <section className="bg-primary flex flex-col justify-center p-16 tablet:flex-row">
        <article className="bg-gradient-to-b from-faixa1 to-faixa2 text-branco h-[30vh] w-auto text-center flex flex-col justify-evenly rounded-md tablet:w-1/2 tablet:h-[45vh] laptop:h-[60vh] laptop:w-1/3">
          <h2 className="font-quantico font-bold text-2xl">Tire Suas Dúvidas</h2>
          <p>contato@grtengenharia.com.br</p>
          <p>
            +55 24 3350-1815
            <br />
            +55 24 98141-7949
          </p>
          <div className="flex justify-center">
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
          </div>
        </article>

        <form
          onSubmit={handleSubmit}
          className="bg-branco h-auto w-auto rounded-md flex flex-col justify-evenly tablet:w-1/2 laptop:w-[30%]"
        >
          <div className="flex flex-col p-2">
            <div className="p-2">
              <label>Nome:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-primary rounded-md w-full placeholder:pl-2"
                placeholder="Seu Nome"
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="p-2">
              <label>Telefone:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-primary rounded-md w-full placeholder:pl-2"
                placeholder="(24) 99999-9999"
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
          </div>

          <div className="px-4">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-primary rounded-md w-full placeholder:pl-2 flex"
              placeholder="Contato@gmail.com"
            />
          </div>

          <div className="px-4 p-2">
            <label>Mensagem:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-primary rounded-md placeholder:pl-2 h-[15vh] w-full flex"
              placeholder="O que você precisa?"
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button
            type="submit"
            className="h-[5vh] w-[80%] my-4 mx-8 bg-gradient-to-t from-faixa to-faixa2 text-branco rounded-md hover:scale-110"
          >
            Enviar Mensagem
          </button>
        </form>
      </section>

      <section className="bg-gradient-to-b from-faixa1 to-faixa2 text-branco h-auto flex flex-col items-center justify-center py-[5vh]">
        <h2 className="text-3xl font-semibold font-quantico text-center mb-6">
          Nossa Localização
        </h2>

        <div className="w-full max-w-screen-lg flex flex-col laptop:flex-row items-center justify-center gap-6 text-nowrap px-8">
          {/* Link apenas na imagem */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Avenida+Paulo+Erlei+Alves+Abrantes,+1110,+Três+Poços,+Volta+Redonda,+RJ"
            target="_blank"
            rel="noopener noreferrer"
            className="laptop:w-1/2 w-full flex justify-center"
          >
            <img
              src={Mapa}
              alt="Mapa da localização da empresa"
              className="w-full rounded-sm cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </a>


          {/* Link separado para o endereço */}
          <div className="text-center laptop:text-left">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Avenida+Paulo+Erlei+Alves+Abrantes,+1110,+Três+Poços,+Volta+Redonda,+RJ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <p className="text-lg font-medium">
                Avenida Paulo Erlei Alves Abrantes, 1110
              </p>
              <p className="text-lg">Três Poços, Volta Redonda, RJ</p>
              <p className="text-lg">CEP: 27240-560</p>
            </a>
          </div>
        </div>
      </section>


    </main>
  );
}

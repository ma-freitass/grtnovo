import { useState } from "react";
import Whatsapp from "../../assets/whatsapp.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";

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
      <section className="bg-gradient-to-r from-faixa1 to-faixa2 text-primary h-[10vh] flex flex-col justify-center">
        <h2 className="uppercase text-subtitulos pl-[8vw]">
          entre em contato conosco
        </h2>
        <h1 className="pl-[8vw] text-5xl font-semibold">Nosso Contato</h1>
      </section>

      <section className="bg-primary flex justify-center p-16">
        <article className="bg-gradient-to-b from-faixa1 to-faixa2 text-branco h-[50vh] w-[15vw] text-center flex flex-col justify-evenly rounded-md">
          <h2>Tire Suas Dúvidas</h2>
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
          className="bg-branco h-[50vh] w-[30vw] rounded-md flex flex-col justify-evenly px-[2vw]"
        >
          <div className="flex">
            <div>
              <label>Nome:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-primary rounded-md w-[13vw] placeholder:pl-2"
                placeholder="Seu Nome"
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div>
              <label>Telefone:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-primary rounded-md w-auto placeholder:pl-2"
                placeholder="(24) 99999-9999"
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-primary rounded-md w-[24vw] placeholder:pl-2 flex"
              placeholder="Contato@gmail.com"
            />
          </div>

          <div className="">
            <label>Mensagem:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-primary rounded-md placeholder:pl-2 h-[15vh] w-[24vw] flex"
              placeholder="O que você precisa?"
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button
            type="submit"
            className="h-[5vh] w-[10vw] bg-gradient-to-t from-faixa to-faixa2 text-branco rounded-md hover:h-[7vh] hover:w-[12vw]"
          >
            Enviar Mensagem
          </button>
        </form>
      </section>

      <section className="bg-gradient-to-b from-faixa1 to-faixa2 text-branco h-[55vh]">
        <h2 className=" pl-[8vw] py-[5vh] text-3xl font-semibold">
          Nossa Localização
        </h2>
        <div className="flex justify-evenly items-center">
          <img
            src={`https://maps.googleapis.com/maps/api/staticmap?center=Avenida+Paulo+Erlei+Alves+Abrantes,+1110+-+Tr%C3%AAs+Po%C3%A7os,+Volta+Redonda,+RJ&zoom=15&size=700x450&maptype=roadmap&markers=color:red%7Clabel:C%7CAvenida+Paulo+Erlei+Alves+Abrantes,+1110+-+Tr%C3%AAs+Po%C3%A7os,+Volta+Redonda,+RJ&key=AIzaSyC7UMT73Vwz_Z8jWqz6nFuZyUbBT6ChShs`}
            alt="Mapa da localização da empresa"
            className="h-[35vh] w-[30vw]"
            onClick={handleMapClick}
            style={{ cursor: "pointer" }}
          ></img>
          <div className="text-center">
            <p> Avenida Paulo Erlei Alves Abrantes, 1110</p>
            <p>Três Poços, Volta Redonda, RJ</p>
            <p>CEP: 27240-560</p>
          </div>
        </div>
      </section>
    </main>
  );
}

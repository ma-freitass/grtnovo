import { useState } from "react";
import { motion } from "framer-motion";
import Whatsapp from "../../assets/whatsapp.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Mapa from "../../assets/mapa.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    location: "",
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
    if (!formData.company) newErrors.company = "Empresa é obrigatória";
    if (!formData.name) newErrors.name = "Responsável é obrigatório";
    if (!formData.phone) newErrors.phone = "Telefone é obrigatório";
    if (!formData.email) newErrors.email = "E-mail é obrigatório";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      e.target.submit();
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden">
      {/* Título do formulário */}
      <motion.section
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeIn}
      >
        <div className="bg-gradient-to-b from-faixa1 to-faixa2 w-full px-6 md:px-20">
          <h3 className="text-primary uppercase text-lg pt-8 text-left">tire sua dúvida ou</h3>
          <h2 className="text-primary uppercase text-2xl font-bold text-left pb-8 font-quantico">
            Solicite seu Orçamento
          </h2>
        </div>
      </motion.section>

      {/* Apresentação da proposta */}
      <motion.section
        className="font-quantico py-10 px-6 md:px-20 max-w-screen-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold mb-4 font-quantico text-center md:text-left">
          Transformamos demandas em soluções sob medida
        </h2>
        <p className="text-lg mb-6 text-justify">
          Nosso processo de orçamento é ágil, transparente e personalizado, para que você receba exatamente o que precisa — com a eficiência que sua operação exige.
        </p>
      </motion.section>

      {/* Informações sobre os diferenciais */}
      <div className="flex justify-center px-4">
        <motion.section
          className="bg-gradient-to-b from-faixa1 to-faixa2 text-primary text-center rounded-md p-6 w-full max-w-screen-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          variants={fadeIn}
        >
          <p className="text-2xl font-semibold mb-4">
            Solicite um orçamento sem compromisso e descubra como podemos contribuir para o sucesso do seu projeto.
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-left">
            <li>Atendimento personalizado e técnico</li>
            <li>Propostas detalhadas e com prazos claros</li>
            <li>Apoio para montagem de cronogramas e escopos</li>
            <li>Planos de locação sob medida: curto, médio e longo prazo</li>
          </ul>
        </motion.section>
      </div>

      {/* Formulário de orçamento */}
      <motion.section
        className="flex flex-col md:flex-row justify-center p-6 md:p-10 gap-8 w-full max-w-screen-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        variants={fadeIn}
      >
        <form
          onSubmit={handleSubmit}
          action="https://formsubmit.co/contato@grtengenharia.com.br"
          method="POST"
          className="bg-primary font-quantico rounded-md p-6 w-full md:w-1/2 space-y-4"
        >
          <input type="hidden" name="_captcha" value="false" />
          {[
            { label: "Nome da empresa:", name: "company", placeholder: "Nome da empresa" },
            { label: "Responsável pelo contato:", name: "name", placeholder: "Seu nome" },
            { label: "Telefone:", name: "phone", placeholder: "(24) 99999-9999" },
            { label: "E-mail:", name: "email", placeholder: "contato@email.com" },
            { label: "Local do serviço:", name: "location", placeholder: "Cidade, estado, etc." },
          ].map(({ label, name, placeholder }) => (
            <div key={name}>
              <label>{label}</label>
              <input
                type={name === "email" ? "email" : "text"}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full rounded-md text-black p-2"
                placeholder={placeholder}
              />
              {errors[name] && <span className="text-red-400">{errors[name]}</span>}
            </div>
          ))}

          <div>
            <label>Tipo de serviço desejado:</label>
            <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full rounded-md text-black p-2">
              <option value="">Selecione</option>
              <option value="Locação de equipamentos">Locação de equipamentos</option>
              <option value="Terraplenagem">Terraplenagem</option>
              <option value="Consultoria técnica">Consultoria técnica</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <div>
            <label>Observações adicionais:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-32 rounded-md text-black p-2"
              placeholder="Descreva o que precisa, datas, quantidade, etc."
            />
          </div>

          <button type="submit" className="bg-faixa2 hover:bg-faixa text-primary py-2 px-4 rounded-md transition-transform hover:scale-105">
            Solicitar Orçamento
          </button>
        </form>
      </motion.section>

      {/* Informações de contato e redes sociais */}
      <motion.section
        className="bg-primary flex flex-col md:flex-row justify-center items-center gap-8 p-6 md:p-16 w-full text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        variants={fadeIn}
      >
        <article className="bg-gradient-to-b from-faixa1 to-faixa2 rounded-md p-6 w-full md:max-w-md flex flex-col items-center gap-4 text-primary">
          <h2 className="font-quantico font-bold text-2xl">Fale Conosco – Estamos prontos para atender você.</h2>
          <p>contato@grtengenharia.com.br</p>
          <p>
            +55 24 3350-1815<br />
            +55 24 98141-7949
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://www.instagram.com/grt.engenharia/" target="_blank">
              <img src={Instagram} alt="Instagram" className="w-6 h-6 hover:bg-faixa2 rounded-md" />
            </a>
            <a href="https://wa.me/5524981417949" target="_blank">
              <img src={Whatsapp} alt="Whatsapp" className="w-6 h-6 hover:bg-faixa2 rounded-md" />
            </a>
            <a href="https://www.linkedin.com/company/grtengenharia-grt/" target="_blank">
              <img src={Linkedin} alt="Linkedin" className="w-6 h-6 hover:bg-faixa2 rounded-md" />
            </a>
          </div>
        </article>
      </motion.section>

      {/* Mapa de localização */}
      <motion.section
        className="bg-gradient-to-b from-faixa1 to-faixa2 text-primary py-10 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-semibold font-quantico text-center mb-6">Nossa Localização</h2>
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center px-6 max-w-screen-lg mx-auto">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Avenida+Paulo+Erlei+Alves+Abrantes,+1110,+Três+Poços,+Volta+Redonda,+RJ"
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 lg:w-1/2"
          >
            <img src={Mapa} alt="Mapa" className="w-full rounded-sm cursor-pointer transition-transform hover:scale-105" />
          </a>
          <div className="text-center lg:text-left">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Avenida+Paulo+Erlei+Alves+Abrantes,+1110,+Três+Poços,+Volta+Redonda,+RJ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <p className="text-lg font-medium">Avenida Paulo Erlei Alves Abrantes, 1110</p>
              <p className="text-lg">Três Poços, Volta Redonda, RJ</p>
              <p className="text-lg">CEP: 27240-560</p>
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

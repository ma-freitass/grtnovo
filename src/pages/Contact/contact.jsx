import { useState } from "react";
import { motion } from "framer-motion"
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
      e.target.submit(); // envia o formulário
    }
  };


  return (
    <main>
      <section>
        <motion.div initial={{ opacity: 0, x: -100 }} // Estado inicial oculto
          whileInView={{ opacity: 1, x: 0 }} // Animação de entrada
          transition={{ duration: 0.5 }} className="bg-gradient-to-b from-faixa1 to-faixa2 w-full h-auto px-6 tablet:px-20">
          <h3 className="text-primary uppercase text-1xl pt-8 text-left ml-8">tire sua duvida ou</h3>
          <h2 className="text-primary uppercase text-2xl font-bold text-left ml-8 pb-8 font-quantico">Solicite seu orçamento</h2>
        </motion.div>

      </section>
      <section className="bg-primary py-10 px-6 tablet:px-20">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold mb-4 font-quantico">Transformamos demandas em soluções sob medida</h2>
          <p className="text-lg mb-6">Na GRT Engenharia e Locações, transformamos demandas em soluções sob medida. Nosso processo de orçamento é ágil, transparente e personalizado, para que você receba exatamente o que precisa — com a eficiência que sua operação exige.</p>

        </motion.div>
      </section>


      <motion.section className="bg-primary flex flex-col justify-center  p-16 tablet:flex-row">
        <motion.article initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-gradient-to-b from-faixa1 to-faixa2 text-branco h-[30vh] w-auto text-center flex flex-col justify-evenly rounded-md tablet:w-1/2 tablet:h-[45vh] laptop:h-auto laptop:w-1/2">
          <h2 className="font-quantico font-bold text-2xl">Tire suas dúvidas</h2>
          <p>contato@grtengenharia.com.br</p>
          <p>
            +55 24 99865-1115
          </p>
          <div className="flex justify-center">
            <a href="https://www.instagram.com/grt.engenharia/" target="_blank">
              <img
                src={Instagram}
                alt="Logo Instagram"
                className="w-6 h-6 mx-4 hover:bg-faixa2 rounded-md"
              />
            </a>
            <a href="https://wa.me/5524998651115" target="_blank">
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
        </motion.article>

        <motion.form initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          action="https://formsubmit.co/contato@grtengenharia.com.br"
          method="POST"
          className="bg-branco h-auto w-auto rounded-md flex flex-col justify-evenly tablet:w-1/2 laptop:w-[40%]"
        >
          <input type="hidden" name="_captcha" value="false" />
          <div className="flex flex-col p-2">
            <div className="p-2">
              <label>Nome da empresa:</label>
              <input
                type="text" name="company" value={formData.company} onChange={handleChange}
                className="bg-primary rounded-md w-full placeholder:pl-2"
                placeholder="Nome da Empresa"
              />
              {errors.company && <span className="error">{errors.company}</span>}
            </div>

            <div className="p-2">
              <label>Responsável pelo contato:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange}
                className="bg-primary rounded-md w-full placeholder:pl-2"
                placeholder="Seu nome"
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
          </div>

          <div className="px-4">
            <label>Telefone:</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange}
              className="bg-primary rounded-md w-full placeholder:pl-2 flex"
              placeholder="(24) 99999-9999"
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="px-4 p-2">
            <label>E-mail:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="bg-primary rounded-md w-full placeholder:pl-2 flex"placeholder="contato@email.com" />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="px-4 p-2">
            <label>Tipo de serviço desejado:</label>
            <select name="serviceType" value={formData.serviceType} onChange={handleChange} className=" bg-primary w-full rounded-md text-faixa3 py-2">
              <option value="">Selecione</option>
              <option value="Locação de equipamentos">Locação de equipamentos</option>
              <option value="Terraplenagem">Terraplenagem</option>
              <option value="Consultoria técnica">Consultoria técnica</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
          <div className="px-4 p-2">
            <label>Local do serviço:</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange}  placeholder="Cidade, estado, etc." className="bg-primary rounded-md w-full placeholder:pl-2 flex" />
            
          </div>
          <div className="px-4 p-2">
            <label>Observações adicionais:</label>
            <textarea name="message" value={formData.message} onChange={handleChange}  placeholder="Descreva o que precisa, datas, quantidade, etc."  className="bg-primary rounded-md w-full placeholder:pl-2 flex h-32" />
            
          </div>

          <button
            type="submit"
            className="h-[5vh] w-[80%] my-4 mx-8 bg-gradient-to-t from-faixa to-faixa2 text-branco rounded-md hover:scale-110"
          >
            Solicitar Orçamento
          </button>
        </motion.form>
      </motion.section>

      
     

     

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-gradient-to-b from-faixa1 to-faixa2 text-branco h-auto flex flex-col items-center justify-center py-[5vh]">
        <h2 className="text-3xl font-semibold font-quantico text-center mb-6">
          Nossa Localização
        </h2>

        <motion.div className="w-full max-w-screen-lg flex flex-col laptop:flex-row items-center justify-center gap-6 text-nowrap px-8">
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
          <motion.div className="text-center laptop:text-left">
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
          </motion.div>
        </motion.div>
      </motion.section>


    </main>
  );
}

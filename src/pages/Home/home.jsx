import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import Fundo from "../../assets/fundo.jpg"
import Escavadeira from "../../assets/escavadeira.jpg"
import Equipamentos from "../../assets/equipamentos.jpg"
import Carga from "../../assets/carga.jpg"
import Atuacao from "../../assets/atuacao.png"
import BBR from "../../assets/bbr.png"
import CBSI from "../../assets/cbsi.png"
import Citrino from "../../assets/citrino.png"
import Engeko from "../../assets/engeko.png"
import MBP from "../../assets/mbp.png"
import SG from "../../assets/sg.png"
import Final from "../../assets/final.png"
import WhatsappIcon from "../../assets/whats.png"
import CarouselFull from "../../components/Carousel/carousselFull";
import Img24 from "../../assets/img24.jpg";
import Img25 from "../../assets/img25.jpg";
import Img26 from "../../assets/img26.jpg";
import Img27 from "../../assets/img27.jpg";
import Img28 from "../../assets/img28.jpg";
import Img29 from "../../assets/img29.jpg";
import Img30 from "../../assets/img30.jpg";
import Img31 from "../../assets/img31.jpg";
import Img32 from "../../assets/img32.jpg";
import Img33 from "../../assets/img33.jpg";
import Img34 from "../../assets/img34.jpg";
import Img35 from "../../assets/img35.jpg";
import Img36 from "../../assets/img36.jpg";
import Img37 from "../../assets/img37.jpg";
import Img38 from "../../assets/img38.jpg";


import Img13 from "../../assets/img13.jpg"
import Img18 from "../../assets/img18.jpg"
import Img19 from "../../assets/img19.jpg"
const imagens = [
     Img24, Img25, Img26, Img27, Img28, Img29, Img30, Img31,
    Img32, Img33, Img34, Img35, Img36, Img37, Img38, Img13, Img18, Img19
];

export default function Home() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } }
    };

    const scaleIn = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 1, delay: 0.5 } }
    };

    return (
        <main>
             <section>
        <motion.img
          className="h-[40%] w-full pb-7"
          src={Fundo}
          alt="Equipamentos"
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </section>

      <CarouselFull images={imagens} />
            <motion.section variants={scaleIn} initial="hidden" whileInView="visible" animate="visible" id="servicos" >
                <div className="bg-primary">

                <h1 className="text-3xl font-bold text-center py-6 font-quantico">Conheça nossos serviços</h1>
                <p className="text-xl text-center py-6">Contamos com uma frota moderna e diversificada, equipada com tecnologia de ponta e operada por profissionais altamente capacitados, prontos para atender com eficiência e segurança às demandas dos setores de construção, movimentação de cargas e materiais, transportes e terraplanagem.</p>
                </div>
                <div className="flex flex-col justify-center p-2 mx-10 laptop:flex-row">
                    <div>

                        <Link to="/portifolio#escavacao">
                            <motion.img
                                className="w-[90%] h-42 object-cover rounded-md m-6 items-center hover:scale-110 cursor-pointer"
                                src={Escavadeira}
                                alt=""
                                initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                                whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            />
                        </Link>
                        <div>

                            <p className="text-lg font-bold text-left ml-6">Realizamos escavação, carga, transporte e acondicionamento de diversos materiais, garantindo eficiência e segurança em cada etapa do processo. </p>
                            <p className="text-lg font-bold text-left ml-6">Materiais que trabalhamos:</p>

                            <ul className="text-lg font-bold list-disc ml-10 pl-4 space-y-1">
                                <li>• Minério;</li>
                                <li>• Carvão;</li>
                                <li>• Escória;</li>
                                <li>• Solo de 1ª, 2ª e 3ª categoria</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <Link to="/portifolio#aluguel">
                            <motion.img
                                className="w-[90%] h-42 object-cover rounded-md m-6 items-center hover:scale-110 cursor-pointer" src={Equipamentos} alt="" initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                                whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
                                transition={{ duration: 1.5, ease: "easeOut" }} />
                        </Link>
                        <p className="text-lg font-bold text-left ml-6">Aluguel de máquinas e equipamentos, mas não se limitando a:</p>
                        <div>
                            <p className="text-lg font-bold text-left ml-6">Equipamentos para Movimentação e Transporte:</p>

                            <ul className="text-lg font-bold list-disc ml-10 pl-4 space-y-1">
                                <li>• Caminhões Munck</li>
                                <li>• Caminhões basculantes;</li>
                                <li>• Caminhões carroceria;</li>

                            </ul>
                        </div>
                        <div>
                            <p className="text-lg font-bold text-left ml-6">Equipamentos para Terraplanagem e Construção:</p>

                            <ul className="text-lg font-bold list-disc ml-10 pl-4 space-y-1">
                                <li>• Escavadeira hidráulica;</li>
                                <li>• Retroescavadeira;</li>
                                <li>• Pá carregadeira;</li>
                                <li>• Trator de esteira;</li>
                                <li>• Trator agrícola;</li>
                                <li>• Motoniveladora;</li>
                                <li>• Rolo compactador;</li>
                                <li>• Manipulador telescópico;</li>

                            </ul>
                        </div>
                        <div>
                            <p className="text-lg font-bold text-left ml-6">Equipamentos Especiais:</p>

                            <ul className="text-lg font-bold list-disc ml-10 pl-4 space-y-1">
                                <li>• Perfuratriz hidráulica;</li>
                                <li>• Rompedor hidráulico;</li>
                                <li>• Tesoura hidráulica;</li>
                                <li>• Pulverizador hidráulico.</li>

                            </ul>
                        </div>
                    </div>
                    <div>
                        <Link to="/portifolio#movimentacao">
                            <motion.img
                                className="w-[90%] h-42 object-cover rounded-md m-6 items-center hover:scale-110 cursor-pointer" src={Carga} alt="" initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                                whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
                                transition={{ duration: 1.5, ease: "easeOut" }} />
                        </Link>
                        <p className="text-lg font-bold text-left ml-6">- Movimentação de carga</p>
                        <div>
                            <p className="text-lg font-bold text-left ml-6">Precisa transportar, içar ou movimentar cargas pesadas com segurança e eficiência? </p>

                            <ul className="text-lg font-bold list-disc ml-10 pl-4 space-y-1">
                                <li>• Içamento e remoção de equipamentos</li>
                                <li>• Transporte e movimentação de máquinas industriais</li>
                                <li>• Montagem e desmontagem de estruturas metálicas</li>
                                <li>• Atendimento para indústrias, construção civil e agronegócio</li>

                            </ul>
                        </div>
                    </div>
                </div>
                <motion.section variants={scaleIn} initial="hidden" whileInView="visible" animate="visible" id="servicos" className="bg-primary">
                    <h1 className="text-3xl font-bold text-center py-6 font-quantico">Compromisso com a Excelência</h1>
                    <p className="text-xl text-center py-6">Nosso compromisso é fornecer soluções eficientes e personalizadas, por meio de equipamentos modernos e uma equipe altamente qualificada, atendendo com precisão às necessidades do seu projeto.
                        Asseguramos segurança, agilidade e qualidade em cada serviço prestado, sempre seguindo os mais altos padrões técnicos e operacionais.
                    </p>
                </motion.section>
            </motion.section>
            <motion.section className="bg-gradient-to-b from-faixa1 to-faixa2 h-auto my-10 flex flex-col justify-center items-center" initial="hidden" whileInView="visible" variants={fadeInUp}>

                <h2 className="text-4xl font-quantico font-bold text-center text-primary pt-10 text-nowrap">Áreas de atuação</h2>
                <div className="flex flex-col h-auto p-10 gap-10 justify-center items-center laptop:flex-row" >

                    <motion.div className=" max-laptop:w-full flex flex-col justify-center items-center" variants={fadeInUp}>

                        <motion.div className="w-2/3 max-laptop:w-full flex justify-center" variants={fadeIn}>

                            <img className=" h-auto object-cover rounded-md mb-10" src={Atuacao} alt="Máquina carregando um caminhão" />
                        </motion.div>

                        <p className="text-lg text-left ml-6 leading-8 text-primary">A <span className="font-bold text-xl">GRT ENGENHARIA E LOCAÇÕES</span> é especialistas na locação de equipamentos de médio e grande porte e na prestação de serviços para os setores de movimentação de cargas, transporte, serviços industriais, terraplenagem e pavimentação. Com uma frota moderna e uma equipe altamente qualificada, garantimos soluções seguras, eficientes e adaptadas às necessidades de cada projeto.</p>
                        <p className="text-lg text-left ml-6 leading-8 text-primary">Nossos serviços incluem:</p>
                        <ul className="text-lg text-left ml-12 text-wrap mr-5 text-primary">
                            <li>✔ Movimentação de cargas – Transporte e içamento de containers e equipamentos com segurança e precisão. </li>
                            <li>✔ Movimentação industrial, escavação, carga e transporte de materiais – Manuseio e acondicionamento de minério, carvão, escória e solos de 1ª, 2ª e 3ª categoria.</li>
                            <li>✔ Transporte de resíduos de obra – Coleta e destinação correta de materiais das classes RDC, A, B, C, 2A e 2B.</li>
                            <li>✔ Transporte e abastecimento – Fornecimento de combustíveis e lubrificantes para operações industriais e de campo.</li>
                            <li>✔ Demolições de grande porte – Remoção segura e controlada de estruturas robustas.</li>
                            <li>✔ Umidificação de vias e materiais – Redução de poeira e controle ambiental em obras e indústrias. </li>
                            <li>✔ Limpeza industrial – Serviços completos de higienização e manutenção de áreas industriais.
                                Nosso compromisso é oferecer segurança, qualidade e produtividade, sempre alinhados às melhores práticas do setor.</li>

                        </ul>
                        <Link to="/portifolio">
                            <motion.button
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                animate="visible"
                                className="bg-primary px-4 py-4 rounded-lg mx-4 my-6 font-bold"
                                onClick={() => window.scrollTo(0, 0)}
                            >
                                Conheça nosso portifólio ➔
                            </motion.button>
                        </Link>

                    </motion.div>
                </div>

            </motion.section>
            <motion.section initial="hidden" whileInView="visible" animate="visible" variants={fadeInUp}>
                <motion.h2 className="text-4xl font-bold text-center pt-6 ml-8 font-quantico tablet:text-5xl" variants={scaleIn} initial="hidden" whileInView="visible" animate="visible">Nossos Clientes</motion.h2>
                <motion.div className="w-[355vw] max-laptop:w-[680vw] h-auto p-6 flex gap-10 animate-slide whitespace-nowrap justify-center" variants={scaleIn} initial="hidden" whileInView="visible" animate="visible">
                    <div className="w-[300%]">

                        <img src={SG} alt="" />
                    </div>
                    <div className="w-[300%]">
                        <img src={Engeko} alt="" />
                    </div>
                    <div className="w-[300%]">
                        <img src={CBSI} alt="" />
                    </div>
                    <div className="w-[300%]">
                        <img src={MBP} alt="" />
                    </div>
                    <div className="w-[300%]">
                        <img src={Citrino} alt="" />
                    </div>
                    <div className="w-[300%]">
                        <img src={BBR} alt="" />
                    </div>
                    <div className="w-[300%]">

                        <img src={SG} alt="" />
                    </div>
                    <div className="w-[300%]">
                        <img src={Engeko} alt="" />
                    </div>
                    <div className="w-[300%]">
                        <img src={CBSI} alt="" />
                    </div>
                    <div className="w-[300%]">
                        <img src={MBP} alt="" />
                    </div>
                    <div className="w-[300%]">
                        <img src={Citrino} alt="" />
                    </div>
                    <div className="w-[300%]">
                        <img src={BBR} alt="" />
                    </div>
                    <div className="w-[300%]">

                        <img src={SG} alt="" />
                    </div>
                    <div className="w-[300%]">
                        <img src={Engeko} alt="" />
                    </div>
                    <div className="w-[300%]">
                        <img src={CBSI} alt="" />
                    </div>
                    <div className="w-[300%]">
                        <img src={MBP} alt="" />
                    </div>
                    <div className="w-[300%]">
                        <img src={Citrino} alt="" />
                    </div>
                    <div className="w-[300%]">
                        <img src={BBR} alt="" />
                    </div>
                </motion.div>
            </motion.section>
            <motion.section initial="hidden" whileInView="visible" animate="visible" variants={fadeInUp}>
                <motion.div className="flex flex-row max-laptop:flex-col bg-gradient-to-b from-faixa1 to-faixa2 py-10 w-full" variants={fadeInUp} initial="hidden" whileInView="visible" animate="visible">

                    <motion.img className="rounded-xl my-6 mx-8 object-cover w-1/2 max-laptop:w-full h-auto justify-center" src={Final} alt="" variants={scaleIn} initial="hidden" whileInView="visible" animate="visible" />
                    <div className="w-full h-auto place-content-center">

                        <motion.h2 className="text-4xl font-quantico font-bold text-left text-primary pt-6 ml-8" variants={fadeInUp} initial="hidden" whileInView="visible" animate="visible">Faça seu orçamento!</motion.h2>
                        <motion.p className="text-lg text-left ml-6 leading-8 text-primary p-4" variants={scaleIn} initial="hidden" whileInView="visible" animate="visible">A GRT Engenharia e Locações está pronta para transformar seus desafios em soluções. Entre em contato conosco e descubra como podemos ajudar você a alcançar o sucesso em seus projetos com qualidade, segurança e eficiência.</motion.p>
                        <Link to="/contact">
                            <motion.button
                                className="bg-primary px-20 py-4 rounded-lg ml-20 my-6 font-bold"
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                animate="visible"
                                onClick={() => window.scrollTo(0, 0)}
                            >
                                Fale conosco ➔
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </motion.section>
            <a
                href="https://wa.me/5524981417949"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-2 right-2 z-50 tablet:bottom-6 tablet:right-6 tablet:p-3 hover:scale-110 transition duration-300"
            >
                <img src={WhatsappIcon} alt="WhatsApp" className="size-20" />
            </a>
        </main>
    );
}
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



export default function Home() {
    const scrollToSection = (id) => {
        console.log(`Scrolling to section: ${id}`);
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        } else {
            console.warn(`Elemento com ID '${id}' não encontrado`);
        }
    };
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
                <div>
                    <motion.img
                        className="h-[40%] w-[100%] pb-7"
                        src={Fundo}
                        alt="Equipamentos"
                        initial={{ clipPath: "inset(100% 0 0 0)" }}
                        animate={{ clipPath: "inset(0% 0 0 0)" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                </div>
            </section>
            <motion.section variants={scaleIn} initial="hidden" whileInView="visible" animate="visible" id="servicos">
                <h1 className="text-3xl font-bold text-center py-8 font-quantico">Conheça nossos serviços</h1>
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

                        <p className="text-lg font-bold text-left ml-6">- Escavação </p>
                        <p className="text-lg font-bold text-left ml-6">- Carga</p>
                        <p className="text-lg font-bold text-left ml-6">- Transporte e acondicionamento de materiais</p>
                        <ul className="text-lg font-bold flex space-x-3 ml-20 ">
                            <li>• Minério</li>
                            <li>• Carvão</li>
                            <li>• Escória</li>
                        </ul>
                    </div>
                    <div>
                        <Link to="/portifolio#aluguel">
                            <motion.img
                                className="w-[90%] h-42 object-cover rounded-md m-6 items-center hover:scale-110 cursor-pointer" src={Equipamentos} alt="" initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                                whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
                                transition={{ duration: 1.5, ease: "easeOut" }} />
                        </Link>
                        <p className="text-lg font-bold text-left ml-6">- Aluguel de máquinas e equipamentos</p>
                    </div>
                    <div>
                        <Link to="/portifolio#movimentacao">
                            <motion.img
                                className="w-[90%] h-42 object-cover rounded-md m-6 items-center hover:scale-110 cursor-pointer" src={Carga} alt="" initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                                whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
                                transition={{ duration: 1.5, ease: "easeOut" }} />
                        </Link>
                        <p className="text-lg font-bold text-left ml-6">- Movimentação de carga</p>
                    </div>
                </div>
            </motion.section>
            <motion.section className="bg-gradient-to-b from-faixa1 to-faixa2 h-auto my-10 flex flex-col justify-center items-center" initial="hidden" whileInView="visible" variants={fadeInUp}>

                <h2 className="text-4xl font-quantico font-bold text-center text-primary pt-10 text-nowrap">Áreas de atuação</h2>
                <div className="flex flex-col h-auto p-10 gap-10 justify-center items-center laptop:flex-row" >
                    <motion.div className="w-2/5 max-laptop:w-full flex justify-center items-center" variants={fadeIn}>

                        <img className="w-[70vw] h-auto object-cover rounded-md" src={Atuacao} alt="Máquina carregando um caminhão" />
                    </motion.div>
                    <motion.div className="w-1/3 max-laptop:w-full flex flex-col justify-center items-start" variants={fadeInUp}>

                        <p className="text-lg text-left ml-6 leading-8 text-primary">A <span className="font-bold text-2xl">GRT ENGENHARIA E LOCAÇÕES</span> possui cadastro na VALE e hoje estamos executando uma Subestação na unidade de Xerém/RJ.</p>
                        <ul className="text-lg text-left ml-12 text-wrap mr-5 text-primary">
                            <li>• Prestação de serviços com movimentação de cargas (Containers/ Equipamentos); </li>
                            <li>• Transporte de reíduos de obra - Classe RDC, A, B, C, 2A e 2B;</li>
                            <li>• Transporte e abastecimento de combustíveis e lubrificantes;</li>
                            <li>• Demolições de grande porte;</li>
                            <li>• Umidificação de vias e materiais;</li>
                            <li>• Limpeza industrial em geral. </li>
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
                        <motion.p className="text-lg text-left ml-6 leading-8 text-primary p-4" variants={scaleIn} initial="hidden" whileInView="visible" animate="visible">A GRT Engenharia está pronta para transformar seus desafios em soluções. Entre em contato conosco e descubra como podemos ajudar você a alcançar o sucesso em seus projetos com qualidade, segurança e eficiência.</motion.p>
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
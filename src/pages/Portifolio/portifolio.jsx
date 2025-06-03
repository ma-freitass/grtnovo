import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion"
import Portifolio from "../../assets/fundo.jpg"
import Caminhao from "../../assets/caminhao.jpg"
import Caminhao1 from "../../assets/caminhao1.jpg"
import Caminhao2 from "../../assets/caminhao2.jpg"
import Maquina from "../../assets/maquina.jpg"
import Maquina1 from "../../assets/maquina1.jpg"
import Pipa from "../../assets/pipa.jpg"
import Equip from "../../assets/equip.jpg"
import Carousel from "../../components/Carousel/carousel"
import Image from "../../assets/image.jpg"
import Image1 from "../../assets/image1.jpg"
import Image2 from "../../assets/image2.jpg"
import Image3 from "../../assets/image3.jpg"
import WhatsappIcon from "../../assets/whats.png"
import Equipamentos from "../../assets/equipamentos.jpg"


export default function Portilio() {
    const location = useLocation();

    useEffect(() => {
        const scrollToSection = () => {
            if (location.hash) {
                const id = location.hash.replace("#", "");
                const section = document.getElementById(id);
                if (section) {
                    setTimeout(() => {
                        const offset = 80;
                        const topPosition = section.getBoundingClientRect().top + window.scrollY - offset;
                        window.scrollTo({ top: topPosition, behavior: "smooth" });
                    }, 100);
                }
            }
        };

        scrollToSection();
    }, [location]);

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
                <motion.div initial={{ opacity: 0, x: -100 }} // 
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }} className="bg-gradient-to-b from-faixa1 to-faixa2 w-full h-auto px-6 tablet:px-20">
                    <h3 className="text-primary uppercase text-1xl pt-8 text-left ml-8">nossos serviços</h3>
                    <h2 className="text-primary uppercase text-2xl font-bold text-left ml-8 pb-8 font-quantico">Engenharia e Locações</h2>
                </motion.div>

            </section>
            <motion.section initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }
                }}>
                <motion.h2 variants={scaleIn} initial="hidden" whileInView="visible" animate="visible" className="text-3xl font-bold text-left ml-8 px-6 py-12 tablet:px-20 tablet:py-10 font-quantico">Projetos que geram resultados expressivos, com inovação, precisão e excelência operacional.</motion.h2>
                <motion.p variants={fadeIn} initial="hidden" whileInView="visible" animate="visible" className="text-2xl  text-left text-wrap  ml-8 px-8 tablet:px-20 mb-14">A GRT Engenharia e Locações atua com excelência na locação de equipamentos pesados para movimentação e transporte de cargas e materiais, com destaque para operações nos setores de mineração, siderurgia, infraestrutura e construção civil. Transportamos com segurança minério, carvão, escória e solos classificados de 1ª, 2ª e 3ª categorias.</motion.p>
                <motion.p variants={fadeIn} initial="hidden" whileInView="visible" animate="visible" className="text-2xl  text-left text-wrap  ml-8 px-8 tablet:px-20 mb-14">Nossa operação é sustentada por uma frota moderna, mantida com manutenção preventiva rigorosa, e por uma equipe técnica especializada, pronta para atender projetos de alta complexidade com soluções personalizadas. Trabalhamos com foco em eficiência, conformidade técnica e alto desempenho, garantindo entregas seguras, dentro do prazo e alinhadas às normas e exigências do mercado.</motion.p>
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" animate="visible">
                    <img className="w-full object-cover" src={Portifolio} alt="" />
                </motion.div>
            </motion.section>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" animate="visible">
                <motion.h2 variants={scaleIn} initial="hidden" whileInView="visible" animate="visible" className="text-3xl font-bold text-left ml-8 py-12 desktop:text-5xl font-quantico px-6 tablet:px-20 tablet:py-10 ">Descubra como podemos te ajudar!</motion.h2>
            </motion.div>
            <motion.section initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }
                }} id="aluguel" className="mx-auto px-6 py-12 flex flex-col laptop:flex-row items-center relative laptop:px-24 laptop:py-10">
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" animate="visible" className="w-full laptop:w-1/2 relative z-10">
                    <img src={Equipamentos} alt="Movimentação de cargas" className="w-full h-auto rounded-lg shadow-lg" />
                </motion.div>

                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" animate="visible" className="w-full laptop:w-1/2 relative z-10 laptop:pl-10 text-left laptop:text-left mt-6 laptop:mt-0 flex items-center">
                    <div>
                        <motion.h2 variants={scaleIn} initial="hidden" whileInView="visible" animate="visible" className="text-2xl font-bold text-primary font-quantico">
                            Aluguel de máquinas e equipamentos
                        </motion.h2>

                        <motion.p variants={fadeIn} initial="hidden" whileInView="visible" animate="visible" className="mt-4 text-lg text-primary">
                            Oferecemos um portfólio completo de máquinas pesadas e equipamentos operacionais atualizados, submetidos a rigorosas revisões e prontos para operação. Nossos planos de locação são flexíveis, com suporte técnico especializado e atendimento personalizado para projetos de curto ou longo prazo.

                        </motion.p>
                    </div>
                </motion.div>

                <div className="absolute right-0 top-0 h-full lg:w-[80%] w-full laptop:w-3/5 bg-gradient-to-b from-faixa1 to-faixa2 z-0"></div>


            </motion.section>
            <motion.section initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }
                }} id="movimentacao" className="mx-auto px-6 py-12 flex flex-col laptop:flex-row items-center relative laptop:px-24 laptop:py-10">
                <div className="w-full laptop:w-1/2 relative z-10">
                    <img src={Caminhao1} alt="Movimentação de cargas" className="w-full h-auto rounded-lg shadow-lg" />
                </div>


                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" animate="visible" className="w-full laptop:w-1/2 relative z-10 laptop:pl-10 text-left laptop:text-left mt-6 laptop:mt-0 flex items-center">
                    <div>
                        <motion.h2 variants={scaleIn} initial="hidden" whileInView="visible" animate="visible" className="text-2xl font-bold font-quantico">
                            Escavação, Carga, Transpote e acondicionamento de materiais:
                        </motion.h2>
                        <motion.p variants={fadeIn} initial="hidden" whileInView="visible" animate="visible" className="mt-4 text-lg">• Minério •  Carvão • Escória </motion.p>
                        <p className="mt-4 text-lg">
                            Executamos escavação e transporte de materiais a granel, como minério, carvão e escória, com rastreabilidade e conformidade técnica. Nosso foco é garantir logística eficiente, alto desempenho e redução de custos operacionais.


                        </p>

                    </div>
                </motion.div>


            </motion.section>
            <motion.section initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }
                }} id="escavacao" className="mx-auto px-6 py-12 flex flex-col laptop:flex-row items-center relative laptop:px-24 laptop:py-10 scroll-mt-28">
                <div className="w-full laptop:w-1/2 relative z-10">
                    <img src={Caminhao} alt="Movimentação de cargas" className="w-full h-auto rounded-lg shadow-lg" />
                </div>

                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" animate="visible" className="w-full laptop:w-1/2 relative z-10 laptop:pl-10 text-left laptop:text-left mt-6 laptop:mt-0 flex items-center">
                    <div>
                        <motion.h2 variants={scaleIn} initial="hidden" whileInView="visible" animate="visible"
                            className="text-2xl font-bold text-primary font-quantico">
                            Movimentação Técnica de Cargas
                        </motion.h2>
                        <motion.p variants={fadeIn} initial="hidden" whileInView="visible" animate="visible" className="mt-4 text-lg text-primary">
                            Realizamos movimentação técnica de cargas, incluindo içamento, transporte e posicionamento de equipamentos industriais. Contamos com profissionais certificados e estruturas sob medida para garantir segurança e precisão.



                        </motion.p>

                    </div>
                </motion.div>

                <div className="absolute right-0 top-0 h-full lg:w-[80%] w-full laptop:w-3/5 bg-gradient-to-b from-faixa1 to-faixa2 z-0"></div>


            </motion.section>
            <motion.section initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }
                }} className="mx-auto px-6 py-12 flex flex-col laptop:flex-row items-center relative laptop:px-24 laptop:py-10">
                <div className="w-full laptop:w-1/2 relative z-10">

                    <img src={Caminhao2} alt="Movimentação de cargas" className="w-full h-auto rounded-lg shadow-lg" />
                </div>


                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" animate="visible" className="w-full laptop:w-1/2 relative z-10 laptop:pl-10 text-left laptop:text-left mt-6 laptop:mt-0 flex items-center">
                    <div>
                        <motion.h2 variants={scaleIn} initial="hidden" whileInView="visible" animate="visible" className="text-2xl font-bold font-quantico">
                            Transporte e Destinação de Resíduos
                        </motion.h2>
                        <motion.p variants={fadeIn} initial="hidden" whileInView="visible" animate="visible" className="mt-4 text-lg">
                            Executamos transporte e destinação ambientalmente correta de resíduos, atendendo às exigências legais das classes RDC, A, B, C, 2A e 2B. Trabalhamos com logística rastreável, frotas licenciadas e processos padronizados.

                        </motion.p>
                    </div>
                </motion.div>


            </motion.section>
            <motion.section initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }
                }} className="mx-auto px-6 py-12 flex flex-col laptop:flex-row items-center relative laptop:px-24 laptop:py-10">
                <div className="w-full laptop:w-1/2 relative z-10">
                    <img src={Maquina} alt="Movimentação de cargas" className="w-full h-auto rounded-lg shadow-lg" />
                </div>

                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" animate="visible" className="w-full laptop:w-1/2 relative z-10 laptop:pl-10 text-left laptop:text-left mt-6 laptop:mt-0 flex items-center">
                    <div>
                        <motion.h2 variants={scaleIn} initial="hidden" whileInView="visible" animate="visible" className="text-2xl font-bold text-primary font-quantico">
                            Limpeza industrial
                        </motion.h2>

                        <motion.p variants={fadeIn} initial="hidden" whileInView="visible" animate="visible" className="mt-4 text-lg text-primary">
                            Oferecemos limpeza técnica e segura para ambientes industriais e canteiros de obra, utilizando equipamentos específicos para remoção de resíduos, entre outros. Garantimos produtividade, segurança e conservação dos ativos.
                        </motion.p>
                    </div>
                </motion.div>

                <div className="absolute right-0 top-0 h-full lg:w-[80%] w-full laptop:w-3/5 bg-gradient-to-b from-faixa1 to-faixa2 z-0"></div>


            </motion.section>
            <motion.section initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }
                }} className="mx-auto px-6 py-12 flex flex-col laptop:flex-row items-center relative laptop:px-24 laptop:py-10">
                <div className="w-full laptop:w-1/2 relative z-10">
                    <img src={Maquina1} alt="Movimentação de cargas" className="w-full h-auto rounded-lg shadow-lg" />
                </div>


                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" animate="visible" className="w-full laptop:w-1/2 relative z-10 laptop:pl-10 text-left laptop:text-left mt-6 laptop:mt-0 flex items-center">
                    <div>
                        <motion.h2 variants={scaleIn} initial="hidden" whileInView="visible" animate="visible" className="text-2xl font-bold font-quantico">
                            Demolições Técnicas de Grande Porte                        </motion.h2>
                        <motion.p variants={fadeIn} initial="hidden" whileInView="visible" animate="visible" className="mt-4 text-lg">
                           Executamos demolições em áreas industriais e comerciais com controle técnico e segurança, utilizando equipamentos modernos e métodos planejados que minimizam impactos.


                        </motion.p>
                    </div>
                </motion.div>


            </motion.section>

            <motion.section initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }
                }} className="mx-auto px-6 py-12 flex flex-col laptop:flex-row items-center relative laptop:px-24 laptop:py-10">
                <div className="w-full laptop:w-1/2 relative z-10">

                    <img src={Pipa} alt="Movimentação de cargas" className="w-full h-auto rounded-lg shadow-lg" />
                </div>


                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" animate="visible" className="w-full laptop:w-1/2 relative z-10 laptop:pl-10 text-left laptop:text-left mt-6 laptop:mt-0 flex items-center">
                    <div>
                        <motion.h2 variants={scaleIn} initial="hidden" whileInView="visible" animate="visible" className="text-2xl font-bold text-primary font-quantico">
                            Umidificação de Vias
                        </motion.h2>

                        <motion.p variants={fadeIn} initial="hidden" whileInView="visible" animate="visible" className="mt-4 text-lg text-primary">
                            Realizamos controle eficiente em vias e áreas operacionais, com técnicas otimizadas que promovem segurança, conformidade legal e preservação ambiental.
                        </motion.p>
                    </div>
                </motion.div>

                <div className="absolute right-0 top-0 h-full lg:w-[80%] w-full laptop:w-3/5 bg-gradient-to-b from-faixa1 to-faixa2 z-0"></div>


            </motion.section>

            <motion.section initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }
                }} className="mx-auto px-6 py-12 flex flex-col laptop:flex-row items-center relative laptop:px-24 laptop:py-10">
                <div className="w-full laptop:w-1/2 relative z-10">
                    <img src={Equip} alt="Movimentação de cargas" className="w-full h-auto rounded-lg shadow-lg" />
                </div>


                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" animate="visible" className="w-full laptop:w-1/2 relative z-10 laptop:pl-10 text-left laptop:text-left mt-6 laptop:mt-0 flex items-center">
                    <div>
                        <motion.h2 variants={scaleIn} initial="hidden" whileInView="visible" animate="visible" className="text-2xl font-bold font-quantico">
                            Transporte e abastecimento 
                        </motion.h2>

                        <motion.p variants={fadeIn} initial="hidden" whileInView="visible" animate="visible" className="mt-4 text-lg">
                            Transportamos e abastecemos combustíveis e lubrificantes com frota licenciada e controle operacional rigoroso, atendendo plantas industriais e obras com agilidade, segurança e foco na continuidade operacional.
                        </motion.p>
                    </div>
                </motion.div>


            </motion.section>
            <motion.section initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }
                }} className="bg-gradient-to-b from-faixa1 to-faixa2 w-full h-auto">
                <h3 className="text-2xl font-bold text-left text-wrap ml-8 pt-6 mr-32 text-primary h-24 tablet:px-20 tablet:py-10 font-quantico">Conheça também alguns de nossos equipamentos</h3>
                <Carousel />


            </motion.section>


            <motion.section initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }
                }}>
                <motion.h3 variants={scaleIn} initial="hidden" whileInView="visible" animate="visible" className="text-2xl font-bold text-left text-wrap ml-8 pt-6 mr-32 tablet:px-20 tablet:py-10 font-quantico">Nossa expertise,
                    seu sucesso:</motion.h3>
                <motion.h4 variants={fadeInUp} initial="hidden" whileInView="visible" animate="visible" className="text-2xl font-bold text-left text-wrap ml-8 mr-32 tablet:px-20 font-quantico">Soluções inteligentes para todos os projetos</motion.h4>
                <motion.p variants={fadeIn} initial="hidden" whileInView="visible" animate="visible" className="text-2xl  text-left pb-8 text-wrap mx-12 my-4 tablet:px-20 mb-14">Atendemos projetos de pequeno, médio e grande porte com soluções técnicas e logísticas sob medida, aliando economia, eficiência e inteligência operacional. Atuamos com agilidade em demandas emergenciais e planejadas.
                </motion.p>
            </motion.section>
            <motion.section initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }
                }} className="bg-gradient-to-b from-faixa1 to-faixa2 h-auto p-6 laptop:justify-center laptop:content-center self-center">
                <h3 className="text-2xl font-bold text-left text-wrap ml-8 pt-10 mr-32 text-primary mb-6 font-quantico tablet:px-20 tablet:py-6">Por que escolher a GRT Engenharia e Locações?</h3>
                <div className="flex flex-col justify-center items-center  content-center laptop:grid laptop:grid-cols-2   laptop:px-20">
                    <div className="relative">
                        <img className=" rounded-lg mt-6 w-96 tablet:w-[80%] laptop:w-[80%]" src={Image} alt="" />
                        <p className="text-sm text-left  text-primary absolute bottom-0 w-full pl-3 bg-gradient-to-tr from-faixa3/90 to-transparent text-nowrap tablet:text-2xl tablet:w-[80%] laptop:w-[80%] laptop:text-base">Experiência consolidada no mercado.</p>
                    </div>
                    <div className="relative">
                        <img className="rounded-lg mt-6 w-96 tablet:w-[80%] laptop:w-[80%]" src={Image1} alt="" />
                        <p className="text-sm text-right flex pl-2 text-primary absolute bottom-0 w-full bg-gradient-to-tr from-faixa3/95 to-transparent tablet:text-2xl tablet:w-[80%] tablet:text-nowrap laptop:w-[80%] laptop:text-base">Equipamentos de ponta e equipe especializada.</p>
                    </div>
                    <div className="relative">
                        <img className="r-20 rounded-lg mt-6 w-96 h-auto tablet:w-[80%] laptop:w-[80%]" src={Image3} alt="" />
                        <p className="text-sm  text-left text-wrap  text-primary pl-3 absolute bottom-0 w-full bg-gradient-to-tr from-faixa3/95 to-transparent  tablet:text-2xl tablet:w-[70%] tablet:text-nowrap laptop:w-[80%] laptop:text-base">Soluções personalizadas para cada cliente.
                        </p>
                    </div>
                    <div className="relative ">
                        <img className=" rounded-lg mt-6 w-96 tablet:w-[80%] laptop:w-[80%] " src={Image2} alt="" />
                        <p className="text-sm  text-right flex pl-3 text-primary absolute bottom-0 w-full bg-gradient-to-tr from-faixa3/95 to-transparent tablet:text-2xl tablet:w-[80%] tablet:text-nowrap laptop:w-[80%] laptop:text-base">Compromisso com prazos, qualidade e segurança.</p>
                    </div>
                </div>
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
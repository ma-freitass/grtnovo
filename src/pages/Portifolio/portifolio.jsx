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
                <motion.h2 variants={scaleIn} initial="hidden"    whileInView="visible" animate="visible" className="text-3xl font-bold text-left ml-8 px-6 py-12 tablet:px-20 tablet:py-10 font-quantico">Transformando projetos em realidade com inovação, precisão e compromisso com a excelência.</motion.h2>
                <motion.p variants={fadeIn} initial="hidden"    whileInView="visible" animate="visible" className="text-2xl  text-left text-wrap  ml-8 px-8 tablet:px-20 mb-14">A GRT Engenharia se destaca pela ampla experiência e expertise em serviços essenciais para o setor de construção civil, incluindo terraplenagem, transporte de materiais, infraestrutura e locação de equipamentos de alta performance.</motion.p>
                <motion.div variants={fadeInUp} initial="hidden"    whileInView="visible" animate="visible">
                    <img className="w-full object-cover" src={Portifolio} alt="" />
                </motion.div>
            </motion.section>
            <motion.div variants={fadeInUp} initial="hidden"    whileInView="visible" animate="visible">
                <motion.h2 variants={scaleIn} initial="hidden"    whileInView="visible" animate="visible"  className="text-3xl font-bold text-left ml-8 py-12 desktop:text-5xl font-quantico px-6 tablet:px-20 tablet:py-10 ">Descubra como podemos te ajudar!</motion.h2>
            </motion.div>
            <motion.section initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }
                }} id="aluguel" className="mx-auto px-6 py-12 flex flex-col laptop:flex-row items-center relative laptop:px-24 laptop:py-10">
                <motion.div variants={fadeInUp} initial="hidden"    whileInView="visible" animate="visible" className="w-full laptop:w-1/2 relative z-10">
                    <img src={Equipamentos} alt="Movimentação de cargas" className="w-full h-auto rounded-lg shadow-lg" />
                </motion.div>

                <motion.div variants={fadeInUp} initial="hidden"    whileInView="visible" animate="visible" className="w-full laptop:w-1/2 relative z-10 laptop:pl-10 text-left laptop:text-left mt-6 laptop:mt-0 flex items-center">
                    <div>
                        <motion.h2 variants={scaleIn} initial="hidden"    whileInView="visible" animate="visible"  className="text-2xl font-bold text-primary font-quantico">
                            Aluguel de máquinas e equipamentos
                        </motion.h2>

                        <motion.p variants={fadeIn} initial="hidden"    whileInView="visible" animate="visible" className="mt-4 text-lg text-primary">
                            Oferecemos soluções completas em aluguel de máquinas e equipamentos para construção civil, infraestrutura e projetos industriais. Nosso portfólio inclui escavadeiras, retroescavadeiras, caminhões basculantes, motoniveladoras e diversas outras máquinas de alta performance, garantindo eficiência e produtividade para sua obra. Trabalhamos com equipamentos modernos, rigorosamente revisados e prontos para operar com segurança e confiabilidade. Seja para curto ou longo prazo, disponibilizamos opções flexíveis de locação, atendendo às necessidades específicas de cada cliente com excelência e suporte técnico especializado.
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
                    <img src={Caminhao} alt="Movimentação de cargas" className="w-full h-auto rounded-lg shadow-lg" />
                </div>


                <motion.div variants={fadeInUp} initial="hidden"    whileInView="visible" animate="visible" className="w-full laptop:w-1/2 relative z-10 laptop:pl-10 text-left laptop:text-left mt-6 laptop:mt-0 flex items-center">
                    <div>
                        <motion.h2 variants={scaleIn} initial="hidden"    whileInView="visible" animate="visible"  className="text-2xl font-bold font-quantico">
                            Prestação de serviços com movimentação de cargas (Containers/ Equipamentos)
                        </motion.h2>
                        <motion.p variants={fadeIn} initial="hidden"    whileInView="visible" animate="visible" className="mt-4 text-lg">
                            Somos especialistas na locação de equipamentos e prestação de serviços para construção civil, oferecendo soluções eficientes para movimentação de cargas, como containers e equipamentos pesados. Nossa equipe qualificada garante operações seguras, ágeis e dentro das normas técnicas. Trabalhamos com comprometimento e excelência para atender às necessidades de cada projeto, proporcionando qualidade e confiabilidade. Seja para obras de pequeno, médio ou grande porte, contamos com a infraestrutura ideal para otimizar sua logística e operação.
                        </motion.p>
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
                    <img src={Caminhao1} alt="Movimentação de cargas" className="w-full h-auto rounded-lg shadow-lg" />
                </div>

                <motion.div variants={fadeInUp} initial="hidden"    whileInView="visible" animate="visible" className="w-full laptop:w-1/2 relative z-10 laptop:pl-10 text-left laptop:text-left mt-6 laptop:mt-0 flex items-center">
                    <div>
                        <motion.h2 	variants={scaleIn} initial="hidden"  whileInView="visible" animate="visible" 
 className="text-2xl font-bold text-primary font-quantico">
                            Escavação, Carga, Transpote e acondicionamento de materiais:
                        </motion.h2>
                        <motion.p variants={fadeIn} initial="hidden"    whileInView="visible" animate="visible" className="mt-4 text-lg text-primary">• Minério •  Carvão • Escória </motion.p>
                        <p className="mt-4 text-lg text-primary">
                            Oferecemos serviços especializados em escavação, carga, transporte e acondicionamento de materiais como minério, carvão e escória. Com equipamentos modernos e equipe qualificada, garantimos eficiência, segurança e cumprimento das normas técnicas. Atendemos projetos de diversos portes, proporcionando soluções ágeis e confiáveis para a movimentação de materiais. Nosso compromisso é otimizar processos, reduzir custos operacionais e garantir a máxima produtividade para sua obra ou empreendimento.
                        </p>
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


                <motion.div variants={fadeInUp} initial="hidden"    whileInView="visible" animate="visible" className="w-full laptop:w-1/2 relative z-10 laptop:pl-10 text-left laptop:text-left mt-6 laptop:mt-0 flex items-center">
                    <div>
                        <motion.h2 variants={scaleIn} initial="hidden" whileInView="visible" animate="visible"  className="text-2xl font-bold font-quantico">
                            Transporte de reíduos de obra
                            Classe RDC, A, B, C, 2A e 2B
                        </motion.h2>
                        <motion.p variants={fadeIn} initial="hidden" whileInView="visible" animate="visible" className="mt-4 text-lg">
                            Oferecemos soluções eficientes para o transporte de resíduos de obras, abrangendo as classes RDC, A, B, C, 2A e 2B, sempre em conformidade com as normas ambientais. Nossa estrutura conta com veículos adequados para cada tipo de material, garantindo uma logística ágil e segura. Priorizamos a destinação correta dos resíduos, reduzindo impactos ambientais e contribuindo para a sustentabilidade. Atendemos projetos de diferentes portes com compromisso, responsabilidade e eficiência.
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
                        <motion.h2 variants={scaleIn} initial="hidden" whileInView="visible" animate="visible"  className="text-2xl font-bold text-primary font-quantico">
                            Transporte e abastecimento de combustíveis e lubrificantes
                        </motion.h2>

                        <motion.p variants={fadeIn} initial="hidden" whileInView="visible" animate="visible" className="mt-4 text-lg text-primary">
                            Realizamos o transporte e abastecimento de combustíveis e lubrificantes com segurança, eficiência e total conformidade com as regulamentações vigentes. Contamos com veículos apropriados e processos rigorosos para garantir a integridade dos produtos e a continuidade das operações. Nossos serviços são ideais para atender obras, indústrias e frotas, assegurando abastecimento ágil e confiável, reduzindo paradas e otimizando a produtividade do seu negócio.
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
                        <motion.h2 variants={scaleIn} initial="hidden" whileInView="visible" animate="visible"  className="text-2xl font-bold font-quantico">
                            Demolições de grande porte
                        </motion.h2>
                        <motion.p variants={fadeIn} initial="hidden" whileInView="visible" animate="visible" className="mt-4 text-lg">
                            Executamos demolições de grande porte com segurança, eficiência e total conformidade com as normas técnicas e ambientais. Utilizamos equipamentos modernos e metodologias avançadas para garantir a remoção controlada de estruturas, minimizando riscos e impactos na área. Nosso serviço é ideal para projetos industriais, comerciais e residenciais, proporcionando soluções ágeis, seguras e planejadas para cada necessidade.

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
                            Umidificação de vias e materiais
                        </motion.h2>

                        <motion.p variants={fadeIn} initial="hidden" whileInView="visible" animate="visible" className="mt-4 text-lg text-primary">
                            Oferecemos serviços de umidificação de vias e materiais para controle de poeira e melhoria das condições ambientais em obras, mineradoras e indústrias. Utilizamos equipamentos adequados para garantir a aplicação eficiente da água, reduzindo emissões de partículas e promovendo mais segurança no local. Nossa solução contribui para a preservação do meio ambiente, o cumprimento das normas ambientais e a qualidade das operações.</motion.p>
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
                        <motion.h2 variants={scaleIn} initial="hidden" whileInView="visible" animate="visible"  className="text-2xl font-bold font-quantico">
                            Limpeza industrial em geral
                        </motion.h2>

                        <motion.p variants={fadeIn} initial="hidden" whileInView="visible" animate="visible" className="mt-4 text-lg">
                            Realizamos limpeza industrial em geral, garantindo ambientes mais seguros, organizados e em conformidade com as normas de higiene e segurança. Contamos com equipamentos e técnicas adequadas para a remoção de resíduos, poeira, óleo e outros contaminantes, atendendo indústrias, fábricas e canteiros de obras. Nosso serviço contribui para a conservação dos equipamentos, a eficiência operacional e a segurança dos trabalhadores.
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
                <motion.h3 variants={scaleIn} initial="hidden" whileInView="visible" animate="visible"  className="text-2xl font-bold text-left text-wrap ml-8 pt-6 mr-32 tablet:px-20 tablet:py-10 font-quantico">Nossa Expertise,
                    Seu Sucesso:</motion.h3>
                <motion.h4 variants={fadeInUp} initial="hidden" whileInView="visible" animate="visible" className="text-2xl font-bold text-left text-wrap ml-8 mr-32 tablet:px-20 font-quantico">Soluções Inteligentes para Todos os Projetos</motion.h4>
                <motion.p variants={fadeIn} initial="hidden" whileInView="visible" animate="visible" className="text-2xl  text-left pb-8 text-wrap mx-12 my-4 tablet:px-20 mb-14">Nossa equipe possui ampla experiência para auxiliá-los na melhor opção e atender vossas necessidades.
                    Contamos com uma equipe de profissionais qualificados e comprometidos com a qualidade e segurança de nossos serviços.
                    Estabelecemos uma relação transparente com nossos clientes, oferecendo suporte através o atendimento diferenciado, em horario comercial e uma equipe para atendimentos emergenciais
                    Estamos preparados para atender clientes de pequeno, médio e grande porte, oferecendo sempre uma solução inteligente e econômica para quem precisa de serviços de terraplenagem, transporte, infraestrutura e locação de equipamentos.</motion.p>
            </motion.section>
            <motion.section initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }
                }} className="bg-gradient-to-b from-faixa1 to-faixa2 h-auto p-6 laptop:justify-center laptop:content-center self-center">
                <h3 className="text-2xl font-bold text-left text-wrap ml-8 pt-10 mr-32 text-primary mb-6 font-quantico tablet:px-20 tablet:py-6">Por que escolher a GRT Engenharia?</h3>
                <div className="flex flex-col justify-center items-center  content-center laptop:grid laptop:grid-cols-2   laptop:px-20">
                    <div className="relative">
                        <img className=" rounded-lg mt-6 w-96 tablet:w-[80%] laptop:w-[80%]" src={Image} alt="" />
                        <p className="text-sm text-left  text-primary absolute bottom-0 w-96 pl-3 bg-gradient-to-tr from-faixa3/90 to-transparent text-nowrap tablet:text-2xl tablet:w-[80%] laptop:w-[80%] laptop:text-base">Experiência consolidada no mercado.</p>
                    </div>
                    <div className="relative">
                        <img className="rounded-lg mt-6 w-96 tablet:w-[80%] laptop:w-[80%]" src={Image1} alt="" />
                        <p className="text-sm text-right flex pl-2 text-primary absolute bottom-0 w-96 bg-gradient-to-tr from-faixa3/95 to-transparent tablet:text-2xl tablet:w-[80%] tablet:text-nowrap laptop:w-[80%] laptop:text-lg">Equipamentos de ponta e equipe qualificada</p>
                    </div>
                    <div className="relative">
                        <img className="r-20 rounded-lg mt-6 w-96 h-auto tablet:w-[70%] laptop:w-[80%]" src={Image3} alt="" />
                        <p className="text-sm  text-left text-wrap  text-primary pl-3 absolute bottom-0 w-96 bg-gradient-to-tr from-faixa3/95 to-transparent  tablet:text-2xl tablet:w-[70%] tablet:text-nowrap laptop:w-[80%] laptop:text-lg">Soluções personalizadas para cada cliente.
                        </p>
                    </div>
                    <div className="relative ">
                        <img className=" rounded-lg mt-6 w-96 tablet:w-[80%] laptop:w-[80%] " src={Image2} alt="" />
                        <p className="text-sm  text-right flex pl-3 text-primary absolute bottom-0 w-96 bg-gradient-to-tr from-faixa3/95 to-transparent tablet:text-2xl tablet:w-[80%] tablet:text-nowrap laptop:w-[80%] laptop:text-base">Compromisso com prazos e qualidade.</p>
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
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Missao from "../../assets/missao.png";
import Visao from "../../assets/visao.png";
import Valores from "../../assets/valores.png";
import Equipamentos1 from "../../assets/equipamentos1.png";
import Pessoal from "../../assets/pessoal.png";
import Escavadeira1 from "../../assets/escavadeira1.png";
import Escavadeira2 from "../../assets/escavadeira2.png";
import WhatsappIcon from "../../assets/whats.png";

export default function About() {
    const sectionsRef = useRef([]);
    const [visibleSections, setVisibleSections] = useState(Array(sectionsRef.current.length).fill(false));

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = sectionsRef.current.indexOf(entry.target);
                    if (index !== -1) {
                        setVisibleSections((prev) => {
                            const updated = [...prev];
                            updated[index] = true;
                            return updated;
                        });
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, { threshold: 0.1 });

        sectionsRef.current.forEach((section) => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            if (sectionsRef.current) {
                sectionsRef.current.forEach((section) => {
                    if (section) {
                        observer.unobserve(section);
                    }
                });
            }
        };
    }, []);

    return (
        <main>
            <section ref={(el) => (sectionsRef.current[0] = el)}>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={visibleSections[0] ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-b from-faixa1 to-faixa2 w-full h-auto px-6 tablet:px-20"
                >
                    <h3 className="text-primary uppercase text-1xl pt-8 text-left ml-8">a empresa</h3>
                    <h2 className="text-primary uppercase text-2xl font-bold text-left ml-8 pb-8 font-quantico">
                        Sobre a GRT Engenharia
                    </h2>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate={visibleSections[0] ? "visible" : "hidden"}
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <img src={Equipamentos1} alt="" className="w-full h-auto" />
                </motion.div>
            </section>

            <section ref={(el) => (sectionsRef.current[1] = el)}>
                <motion.div
                    initial="hidden"
                    animate={visibleSections[1] ? "visible" : "hidden"}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-left ml-8 py-10 tablet:px-20 tablet:py-10 font-quantico">
                        A GRT Engenharia é uma empresa sólida e experiente, atuando há mais de 10 anos no setor de construção civil e infraestrutura.
                    </h2>
                    <p className="text-2xl text-left text-wrap ml-8 px-8 tablet:px-20 mb-14">
                        Com mais de uma década de experiência, a GRT Engenharia e Locação é uma empresa consolidada no setor de locação de equipamentos, movimentação e transporte de cargas, movimentação e limpeza industrial, reconhecida pela excelência, confiabilidade e alto padrão de seus serviços.
                        Com uma frota moderna e uma equipe altamente qualificada, a GRT Engenharia e Locação se destaca na locação de equipamentos de linha amarela e caminhões e na execução de serviços industriais e de terraplenagem e pavimentação, oferecendo soluções personalizadas e eficientes. Nosso compromisso é atender às demandas dos clientes com segurança, inovação e alto desempenho, garantindo resultados que agregam valor e produtividade aos projetos.
                        Nosso compromisso é garantir segurança, qualidade e eficiência, assegurando a execução de projetos com rigor técnico, inovação e foco em resultados.

                    </p>
                </motion.div>
            </section>

            <section ref={(el) => (sectionsRef.current[2] = el)} className="mx-auto px-6 py-12 flex flex-col items-center relative laptop:flex-row laptop:items-center laptop:px-24 laptop:py-10">
                <motion.div
                    initial="hidden"
                    animate={visibleSections[2] ? "visible" : "hidden"}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="w-full laptop:w-1/2 relative z-10"
                >
                    <img src={Pessoal} alt="Movimentação de cargas" className="w-full h-auto rounded-lg shadow-lg" />
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate={visibleSections[2] ? "visible" : "hidden"}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="w-full relative z-10 laptop:pl-10 text-left laptop:text-left mt-6 flex items-center laptop:mt-0"
                >
                    <p className="mt-4 text-lg text-primary">
                        Contamos com uma equipe de profissionais altamente qualificados, treinados e em constante atualização para oferecer serviços com precisão, eficiência e segurança. Nosso time é composto por especialistas experientes, preparados para atuar em locação de equipamentos, movimentação de cargas, transporte, terraplenagem, pavimentação, limpeza industrial e movimentação industrial, garantindo excelência em cada etapa dos projetos.
                        Nosso compromisso com a capacitação contínua e o cumprimento rigoroso das normas técnicas e de segurança assegura a entrega de soluções confiáveis e alinhadas às necessidades específicas de cada cliente. Com uma equipe dedicada e qualificada, proporcionamos maior produtividade, redução de riscos operacionais e resultados de alto padrão.

                    </p>
                </motion.div>
                <div className="absolute right-0 top-0 h-full lg:w-[80%] w-full laptop:w-2/3 bg-gradient-to-b from-faixa1 to-faixa2 z-0"></div>
            </section>

            <section ref={(el) => (sectionsRef.current[3] = el)} className="flex flex-col items-center laptop:grid laptop:grid-cols-2 w-full gap-8 px-6 tablet:px-12 laptop:px-24 py-12">
                <motion.div
                    initial="hidden"
                    animate={visibleSections[3] ? "visible" : "hidden"}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex flex-col items-center laptop:items-start w-full"
                >
                    <img className="rounded-xl object-cover w-full h-[450%]" src={Escavadeira1} alt="Escavadeira em obra" />
                    <p className="text-lg text-center laptop:text-left text-titulo leading-8 mt-4">
                        A tecnologia e a inovação são fundamentais para o sucesso de cada projeto.
                        Investimos em métodos e ferramentas que maximizam a eficiência e minimizam os impactos ambientais,
                        refletindo nosso compromisso com a sustentabilidade. Além disso, oferecemos um atendimento
                        personalizado, que se destaca pelo relacionamento próximo com nossos clientes e pelo entendimento
                        pleno de suas necessidades.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate={visibleSections[3] ? "visible" : "hidden"}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="relative flex flex-col items-center w-full"
                >
                    <img className="rounded-xl object-cover w-full h-[550%]" src={Escavadeira2} alt="Escavadeira em galpão" />
                    <div className="bg-gradient-to-b from-faixa1 to-faixa2 w-full p-6 text-primary text-lg leading-8 text-center laptop:text-left -mt-10 relative z-10 rounded-xl">
                        Estamos preparados para enfrentar qualquer desafio no setor de construção civil,
                        contribuindo para o desenvolvimento de projetos que agregam valor e impactam positivamente
                        a comunidade. Conte com a GRT Engenharia e Locações para transformar suas ideias em realidade,
                        com qualidade, segurança e um olhar voltado para o futuro.
                    </div>
                </motion.div>
            </section>

            <section ref={(el) => (sectionsRef.current[4] = el)} className="px-16 py-10 w-full h-auto flex flex-col justify-center items-center tablet:grid tablet:grid-cols-3 tablet:gap-8 tablet:place-items-center desktop:place-items-center">
                <motion.div
                    initial="hidden"
                    animate={visibleSections[4] ? "visible" : "hidden"}
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    <img className="w-60 h-auto" src={Missao} alt="Missão" />

                </motion.div>
                <motion.div
                    initial="hidden"
                    animate={visibleSections[4] ? "visible" : "hidden"}
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: 1.4 }}
                >
                    <img className="w-60 h-auto" src={Visao} alt="Visão" />

                </motion.div>
                <motion.div
                    initial="hidden"
                    animate={visibleSections[4] ? "visible" : "hidden"}
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: 1.6 }}
                >
                    <img className="w-60 h-auto" src={Valores} alt="Valores" />

                </motion.div>
            </section>
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

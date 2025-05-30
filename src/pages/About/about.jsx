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
    const sectionsRef = useRef([]); // Referências para as seções da página
    const [visibleSections, setVisibleSections] = useState(Array(sectionsRef.current.length).fill(false));

    // Animação de fade com leve movimento vertical
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    // Animação de fade sem movimento
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    // Observer para ativar animações ao rolar para a seção
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

        // Observa cada seção referenciada
        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            // Limpeza do observer
            sectionsRef.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <main>
            {/* Seção: Título e imagem principal */}
            <section ref={(el) => (sectionsRef.current[0] = el)}>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={visibleSections[0] ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-b from-faixa1 to-faixa2 w-full h-auto px-6 tablet:px-20"
                >
                    <h3 className="text-primary uppercase text-1xl pt-8 text-left ml-8">A Empresa</h3>
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

            {/* Seção: Texto institucional */}
            <section ref={(el) => (sectionsRef.current[1] = el)}>
                <motion.div
                    initial="hidden"
                    animate={visibleSections[1] ? "visible" : "hidden"}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-left ml-8 py-10 tablet:px-20 tablet:py-10 font-quantico">
                        A GRT Engenharia é uma empresa sólida e experiente, com mais de 10 anos de atuação na construção civil e infraestrutura.
                    </h2>

                    <p className="text-2xl text-left text-wrap ml-8 px-8 tablet:px-20 mb-14">
                        Ao longo de sua trajetória, a GRT Engenharia e Locação consolidou-se no setor de locação de equipamentos, transporte e movimentação de cargas, além de serviços de limpeza e movimentação industrial. É reconhecida por sua excelência, confiabilidade e alto padrão de entrega.
                    </p>

                    <p className="text-2xl text-left text-wrap ml-8 px-8 tablet:px-20 mb-14">
                        Com uma frota moderna e equipe qualificada, destaca-se na locação de equipamentos de linha amarela e caminhões, além da execução de serviços industriais, terraplenagem e pavimentação. Oferece soluções personalizadas e eficazes.
                    </p>

                    <p className="text-2xl text-left text-wrap ml-8 px-8 tablet:px-20 mb-14">
                        Temos como prioridade atender às demandas com segurança, inovação e alto desempenho, sempre buscando agregar valor e aumentar a produtividade. Nosso compromisso é a entrega de projetos com rigor técnico e foco em resultados.
                    </p>
                </motion.div>
            </section>

            {/* Seção: Equipe e diferencial humano */}
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
                        Contamos com uma equipe de profissionais qualificados e em constante atualização, preparados para atuar com eficiência, precisão e segurança. Nossa expertise abrange locação de equipamentos, transporte, terraplenagem, pavimentação, limpeza e movimentação industrial.
                        Priorizamos o cumprimento das normas técnicas e de segurança, assegurando a entrega de soluções confiáveis, com redução de riscos e alto desempenho operacional.
                    </p>
                </motion.div>
                <div className="absolute right-0 top-0 h-full lg:w-[80%] w-full laptop:w-2/3 bg-gradient-to-b from-faixa1 to-faixa2 z-0"></div>
            </section>

            {/* Seção: Inovação e Sustentabilidade */}
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
                        A inovação é essencial para o sucesso dos nossos projetos. Investimos constantemente em tecnologias e métodos que aumentam a eficiência e reduzem os impactos ambientais. Nosso atendimento é personalizado e focado no entendimento completo das necessidades de cada cliente.
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
                        Estamos prontos para encarar os desafios da construção civil, colaborando para projetos de alto impacto e valor agregado. A GRT Engenharia e Locações é sua parceira para transformar ideias em realidade, com qualidade, segurança e foco no futuro.
                    </div>
                </motion.div>
            </section>

            {/* Seção: Missão, Visão e Valores */}
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

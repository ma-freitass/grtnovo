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
import ISO2 from "../../assets/iso2.png";

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

    // Animação de escala para seção de serviços
    const scaleIn = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    // Observer para ativar animações ao rolar para a seção
    useEffect(() => {
        const sections = sectionsRef.current; // Copy ref value to a variable
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = sections.indexOf(entry.target);
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
        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            // Limpeza do observer
            sections.forEach((section) => {
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
                        Sobre a GRT Engenharia e Locações
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
                    <h2 className="text-3xl font-bold text-left ml-8 py-10 tablet:px-20 tablet:py-6 font-quantico">
                        A GRT Engenharia e locações é referência em locação de equipamentos, transporte e movimentação de cargas, com forte presença nos setores industrial, da construção civil e de infraestrutura.
                    </h2>

                    <p className="text-2xl text-left text-wrap ml-8 px-8 tablet:px-20 mb-6">
                        Somos uma empresa consolidada e experiente, com mais de uma década oferecendo soluções em locação de equipamentos, transporte, movimentação de cargas e serviços industriais para construção civil e infraestrutura. Reconhecida pela excelência, confiabilidade e alto padrão em suas entregas, atua com comprometimento e inovação.
                    </p>

                    <h3 className="text-2xl font-bold text-left ml-8 py-10 tablet:px-20 tablet:py-6 font-quantico">
                        Frota e Serviços
                    </h3>
                    <p className="text-2xl text-left text-wrap ml-8 px-8 tablet:px-20 mb-6">
                        Dispomos de uma frota moderna e uma equipe altamente qualificada, especializadas na locação de equipamentos de linha amarela e caminhões, além de realizar serviços industriais, terraplenagem e pavimentação, oferecendo soluções eficientes e personalizadas.
                    </p>
                    <h3 className="text-2xl font-bold text-left ml-8 py-10 tablet:px-20 tablet:py-6 font-quantico">
                        Compromissos
                    </h3>
                    <p className="text-2xl text-left text-wrap ml-8 px-8 tablet:px-20 mb-14">
                        Nossa prioridade é atender às demandas dos clientes com segurança, inovação e alta performance, promovendo aumento da produtividade e agregando valor aos projetos. Temos o compromisso de executar cada trabalho com rigor técnico e resultados concretos.
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

                    <p className="mt-4 text-lg text-primary"><strong>Equipe técnica</strong> -
                        Contamos com profissionais altamente capacitados e constantemente atualizados, preparados para atuar com excelência, segurança e precisão. Nossa expertise inclui locação de equipamentos para transporte, terraplenagem, pavimentação, limpeza e movimentação industrial, sempre respeitando as normas técnicas mais exigentes para oferecer soluções confiáveis e alto desempenho operacional.
                    </p>
                </motion.div>
                <div className="absolute right-0 top-0 h-full lg:w-[80%] w-full laptop:w-2/3 bg-gradient-to-b from-faixa1 to-faixa2 z-0"></div>
            </section>
            <section className="w-full bg-primary py-10 px-4">
                <motion.section
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    id="servicos"
                    className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6"
                >
                    {/* Imagem com efeito de zoom ao hover e revelação ao rolar */}
                    <motion.img
                        src={ISO2}
                        alt="Movimentação de cargas"
                        className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto rounded-lg shadow-lg"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                    />

                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-quantico text-titulo">
                        Compromisso com a Qualidade – ISO 9001
                    </h1>

                    <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-titulo max-w-4xl">
                        A GRT Engenharia e Locações está em processo de certificação ISO 9001, a mais reconhecida norma de gestão da qualidade no mundo.
                        Nosso objetivo com a certificação é fortalecer ainda mais os padrões de qualidade em todos os processos, desde o atendimento inicial até a execução e entrega dos serviços.
                        A implantação do Sistema de Gestão da Qualidade reforça nosso compromisso com a melhoria contínua, a padronização dos processos operacionais e a satisfação total de nossos clientes, garantindo segurança, eficiência e alto desempenho em cada projeto.
                    </p>
                </motion.section>
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
                        <strong>Inovação e Sustentabilidade</strong> -
                        A inovação está no centro do sucesso dos nossos projetos. Investimos constantemente em tecnologias avançadas e métodos sustentáveis, visando a máxima eficiência operacional e minimização dos impactos ambientais. Nosso atendimento personalizado prioriza o entendimento detalhado das necessidades de cada cliente.

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
                        <strong>Compromisso com o Cliente</strong> -
                        Estamos prontos para superar os desafios da construção civil e infraestrutura, colaborando com projetos de alto impacto e valor agregado. A GRT Engenharia e Locações é parceira estratégica na transformação de ideias em resultados concretos, garantindo qualidade, segurança e uma visão orientada para o futuro.

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
                href="https://wa.me/5524998651115"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-2 right-2 z-50 tablet:bottom-6 tablet:right-6 tablet:p-3 hover:scale-110 transition duration-300"
            >
                <img src={WhatsappIcon} alt="WhatsApp" className="size-20" />
            </a>
        </main>
    );
}

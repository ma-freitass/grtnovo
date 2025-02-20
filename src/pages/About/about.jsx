import Missao from "../../assets/missao.png"
import Visao from "../../assets/visao.png"
import Valores from "../../assets/valores.png"
import Equipamentos1 from "../../assets/equipamentos1.png"
import Pessoal from "../../assets/pessoal.png"
import Escavadeira1 from "../../assets/escavadeira1.png"
import Escavadeira2 from "../../assets/escavadeira2.png"
import WhatsappIcon from "../../assets/whats.png"



export default function About() {
    return (
        <main>
            <section>
                <div className="bg-gradient-to-b from-faixa1 to-faixa2 w-full h-auto px-20">
                    <h3 className="text-primary uppercase text-2xl pt-8 text-left ml-8">a empresa</h3>
                    <h2 className="text-primary uppercase text-3xl font-bold text-left ml-8 pb-8 font-quantico">Sobre a GRT Engenharia</h2>
                </div>
                <div>
                    <img src={Equipamentos1} alt="" />
                </div>
            </section>
            <section>
                <h2 className="text-3xl font-bold text-left ml-8 py-10 tablet:px-20 tablet:py-10 font-quantico">A GRT Engenharia é uma empresa sólida e experiente, atuando há mais de 10 anos no setor de construção civil e infraestrutura.</h2>
                <p className="text-2xl  text-left text-wrap  ml-8 px-8 tablet:px-20 mb-14">Reconhecida pela qualidade e confiabilidade de seus serviços, a GRT se destaca especialmente na locação de equipamentos de linha amarela e na execução de obras civis de pequeno, médio e grande porte. Nosso compromisso é fornecer soluções práticas e eficientes, adaptadas às necessidades de cada cliente, com foco em resultados de alto padrão e na segurança do trabalho.</p>
            </section>
            <section className="mx-auto px-6 py-12 flex flex-col  items-center relative laptop:flex-row laptop:items-center laptop:px-24 laptop:py-10">
                <div class="w-full laptop:w-1/2 relative z-10">
                    <img src={Pessoal} alt="Movimentação de cargas" class="w-full h-auto rounded-lg shadow-lg" />
                </div>


                <div className="w-full relative z-10 laptop:pl-10 text-left laptop:text-left mt-6 flex items-center laptop:mt-0">
                    <div>
                        <p className="mt-4 text-lg text-primary">
                            Contamos com uma equipe de profissionais altamente capacitados e em constante atualização, além de uma frota moderna e bem equipada, garantindo soluções, segurança e agilidade em todas as etapas dos projetos. Nossa experiência acumulada nos permite entender profundamente os desafios específicos de cada obra e propor soluções inovadoras, sempre alinhadas às melhores práticas do mercado e às exigências dos clientes.</p>
                    </div>
                </div>

                <div className="absolute right-0 top-0 h-full lg:w-[80%] w-full laptop:w-2/3 bg-gradient-to-b from-faixa1 to-faixa2 z-0"></div>


            </section>
            <section className="flex flex-col items-center laptop:grid laptop:grid-cols-2 w-full gap-8 px-6 tablet:px-12 laptop:px-24 py-12">

                <div className="flex flex-col items-center laptop:items-start w-full">
                    <img className="rounded-xl object-cover w-full h-[450%]"
                        src={Escavadeira1}
                        alt="Escavadeira em obra" />
                    <p className="text-lg text-center laptop:text-left text-titulo leading-8 mt-4">
                        A tecnologia e a inovação são fundamentais para o sucesso de cada projeto.
                        Investimos em métodos e ferramentas que maximizam a eficiência e minimizam os impactos ambientais,
                        refletindo nosso compromisso com a sustentabilidade. Além disso, oferecemos um atendimento
                        personalizado, que se destaca pelo relacionamento próximo com nossos clientes e pelo entendimento
                        pleno de suas necessidades.
                    </p>
                </div>


                <div className="relative flex flex-col items-center w-full">
                    <img className="rounded-xl object-cover w-full h-[550%]"
                        src={Escavadeira2}
                        alt="Escavadeira em galpão" />
                    <div className="bg-gradient-to-b from-faixa1 to-faixa2 w-full p-6 text-primary text-lg leading-8 text-center laptop:text-left -mt-10 relative z-10 rounded-xl">
                        Estamos preparados para enfrentar qualquer desafio no setor de construção civil,
                        contribuindo para o desenvolvimento de projetos que agregam valor e impactam positivamente
                        a comunidade. Conte com a GRT Engenharia para transformar suas ideias em realidade,
                        com qualidade, segurança e um olhar voltado para o futuro.
                    </div>
                </div>

            </section>

            <section className="px-16 py-10 w-full h-auto flex flex-col justify-center items-center  tablet:grid tablet:grid-cols-3 tablet:gap-8 tablet:place-items-center desktop:place-items-center">
                <img className="w-60 h-auto" src={Missao} alt="Missão" />
                <img className="w-60 h-auto" src={Visao} alt="Visão" />
                <img className="w-60 h-auto" src={Valores} alt="Valores" />
            </section>
            <a
                href="https://wa.me/5524981417949" 
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 p-3  hover:scale-110 transition duration-300"
            >
                <img src={WhatsappIcon} alt="WhatsApp" className="size-20" />
            </a>

        </main>
    );
}
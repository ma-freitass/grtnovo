import Missao from "../../assets/missao.png"
import Visao from "../../assets/visao.png"
import Valores from "../../assets/valores.png"
import Equipamentos1 from "../../assets/equipamentos1.png"
import Pessoal from "../../assets/pessoal.png"
import Escavadeira1 from "../../assets/escavadeira1.png"
import Escavadeira2 from "../../assets/escavadeira2.png"


export default function About() {
    return (
        <main>
            <section>
                <div className="bg-gradient-to-b from-faixa1 to-faixa2 w-full h-auto">
                    <h3 className="text-primary uppercase text-2xl pt-8 text-left ml-8">a empresa</h3>
                    <h2 className="text-primary uppercase text-3xl font-bold text-left ml-8 pb-8">Sobre a GRT Engenharia</h2>
                </div>
                <div>
                    <img src={Equipamentos1} alt="" />
                </div>
            </section>
            <section>
                <h2 className="text-3xl font-bold text-left ml-8 py-10">A GRT Engenharia é uma empresa sólida e experiente, atuando há mais de 10 anos no setor de construção civil e infraestrutura.</h2>
                <p className="text-lg  text-left  pb-8 text-wrap mx-12">Reconhecida pela qualidade e confiabilidade de seus serviços, a GRT se destaca especialmente na locação de equipamentos de linha amarela e na execução de obras civis de pequeno, médio e grande porte. Nosso compromisso é fornecer soluções práticas e eficientes, adaptadas às necessidades de cada cliente, com foco em resultados de alto padrão e na segurança do trabalho.</p>
            </section>
            <section className="flex flex-col items-center tablet:flex-row tablet:items-stretch w-full relative">
                <div className="tablet:w-1/2">

                    <img className="rounded-xl mt-6 object-cover w-full h-[90%] tablet:w-[90%] mx-auto mr-0" src={Pessoal} alt="" />
                </div>
                <div className="bg-gradient-to-b from-faixa1 to-faixa2 w-screen h-auto tablet:w-1/2 flex items-center tablet:rounded-xl">
                    <p className="text-lg text-left leading-8 text-primary p-6 tablet:p-12">Contamos com uma equipe de profissionais altamente capacitados e em constante atualização, além de uma frota moderna e bem equipada, garantindo soluções, segurança e agilidade em todas as etapas dos projetos. Nossa experiência acumulada nos permite entender profundamente os desafios específicos de cada obra e propor soluções inovadoras, sempre alinhadas às melhores práticas do mercado e às exigências dos clientes.</p>
                </div>
            </section>
            <section className="flex flex-col items-center laptop:grid laptop:grid-cols-2 w-full gap-8 px-6 tablet:px-12 laptop:px-24 py-12">

                {/* Bloco da Esquerda */}
                <div className="flex flex-col items-center laptop:items-start w-full">
                    <img className="rounded-xl object-cover w-full max-h-[400px] h-[400px]"
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

                {/* Bloco da Direita */}
                <div className="relative flex flex-col items-center w-full">
                    <img className="rounded-xl object-cover w-full max-h-[400px] h-[400px]"
                        src={Escavadeira2}
                        alt="Escavadeira em galpão" />
                    <div className="bg-gradient-to-b from-faixa1 to-faixa2 w-full p-6 text-primary text-lg leading-8 text-center laptop:text-left -mt-10 relative z-10">
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

        </main>
    );
}
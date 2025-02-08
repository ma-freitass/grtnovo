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
        <section>
            <img className="pr-12 rounded-xl mt-6 object-cover" src={Pessoal} alt="" />
            <div className="bg-gradient-to-b from-faixa1 to-faixa2 w-full h-auto -mt-32 pt-32">
            <p className="text-lg text-left ml-6 leading-8 text-primary p-6">Contamos com uma equipe de profissionais altamente capacitados e em constante atualização, além de uma frota moderna e bem equipada, garantindo soluções, segurança e agilidade em todas as etapas dos projetos. Nossa experiência acumulada nos permite entender profundamente os desafios específicos de cada obra e propor soluções inovadoras, sempre alinhadas às melhores práticas do mercado e às exigências dos clientes.</p>
            </div>
        </section>
        <section>
            <section>
                <img className=" pl-12 rounded-xl mt-6 object-cover" src={Escavadeira1} alt="" />
                <p className="text-lg pb-8 text-wrap mx-12 my-6">A tecnologia e a inovação são fundamentais para o sucesso de cada projeto. Investimos em métodos e ferramentas que maximizam a eficiência e minimizam os impactos ambientais, refletindo nosso compromisso com a sustentabilidade. Além disso, oferecemos um atendimento personalizado, que se destaca pelo relacionamento próximo com nossos clientes e pelo entendimento pleno de suas necessidades.</p>
            </section>
            <section>
                <img className="pr-12 rounded-xl mt-6 object-cover" src={Escavadeira2} alt="" />
                <div className="bg-gradient-to-b from-faixa1 to-faixa2 w-full h-auto -mt-32 pt-32">
                <p className="text-lg text-left ml-6 leading-8 text-primary p-6">Estamos preparados para enfrentar qualquer desafio no setor de construção civil, contribuindo para o desenvolvimento de projetos que agregam valor e impactam positivamente a comunidade. Conte com a GRT Engenharia para transformar suas ideias em realidade, com qualidade, segurança e um olhar voltado para o futuro.</p>
                </div>
            </section>
        </section>
        <section className="px-32 py-20">
            <img className="w-60 h-auto pb-4" src={Missao} alt="" />
            <img className="w-60 h-auto pb-4" src={Visao} alt="" />
            <img className="w-60 h-auto pb-4" src={Valores} alt="" />
        </section>
      </main>
    );
  }
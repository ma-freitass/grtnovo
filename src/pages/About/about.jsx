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
                <div>
                    <h3>a empresa</h3>
                    <h2>Sobre a GRT Engenharia</h2>
                </div>
                <div>
                    <img src={Equipamentos1} alt="" />
                </div>
        </section>
        <section>
            <h2>A GRT Engenharia é uma empresa sólida e experiente, atuando há mais de 10 anos no setor de construção civil e infraestrutura.</h2>
            <p>Reconhecida pela qualidade e confiabilidade de seus serviços, a GRT se destaca especialmente na locação de equipamentos de linha amarela e na execução de obras civis de pequeno, médio e grande porte. Nosso compromisso é fornecer soluções práticas e eficientes, adaptadas às necessidades de cada cliente, com foco em resultados de alto padrão e na segurança do trabalho.</p>
        </section>
        <section>
            <img src={Pessoal} alt="" />
            <p>Contamos com uma equipe de profissionais altamente capacitados e em constante atualização, além de uma frota moderna e bem equipada, garantindo soluções, segurança e agilidade em todas as etapas dos projetos. Nossa experiência acumulada nos permite entender profundamente os desafios específicos de cada obra e propor soluções inovadoras, sempre alinhadas às melhores práticas do mercado e às exigências dos clientes.</p>
        </section>
        <section>
            <section>
                <img src={Escavadeira1} alt="" />
                <p>A tecnologia e a inovação são fundamentais para o sucesso de cada projeto. Investimos em métodos e ferramentas que maximizam a eficiência e minimizam os impactos ambientais, refletindo nosso compromisso com a sustentabilidade. Além disso, oferecemos um atendimento personalizado, que se destaca pelo relacionamento próximo com nossos clientes e pelo entendimento pleno de suas necessidades.</p>
            </section>
            <section>
                <img src={Escavadeira2} alt="" />
                <p>Estamos preparados para enfrentar qualquer desafio no setor de construção civil, contribuindo para o desenvolvimento de projetos que agregam valor e impactam positivamente a comunidade. Conte com a GRT Engenharia para transformar suas ideias em realidade, com qualidade, segurança e um olhar voltado para o futuro.</p>
            </section>
        </section>
        <section>
            <img src={Missao} alt="" />
            <img src={Visao} alt="" />
            <img src={Valores} alt="" />
        </section>
      </main>
    );
  }
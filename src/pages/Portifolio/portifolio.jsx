import Portifolio from "../../assets/portifolio.png"
import Caminhao from "../../assets/caminhao.png"
import Caminhao1 from "../../assets/caminhao1.png"
import Caminhao2 from "../../assets/caminhao2.png"
import Maquina from "../../assets/maquina.png"
import Maquina1 from "../../assets/maquina1.png"
import Pipa from "../../assets/pipa.png"
import Equip from "../../assets/equip.png"


export default function Portilio() {
    return (
        <main>
            <section>
                <div className="bg-gradient-to-b from-faixa1 to-faixa2 w-full h-auto">
                    <h3 className="text-primary uppercase text-1xl pt-8 text-left ml-8">nossos serviços</h3>
                    <h2 className="text-primary uppercase text-2xl font-bold text-left ml-8 pb-8">Engenharia e Locações</h2>
                </div>
                
            </section>
            <section>
                <h2 className="text-3xl font-bold text-left ml-8 py-10">Transformando projetos em realidade com inovação, precisão e compromisso com a excelência.</h2>
                <p className="sm: text-lg  text-left  pb-8 text-wrap mx-12">A GRT Engenharia se destaca pela ampla experiência e expertise em serviços essenciais para o setor de construção civil, incluindo terraplenagem, transporte de materiais, infraestrutura e locação de equipamentos de alta performance.</p>
                <div>
                    <img src={Portifolio} alt="" />
                </div>
            </section>
            <section>
                <div>
                    <h2 className="text-2xl font-bold text-left ml-8 py-10">Descubra como podemos te ajudar!</h2>
                </div>
                <div>
                    <img className="sm: pr-12 rounded-xl mt-6 object-cover" src={Caminhao} alt="" />
                    <h3 className="text-2xl font-bold text-left ml-8 py-8">Prestação de serviços com movimentação de cargas (Containers/ Equipamentos)</h3>
                    <p className="sm: text-lg  text-left  pb-8 text-wrap mx-12"> Somos especialistas na locação de equipamentos e prestação de serviços para construção civil, oferecendo soluções eficientes para movimentação de cargas, como containers e equipamentos pesados. Nossa equipe qualificada garante operações seguras, ágeis e dentro das normas técnicas. Trabalhamos com comprometimento e excelência para atender às necessidades de cada projeto, proporcionando qualidade e confiabilidade. Seja para obras de pequeno, médio ou grande porte, contamos com a infraestrutura ideal para otimizar sua logística e operação.</p>
                </div>
                <div>
                    <img className="sm: ml-8 rounded-lg mt-6 object-cover" src={Caminhao1} alt="" />
                    <div className="bg-gradient-to-b from-faixa1 to-faixa2 w-full h-auto -mt-32 pt-32">
                    <h3 className="text-2xl font-bold text-left text-wrap ml-8 pt-6 text-primary mr-20">Escavação, Carga, Transpote e acondicionamento de materiais:</h3>
                    <ul  className="sm: text-lg font-bold flex space-x-3 ml-8 mt-1 text-primary">
                        <li>Minério  </li>
                        <li>Carvão</li>
                        <li>Escória</li>
                    </ul>
                 
                    <p className="sm: text-lg  text-left pb-8 text-wrap mx-12 text-primary my-4"> Oferecemos serviços especializados em escavação, carga, transporte e acondicionamento de materiais como minério, carvão e escória. Com equipamentos modernos e equipe qualificada, garantimos eficiência, segurança e cumprimento das normas técnicas. Atendemos projetos de diversos portes, proporcionando soluções ágeis e confiáveis para a movimentação de materiais. Nosso compromisso é otimizar processos, reduzir custos operacionais e garantir a máxima produtividade para sua obra ou empreendimento.</p>
                    </div>
                </div>
                <div>
                    <img className="sm: pr-12 rounded-xl mt-6 object-cover" src={Caminhao2} alt="" />
                    <h3 className="text-2xl font-bold text-left ml-8 py-8 mr-10">Transporte de reíduos de obra
                        Classe RDC, A, B, C, 2A e 2B</h3>
                    <p p className="sm: text-lg  text-left  pb-8 text-wrap mx-12">Oferecemos soluções eficientes para o transporte de resíduos de obras, abrangendo as classes RDC, A, B, C, 2A e 2B, sempre em conformidade com as normas ambientais. Nossa estrutura conta com veículos adequados para cada tipo de material, garantindo uma logística ágil e segura. Priorizamos a destinação correta dos resíduos, reduzindo impactos ambientais e contribuindo para a sustentabilidade. Atendemos projetos de diferentes portes com compromisso, responsabilidade e eficiência.</p>

                </div>
                <div>
                    <img className="sm: ml-10 rounded-lg mt-6 w-[106vw]"  src={Maquina} alt="" />
                    <div className="bg-gradient-to-b from-faixa1 to-faixa2 w-full h-auto -mt-36 pt-40">
                    <h3 className="text-2xl font-bold text-left text-wrap ml-8 pt-6 text-primary mr-32">Transporte e abastecimento de combustíveis e lubrificantes</h3>
                   
                    <p className="sm: text-lg  text-left pb-8 text-wrap mx-12 text-primary my-4">Realizamos o transporte e abastecimento de combustíveis e lubrificantes com segurança, eficiência e total conformidade com as regulamentações vigentes. Contamos com veículos apropriados e processos rigorosos para garantir a integridade dos produtos e a continuidade das operações. Nossos serviços são ideais para atender obras, indústrias e frotas, assegurando abastecimento ágil e confiável, reduzindo paradas e otimizando a produtividade do seu negócio.</p>
                    </div>
                </div>
                <div>
                    <img className="sm: mr-10 rounded-lg mt-6 w-[106vw]" src={Maquina1} alt="" />
                    <h3 className="text-2xl font-bold text-left text-wrap ml-8 pt-6 mr-32">Demolições de grande porte</h3>
                    <p className="sm: text-lg  text-left pb-8 text-wrap mx-12 my-4">Executamos demolições de grande porte com segurança, eficiência e total conformidade com as normas técnicas e ambientais. Utilizamos equipamentos modernos e metodologias avançadas para garantir a remoção controlada de estruturas, minimizando riscos e impactos na área. Nosso serviço é ideal para projetos industriais, comerciais e residenciais, proporcionando soluções ágeis, seguras e planejadas para cada necessidade.</p>
                </div>
                <div>
                    <img className="sm: ml-10 rounded-lg mt-6 w-[106vw]" src={Pipa} alt="" />
                    <div className="bg-gradient-to-b from-faixa1 to-faixa2 w-full h-auto -mt-36 pt-40">
                    <h3 className="text-2xl font-bold text-left text-wrap ml-8 pt-6 text-primary mr-32">Umidificação de vias e materiais</h3>
                    <p className="sm: text-lg  text-left pb-8 text-wrap mx-12 text-primary my-4">Oferecemos serviços de umidificação de vias e materiais para controle de poeira e melhoria das condições ambientais em obras, mineradoras e indústrias. Utilizamos equipamentos adequados para garantir a aplicação eficiente da água, reduzindo emissões de partículas e promovendo mais segurança no local. Nossa solução contribui para a preservação do meio ambiente, o cumprimento das normas ambientais e a qualidade das operações.</p>
                    </div>
                </div>
                <div>
                    <img className="sm: mr-10 rounded-lg mt-6 w-[106vw]" src={Equip} alt="" />
                    <h3 className="text-2xl font-bold text-left text-wrap ml-8 pt-6 mr-32">Limpeza industrial em geral</h3>
                    <p className="sm: text-lg  text-left pb-8 text-wrap mx-12 my-4">Realizamos limpeza industrial em geral, garantindo ambientes mais seguros, organizados e em conformidade com as normas de higiene e segurança. Contamos com equipamentos e técnicas adequadas para a remoção de resíduos, poeira, óleo e outros contaminantes, atendendo indústrias, fábricas e canteiros de obras. Nosso serviço contribui para a conservação dos equipamentos, a eficiência operacional e a segurança dos trabalhadores.</p>
                </div>
            </section>
            <section className="bg-gradient-to-b from-faixa1 to-faixa2 w-full h-auto">
                <h3 className="text-2xl font-bold text-left text-wrap ml-8 pt-6 mr-32 text-primary">Conheça também alguns de nossos equipamentos</h3>
            </section>
            <section>
                <h3 className="text-3xl font-bold text-left text-wrap ml-8 pt-6 mr-32">Nossa Expertise,
                    Seu Sucesso:</h3>
                    <h4 className="text-2xl font-bold text-left text-wrap ml-8 mr-32">Soluções Inteligentes para Todos os Projetos</h4>
                <p className="sm: text-lg  text-left pb-8 text-wrap mx-12 my-4">Nossa equipe possui ampla experiência para auxiliá-los na melhor opção e atender vossas necessidades.
                    Contamos com uma equipe de profissionais qualificados e comprometidos com a qualidade e segurança de nossos serviços.
                    Estabelecemos uma relação transparente com nossos clientes, oferecendo suporte através o atendimento diferenciado, em horario comercial e uma equipe para atendimentos emergenciais
                    Estamos preparados para atender clientes de pequeno, médio e grande porte, oferecendo sempre uma solução inteligente e econômica para quem precisa de serviços de terraplenagem, transporte, infraestrutura e locação de equipamentos.</p>
            </section>
            <section className="bg-gradient-to-b from-faixa1 to-faixa2 w-full h-auto">
                <h3 className="text-3xl font-bold text-left text-wrap ml-8 pt-6 mr-32 text-primary">Por que escolher a GRT Engenharia?</h3>
                <div>
                    <div>
                    <img src="" alt="" />
                    <p  className="sm: text-lg  text-left pb-8 text-wrap mx-12 my-4 text-primary">Experiência consolidada no mercado.</p>
                    </div>
                    <div>
                    <img src="" alt="" />
                    <p className="sm: text-lg  text-left pb-8 text-wrap mx-12 my-4 text-primary">Equipamentos de ponta e equipe qualificada</p>
                    </div>
                    <div>
                    <img src="" alt="" />
                    <p className="sm: text-lg  text-left pb-8 text-wrap mx-12 my-4 text-primary">Experiência consolidada no mercado.</p>
                    </div>
                    <div>
                    <img src="" alt="" />
                    <p className="sm: text-lg  text-left pb-8 text-wrap mx-12 my-4 text-primary">Compromisso com prazos e qualidade.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
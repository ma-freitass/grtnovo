import Logo from "../../assets/logo.png"
import Fundo from "../../assets/fundo.png"
import Escavadeira from "../../assets/escavadeira.png"
import Equipamentos from "../../assets/equipamentos.png"
import Carga from "../../assets/carga.png"
import Atuacao from "../../assets/atuacao.png"
import BBR from "../../assets/bbr.png"
import CBSI from "../../assets/cbsi.png"
import Citrino from "../../assets/citrino.png"
import Engeko from "../../assets/engeko.png"
import MBP from "../../assets/mbp.png"
import SG from "../../assets/sg.png"
import Final from "../../assets/final.png"

export default function Home() {
    return (
        <main>
            <section>
                <div>
                    <img className="h-[40%] w-[100%] pb-7" src={Fundo} alt="Equipamentos" />
                </div>
            </section>
            <section>
                <h1 className="sm: text-2xl font-serif font-bold text-center">Conheça nossos serviços</h1>
                <div>
                    <img className="sm: w-[85vw] h-42 object-cover rounded-md m-6 items-center" src={Escavadeira} alt="" />
                    <p className="sm: text-lg font-bold text-left ml-6">- Escavação </p>
                    <p className="sm: text-lg font-bold text-left ml-6">- Carga</p>
                    <p className="sm: text-lg font-bold text-left ml-6">- Transporte e acondicionamento de materiais</p>
                    <ul className="sm: text-lg font-bold flex space-x-3 ml-20 ">
                        <li>• Minério</li>
                        <li>• Carvão</li>
                        <li>• Escória</li>
                    </ul>
                </div>
                <div>
                    <img className="sm: w-[85vw] h-42 object-cover rounded-md m-6 items-center" src={Equipamentos} alt="" />
                    <p className="sm: text-lg font-bold text-left ml-6">- Aluguel de máquinas e equipamentos</p>
                </div>
                <div>
                    <img className="sm: w-[85vw] h-42 object-cover rounded-md m-6 items-center" src={Carga} alt="" />
                    <p className="sm: text-lg font-bold text-left ml-6">- Movimentação de carga</p>
                </div>
            </section>
            <section className="sm: bg-gradient-to-b from-faixa1 to-faixa2 w-full h-auto mt-8">
                <h2 className="sm: text-4xl font-serif font-bold text-left text-primary pt-6 ml-8">Áreas de atuação</h2>
                <img className="sm: w-[85vw] h-42 object-cover rounded-md m-6 items-center" src={Atuacao} alt="Máquina carregando um caminhão" />
                <p className="sm: text-lg text-left ml-6 leading-8 text-primary">A GRT ENGENHARIA e LOCAÇÕES possui cadastro na VALE e hoje estamos executando uma Subestação na unidade de Xerém/RJ.</p>
                <ul className="sm: text-lg text-left ml-12 text-wrap mr-5 text-primary">
                    <li>• Prestação de serviços com movimentação de cargas (Containers/ Equipamentos); </li>
                    <li>• Transporte de reíduos de obra - Classe RDC, A, B, C, 2A e 2B;</li>
                    <li>• Transporte e abastecimento de combustíveis e lubrificantes;</li>
                    <li>• Demolições de grande porte;</li>
                    <li>• Umidificação de vias e materiais;</li>
                    <li>• Limpeza industrial em geral. </li>
                </ul>
                <button className="bg-primary px-12 py-4 rounded-lg ml-16 my-6 font-bold" button onClick={() => window.location.href = '/portifolio'}>Conheça nosso portifólio ➔</button>

            </section>
            <section>
                <h2 className="sm: text-4xl font-serif font-bold text-left pt-6 ml-8">Nossos Clientes</h2>
                <div className="w-[290vw] h-36 p-6 flex">
                    <div>

                        <img src={SG} alt="" />
                    </div>
                    <div>
                        <img src={Engeko} alt="" />
                    </div>
                    <div>
                        <img src={CBSI} alt="" />
                    </div>
                    <div>
                        <img src={MBP} alt="" />
                    </div>
                    <div>
                        <img src={Citrino} alt="" />
                    </div>
                    <div>
                        <img src={BBR} alt="" />
                    </div>
                </div>
            </section>
            <section>
                <img className="sm: ml-10 rounded-lg mt-6" src={Final} alt="" />
                <div className="bg-gradient-to-b from-faixa1 to-faixa2 w-full h-auto -mt-32 pt-32">

                <h2 className="sm: text-4xl font-serif font-bold text-left text-primary pt-6 ml-8">Faça seu orçamento!</h2>
                <p className="sm: text-lg text-left ml-6 leading-8 text-primary p-4">A GRT Engenharia está pronta para transformar seus desafios em soluções. Entre em contato conosco e descubra como podemos ajudar você a alcançar o sucesso em seus projetos com qualidade, segurança e eficiência.</p>
                <button className="bg-primary px-20 py-4 rounded-lg ml-20 my-6 font-bold">Fale conosco ➔</button>
                </div>
            </section>
        </main>
    );
}
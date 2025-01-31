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
            <img src={Logo} alt="" />
            </div>
            <div>
                <img src={Fundo} alt="" />
            </div>
        </section>
        <section>
            <h1>Conheça nossos serviços</h1>
            <div>
                <img src={Escavadeira} alt="" />
                <p>Escavação </p>
                <p>Carga</p> 
                <p>transporte e acondicionamento de materiais</p>
                <ul>
                    <li>Minério</li>
                    <li>Carvão</li>
                    <li>Escória</li>
                </ul> 
            </div>
            <div>
                <img src={Equipamentos} alt="" />
                <p>- Aluguel de máquinas e equipamentos</p>
            </div>
            <div>
                <img src={Carga} alt="" />
                <p>- Movimentação de carga</p>
            </div>
        </section>
        <section>
            <h2>Áreas de atuação</h2>
            <img src={Atuacao} alt="" />
            <p>A GRT ENGENHARIA e LOCAÇÕES possui cadastro na VALE e hoje estamos executando uma Subestação na unidade de Xerém/RJ.</p>
            <ul>
                <li>Prestação de serviços com movimentação de cargas (Containers/ Equipamentos); </li>
                <li>Transporte de reíduos de obra - Classe RDC, A, B, C, 2A e 2B;</li>
                <li>Transporte e abastecimento de combustíveis e lubrificantes;</li>
                <li>Demolições de grande porte;</li>
                <li>Umidificação de vias e materiais;</li>
                <li>Limpeza industrial em geral. </li>
            </ul>
            <button>Conheça nosso portifólio</button>
        </section>
        <section>
            <h2>Nossos Clientes</h2>
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
        </section>
        <section>
            <img src={Final} alt="" />
            <h2>Faça seu orçamento!</h2>
            <p>A GRT Engenharia está pronta para transformar seus desafios em soluções. Entre em contato conosco e descubra como podemos ajudar você a alcançar o sucesso em seus projetos com qualidade, segurança e eficiência.</p>
            <button>Fale conosco</button>
        </section>
      </main>
    );
  }
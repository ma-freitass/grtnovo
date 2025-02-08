import Fundo from "../../assets/fundo.png"
import Escavadeira from "../../assets/escavadeira.jpg"
import Equipamentos from "../../assets/equipamentos.jpg"
import Carga from "../../assets/carga.jpg"
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
                <h1 className="text-3xl font-Quantico font-bold text-center py-8">Conheça nossos serviços</h1>
                <div className="flex justify-center p-2 mx-10 max-tablet:flex-col">
                    <div>
                        <img className="w-[90%]  h-42 object-cover rounded-md m-6 items-center" src={Escavadeira} alt="" />
                        <p className="text-lg font-bold text-left ml-6">- Escavação </p>
                        <p className="text-lg font-bold text-left ml-6">- Carga</p>
                        <p className="text-lg font-bold text-left ml-6">- Transporte e acondicionamento de materiais</p>
                        <ul className="text-lg font-bold flex space-x-3 ml-20 ">
                            <li>• Minério</li>
                            <li>• Carvão</li>
                            <li>• Escória</li>
                        </ul>
                    </div>
                    <div>
                        <img className="w-[90%] h-42 object-cover rounded-md m-6 items-center" src={Equipamentos} alt="" />
                        <p className="text-lg font-bold text-left ml-6">- Aluguel de máquinas e equipamentos</p>
                    </div>
                    <div>
                        <img className="w-[90%] h-42 object-cover rounded-md m-6 items-center" src={Carga} alt="" />
                        <p className="text-lg font-bold text-left ml-6">- Movimentação de carga</p>
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-b from-faixa1 to-faixa2 h-auto my-10 ">

                    <h2 className="text-4xl font-Quantico font-bold text-center text-primary pt-10 text-nowrap">Áreas de atuação</h2>
                <div className="flex max-tablet:flex-col h-auto p-10 gap-10 justify-center items-center" >
                    <div className="w-2/5 max-laptop:w-full flex justify-center items-center">

                        <img className="w-[70vw] h-auto object-cover rounded-md" src={Atuacao} alt="Máquina carregando um caminhão" />
                    </div>
                    <div className="w-1/3 max-laptop:w-full flex flex-col justify-center items-start">

                        <p className="text-lg text-left ml-6 leading-8 text-primary">A <span className="font-bold text-2xl">GRT ENGENHARIA E LOCAÇÕES</span> possui cadastro na VALE e hoje estamos executando uma Subestação na unidade de Xerém/RJ.</p>
                        <ul className="text-lg text-left ml-12 text-wrap mr-5 text-primary">
                            <li>• Prestação de serviços com movimentação de cargas (Containers/ Equipamentos); </li>
                            <li>• Transporte de reíduos de obra - Classe RDC, A, B, C, 2A e 2B;</li>
                            <li>• Transporte e abastecimento de combustíveis e lubrificantes;</li>
                            <li>• Demolições de grande porte;</li>
                            <li>• Umidificação de vias e materiais;</li>
                            <li>• Limpeza industrial em geral. </li>
                        </ul>
                        <button className="bg-primary px-12 py-4 rounded-lg mx-4 my-6 font-bold" button onClick={() => window.location.href = '/portifolio'}>Conheça nosso portifólio ➔</button>

                    </div>
                </div>

            </section>
            <section>
                <h2 className="text-4xl font-Quantico font-bold text-left pt-6 ml-8">Nossos Clientes</h2>
                <div className="w-[355vw] max-laptop:w-[680vw] h-auto p-6 flex gap-10 animate-slide whitespace-nowrap justify-center">
                    <div className="w-[300%]">

                        <img src={SG} alt="" />
                    </div>
                    <div className="w-[300%]">
                        <img src={Engeko} alt="" />
                    </div>
                    <div className="w-[300%]">
                        <img src={CBSI} alt="" />
                    </div>
                    <div className="w-[300%]">
                        <img src={MBP} alt="" />
                    </div>
                    <div className="w-[300%]">
                        <img src={Citrino} alt="" />
                    </div>
                    <div className="w-[300%]">
                        <img src={BBR} alt="" />
                    </div>
                    <div  className="w-[300%]">

                        <img src={SG} alt="" />
                    </div>
                    <div  className="w-[300%]">
                        <img src={Engeko} alt="" />
                    </div>
                    <div  className="w-[300%]">
                        <img src={CBSI} alt="" />
                    </div>
                    <div  className="w-[300%]">
                        <img src={MBP} alt="" />
                    </div>
                    <div  className="w-[300%]">
                        <img src={Citrino} alt="" />
                    </div>
                    <div  className="w-[300%]">
                        <img src={BBR} alt="" />
                    </div>
                    <div  className="w-[300%]">

                        <img src={SG} alt="" />
                    </div>
                    <div  className="w-[300%]">
                        <img src={Engeko} alt="" />
                    </div>
                    <div  className="w-[300%]">
                        <img src={CBSI} alt="" />
                    </div>
                    <div  className="w-[300%]">
                        <img src={MBP} alt="" />
                    </div>
                    <div  className="w-[300%]">
                        <img src={Citrino} alt="" />
                    </div>
                    <div  className="w-[300%]">
                        <img src={BBR} alt="" />
                    </div>
                </div>
            </section>
            <section>
                <div className="flex flex-row max-laptop:flex-col bg-gradient-to-b from-faixa1 to-faixa2 py-10 w-full">

                <img className="rounded-xl my-6 mx-8 object-cover w-1/2 max-laptop:w-full h-auto justify-center" src={Final} alt="" />
                <div className="w-full h-auto place-content-center">

                    <h2 className="text-4xl font-Quatico font-bold text-left text-primary pt-6 ml-8 ">Faça seu orçamento!</h2>
                    <p className="text-lg text-left ml-6 leading-8 text-primary p-4">A GRT Engenharia está pronta para transformar seus desafios em soluções. Entre em contato conosco e descubra como podemos ajudar você a alcançar o sucesso em seus projetos com qualidade, segurança e eficiência.</p>
                    <button className="bg-primary px-20 py-4 rounded-lg ml-20 my-6 font-bold"  button onClick={() => window.location.href = '/contact'}>Fale conosco ➔</button>
                </div>
                </div>
            </section>
        </main>
    );
}
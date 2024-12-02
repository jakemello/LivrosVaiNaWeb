import s from './inicio.module.scss'
import imagem1 from '../../assets/imagem1doação.png'
import imagem2 from '../../assets/imagem2doação.png'
import imagem3 from '../../assets/imagem3doação.png'
import imagem4 from '../../assets/imagem4doação.png'

export default function Inicio(){
    return (
        <main>
            <section className={s.primeiraSessaoInicio}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={s.porqueDoarSection}>
                <h2>Por que devo doar?</h2>
                <div className={s.cardMotivos}>
                    <section>
                    <img src={imagem1} alt="Imagem ilustrando circulo social de quatro pessoas." />
                    <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </section>
                    <section>
                        <img src={imagem2} alt="Imagem ilustrando pessoa lendo." />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </section>
                    <section>
                        <img src={imagem3} alt="Imagem ilustrando seis pessoas transformando vidas." />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </section>
                    <section>
                        <img src={imagem4} alt="Imagem ilustrando balança representando igualdade." />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </section>
                </div>
            </section>
        </main>
    )
}
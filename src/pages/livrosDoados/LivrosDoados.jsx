import livroProtagonista from '../../assets/livroProtagonista.png'
import livroPequenoPrincipe from '../../assets/livroPequenoPrincipe.png'
import livroMeninaQueRoubavaLivros from '../../assets/livroMeninaQueRoubavaLivros.png'
import livroGuerraDosTronos from '../../assets/livroGuerraDosTronos.png'
import livroRetratoDorianGray from '../../assets/livroRetratoDorianGray.png'
import livroDiarioDeUmBanana from '../../assets/livroDiarioDeUmBanana.png'
import livroReliqueasDaMorte from '../../assets/livroReliquiasDaMorte.png'
import livroLeagueOfRuneterra from '../../assets/livroLeagueOfRuneterra.png'
import s from './livrosDoados.module.scss'

export default function LivrosDoados(){
    return(
        <section className={s.livrosDoadosSection}>
            <h2>Livros Doados</h2>
            <section className={s.containerCards}>
                <section>
                    <img src={livroProtagonista} alt="Imagem do livro o Protagonista." />
                    <div>
                    <h3>O protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                    </div>
                </section>           
        <section>
          <img src={livroPequenoPrincipe} alt="Imagem do livro O Pequeno Príncipe." />
          <div>
            <h3>O Pequeno Príncipe</h3>
            <p>Antoine de Saint-Exupéry</p>
            <p>Ficção</p>
          </div>
        </section>
        <section>
          <img src={livroMeninaQueRoubavaLivros} alt="Imagem do livro A Menina que Roubava Livros." />
          <div>
            <h3>A Menina que Roubava Livros</h3>
            <p>Markus Zusak</p>
            <p>Ficção/Drama</p>
          </div>
        </section>
        <section>
          <img src={livroGuerraDosTronos} alt="Imagem do livro Guerra dos Tronos." />
          <div>
            <h3>Game of Thrones</h3>
            <p>George R.R. Martin</p>
            <p>Fantasia</p>
          </div>
        </section>
        <section>
          <img src={livroRetratoDorianGray} alt="Imagem do livro O Retrato de Dorian Gray." />
          <div>
            <h3>O Retrato de Dorian Gray</h3>
            <p>Oscar Wilde</p>
            <p>Clássico</p>
          </div>
        </section>
        <section>
          <img src={livroDiarioDeUmBanana} alt="Imagem do livro Diário de um Banana." />
          <div>
            <h3>Diário de um Banana</h3>
            <p>Jeff Kinney</p>
            <p>Infantojuvenil</p>
          </div>
        </section>
        <section>
          <img src={livroReliqueasDaMorte} alt="Imagem do livro Harry Potter e as Relíquias da Morte." />
          <div>
          <h3>Harry Potter e as Relíquias da Morte</h3>
            <p>J.K. Rowling</p>
            <p>Fantasia</p>
          </div>
        </section>
        <section>
          <img src={livroLeagueOfRuneterra} alt="Imagem do livro League of Runeterra: Realms of Runeterra." />
          <div>
          <h3>League of Legends: Realms of Runeterra</h3>
            <p>Riot Games</p>
            <p>Universo de Ficção</p>
          </div>
        </section>
      </section>
    </section>
  )
}

import iconeLivroForm from '../../assets/iconeLivroForm.png'
import s from './queroDoar.module.scss'
export default function QueroDoar(){
    return(
        <section className={s.queroDoarSection}>
            <p><strong><i>Por favor, preencha o formulário com suas informações e as informações do Livro</i></strong></p>
            <form method="post" action="">
                <div>
                    <img src={iconeLivroForm} alt="Imagem com icone de livro aberto com capa azul." />
                    <h2><strong>Informações do Livro</strong></h2>
                </div>
                <input type="text" name="" id="" placeholder='Título'/>
                <input type="text" name="" id="" placeholder='Categoria'/>
                <input type="text" name="" id="" placeholder='Autor'/>
                <input type="url" name="" id="" placeholder='Link da Imagem'/>
                <input type="submit" value="Doar" className={s.buttonDoar}/>
            </form>
        </section>
    )
}
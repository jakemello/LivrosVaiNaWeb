import axios from 'axios'
import iconeLivroForm from '../../assets/iconeLivroForm.png'
import s from './queroDoar.module.scss'
import { useState } from 'react'

export default function QueroDoar(){

    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [autor, setAutor] = useState('')
    const [image_url, setImage_url] = useState('')

    const capturaTitulo = (e) => {
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) => {
        setAutor(e.target.value)
    }

    const capturaImagem = (e) => {
        setImage_url(e.target.value)
    }

    const enviarDados = async (e) => {

        const endpointApi = 'https://api-livros-55ne.onrender.com/doar'
        const dadosAEnviar ={
            titulo,
            categoria,
            autor,
            image_url
        }

        await axios.post(endpointApi, dadosAEnviar)
        alert('Seu livro foi doado com sucesso, Obrigada! 🥰')


        setTitulo('')
        setCategoria('')
        setAutor('')
        setImage_url('')
    }

    return(
        <section className={s.queroDoarSection}>
            <p><strong><i>Por favor, preencha o formulário com suas informações e as informações do Livro</i></strong></p>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <img src={iconeLivroForm} alt="Imagem com icone de livro aberto com capa azul." />
                    <h2><strong>Informações do Livro</strong></h2>
                </div>
                <input type="text" placeholder='Título' value={titulo} onChange={capturaTitulo} required/>
                <input type="text" placeholder='Categoria' value={categoria} onChange={capturaCategoria} required/>
                <input type="text" placeholder='Autor' value={autor} onChange={capturaAutor} required/>
                <input type="url"  placeholder='Link da Imagem' value={image_url} onChange={capturaImagem} required/>
                <input type="submit" value="Doar" className={s.buttonDoar} onClick={enviarDados}/>
            </form>
        </section>
    )
}
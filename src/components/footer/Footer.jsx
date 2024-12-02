import logoFacbook from '../../assets/logoFacebook.png'
import logoX from '../../assets/logoX.png'
import logoYoutube from '../../assets/logoYoutube.png'
import logoLinkedin from '../../assets/logoLinkedin.png'
import logoInstagram from '../../assets/logoInstagram.png'
import s from './footer.module.scss'

export default function Footer(){
    return (
        <footer>
           <section className={s.contatosFooter}>
            <p><strong>4002-8922</strong></p>
            <nav>
                <a target="_blank" href="https://www.facebook.com/vainaweb"><img src={logoFacbook} alt="Icone logo do Facebook"/></a>
                <a target="_blank" href="https://x.com/vainaweb"><img src={logoX} alt="Icone logo do X"/></a>
                <a target="_blank" href="https://www.youtube.com/channel/UCzUldn76ZB0b-g6WOij9m3w"><img src={logoYoutube} alt="Icone logo Youtube"/></a>
                <a target="_blank" href="https://www.linkedin.com/company/vainaweb/posts/?feedView=all"><img src={logoLinkedin} alt="Icone logo do Linkedin"/></a>
                <a target="_blank" href="https://www.instagram.com/vainaweb/"><img src={logoInstagram} alt="Icone logo do Instagram"/></a>
            </nav>
           </section> 
           <section className={s.copyright}>
            <p> <i>© Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </i></p>
           </section>
        </footer>
    )
}
import gmail from "../assets/gmail.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github-mark.png"


export default function Footer(){
    return(
        <main className='footer'>
        <a href="https://github.com/dayo-frontdev" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="github" /></a> 
        <a href="mailto:dayofrontdev@gmail.com">
        <img src={gmail} alt="gmail" /></a>
        <a href="https://www.linkedin.com/in/olawale-dayo-201919368/" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="linkedin" /></a>
        <a href="https://x.com/dayo_frontdev" target="_blank" rel="noopener noreferrer">
        <img src={twitter} alt="twitter" /></a>
        <a href="https://instagram.com/dayo_frontdev" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="instagram" /></a>
        </main>
    )
}
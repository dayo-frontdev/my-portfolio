import logo from "../assets/logo.PNG"
import clsx from "clsx"
import { useState, useRef } from "react"
import Contact from "./Contact"
import About from "./About"
import Projects from "./Projects"

export default function Header(props){
const {contact, project, about, home} = props
const [ isToggle, setToggle] = useState(false)

function handleAbout(){
    <About about={about}/>
    setToggle(false)
about.current.scrollIntoView({behavior: 'smooth'})
}
function handleContact(){
<Contact contact={contact}/>
    setToggle(false)
contact.current.scrollIntoView({behavior: 'smooth'})
}
function handlProject(){
    <Projects project={project}/>
    setToggle(false)
project.current.scrollIntoView({behavior: 'smooth'})
}

function handleDropToggle(){
    setToggle(prev=> !prev)
}
const showDropDown = clsx("drop-list", isToggle && "show")
const showDropicon = clsx("bar", isToggle && "active")




  return( 
     <>
    <nav className="header">
        <div className="home-logo">
        <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="nav-menu">
        <button onClick={handleDropToggle} className={showDropicon}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={showDropDown}>
        <li><img className="profile-pic" src="/src/assets/profile_pic.jpeg" alt=""/></li>
        <li> <img className="dropdown-icon"  src="/src/assets/phone.png" alt="" />
         <a className="phone-me" href="tel:+2349160327025">
            <button>CALL ME</button>
            </a></li>
        <li>
           <img  className="dropdown-icon" src="/src/assets/contacts.png" alt="" /> <button onClick={handleContact}>CONTACT</button>  
        </li>
    
        <li>
          <img className="dropdown-icon"  src="/src/assets/project_icon.png" alt="" /> <button onClick={handlProject}> PROJECT</button> 
        </li>
    
        <li>
          <img className="dropdown-icon"  src="/src/assets/about.png" alt="" /> <button onClick={handleAbout}>ABOUT</button> 
        </li></ul>
        </div>
    </nav>
<section ref={home}>
       <h1 className="name">OLAWALE DAYO</h1>
    <section className="hero-section">
        <div>
       <h2 className="role">FRONT-END DEVELOPER</h2>
       {/* <button onClick={handleContact} className="goto-contact">Hire Me</button> */}
       <div className="social-link">
       <a href="https://github.com/dayo-frontdev" target="_blank" rel="noopener noreferrer">
        <img src='/src/assets/github-mark.png' alt="github" /></a> 
        <a href="mailto:dayofrontdev@gmail.com">
        <img src='/src/assets/gmail.png' alt="gmail" /></a>
        <a href="https://www.linkedin.com/in/olawale-dayo-201919368/" target="_blank" rel="noopener noreferrer">
        <img src='/src/assets/linkedin.png' alt="linkedin" /></a>
        <a href="https://x.com/dayo_frontdev" target="_blank" rel="noopener noreferrer">
        <img src='/src/assets/twitter.png' alt="twitter" /></a>
        <a href="https://instagram.com/dayo_frontdev" target="_blank" rel="noopener noreferrer">
        <img src='/src/assets/instagram.png' alt="instagram" /></a>
        </div>
       </div>
       <div>
       <p className="description">I design and build responsive,
         user-friendly websites using modern tools like React etc.
         focused on performance and clean code.</p>
       <button onClick={handlProject} className="goto-project">View Projects</button>
       </div>
    </section>
    </section>
    </>)
}
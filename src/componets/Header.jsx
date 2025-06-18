import logo from "../assets/logo.PNG"
import clsx from "clsx"
import { useState, useRef } from "react"
import Contact from "./Contact"
import About from "./About"
import Projects from "./Projects"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github-mark.png"
import contactIcon from "../assets/contacts.png"
import projectIcon from "../assets/project_icon.png"
import profilePic from "../assets/profile_pic.jpeg"
import gmail from "../assets/gmail.png"
import phone from "../assets/phone.png"
import aboutMe from "../assets/about.png"
import resume from "../assets/dayofrontend.pdf"


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
        <li><img className="profile-pic" src={profilePic} alt="profile-image"/></li>
        <li> <img className="dropdown-icon"  src={phone} alt="" />
         <a className="phone-me" href="tel:+2349160327025">
            <button>CALL ME</button>
            </a></li>
        <li>
           <img  className="dropdown-icon" src={contactIcon} alt="contact-me" /> <button onClick={handleContact}>CONTACT</button>  
        </li>
    
        <li>
          <img className="dropdown-icon"  src={projectIcon} alt="project-icon" /> <button onClick={handlProject}> PROJECT</button> 
        </li>
    
        <li>
          <img className="dropdown-icon"  src={aboutMe} alt="" /> <button onClick={handleAbout}>ABOUT</button> 
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
        <img src={github} alt="github" /></a> 
        <a href="mailto:dayofrontdev@gmail.com">
        <img src={gmail} alt="gmail" /></a>
        <a href="https://www.linkedin.com/in/olawale-dayo-201919368/" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="linkedin" /></a>
        <a href="https://x.com/dayo_frontdev" target="_blank" rel="noopener noreferrer">
        <img src={twitter} alt="twitter" /></a>
        <a href="https://instagram.com/dayo_frontdev" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="instagram" /></a>
        </div>
       </div>
       <div>
       <p className="description">I design and build responsive,
         user-friendly websites using modern tools like React etc.
         focused on performance and clean code. <span className="resume">
          <a href="https://raw.githubusercontent.com/dayo-frontdev/my-resume/main/Dayo-Front-End-cv.pdf"
          target="_blank" rel="noopener noreferrer" download >Download Resume</a>
          </span></p>
         
       <button onClick={handlProject} className="goto-project">View Projects</button>
       </div>
    </section>
    </section>
    </>)
}
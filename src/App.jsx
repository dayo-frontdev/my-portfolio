import Header from "./componets/Header"
import About from "./componets/About"
import Projects from "./componets/Projects"
import Contact from "./componets/Contact"
import Footer from "./componets/footer"
import "./index.css"
import { useRef } from "react"

function App() {
const contact = useRef(null)
const project = useRef(null)
const about = useRef(null)
const home = useRef(null)

  return (
    <main className="lock">
     <Header  contact={contact} project={project} about={about} home={home}/>
     <About about={about}/>
     <Projects project={project}/>
     <Contact contact={contact}/>
     <Footer/>
    </main>
  )
}

export default App

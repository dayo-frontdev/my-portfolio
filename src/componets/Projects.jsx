import chef from "../assets/chefcloud.png"
import chefRes from "../assets/chefresponse.png"
import tenzies from "../assets/newtenzies.png"
import tenziesWon from "../assets/wontenzies.png"
import assembly from "../assets/newassembly.png"
import assemblyWon from "../assets/wonassembly.png"
import assemblylost from "../assets/lostassembly.png"
import { nanoid } from "nanoid"
import { useState, useEffect, useRef } from "react"




export default function Projects(props){

    
    
    const tech = "HTML, CSS, React, JavaScript"
    const chefCloud = [{img: chef, title: "Chef Cloud Input UI", techStack:tech, id: nanoid()},
        {img: chefRes, title: "Chef AI Respond", techStack: tech, id: nanoid()}]
        const tenziesGame = [{img: tenzies, title: "Tenzies Game",techStack: tech, id: nanoid()},
        {img: tenziesWon, title: "Tenzies You Won", techStack: tech, id: nanoid()}]
        const assemblyGame = [{img: assembly, title:"Assembly Game" , techStack: tech, id: nanoid()},
        {img: assemblyWon, title: "Game Won" ,techStack: tech, id: nanoid()},
        {img: assemblylost, title:"Game Lost", techStack: tech, id: nanoid()}]
         
        const cards = [chefCloud, tenziesGame, assemblyGame]
        // GOAL: creating an auto moving slider that continuously scrolls to right - infinitely
        // I need use state to track current index
        // need effect to handle dom
        // i need to clone card when the default slides end

        // Track each carousel separately:
const [currentIndices, setCurrentIndices] = useState(cards.map(() => 0));


//  interval logic:
useEffect(() => {
  const intervals = cards.map((card, i) => 
    setInterval(() => {
      setCurrentIndices(prev => {
        const newIndices = [...prev];
        newIndices[i] = (newIndices[i] + 1) % card.length;
        return newIndices;
      });
    }, 3000)
  );
  return () => intervals.forEach(clearInterval);
}, []);

// target each wrapper and container array
const wrapperRefs = useRef([]);
const containerRefs = useRef([]);

useEffect(() => {
  wrapperRefs.current.forEach((wrapper, i) => {
    if (wrapper && containerRefs.current[i]?.offsetWidth) {
      wrapper.scrollTo({
        left: currentIndices[i] * containerRefs.current[i]?.offsetWidth,
        behavior: 'smooth'
      });
    }
  });
}, [currentIndices]);





const projectsCard = cards.map((card, i)=>{
   const cardElement = card.map((slide, j) =>{
    return ( <article ref={el => containerRefs.current[j] = el} key={slide.id}  className="cards">
           <img src={slide.img} alt={slide.title} />
           <div className="card-content"> <h2>{slide.title}</h2>
           <p>{slide.techStack}</p>
           </div>
       </article>)
     })
    

    return(
        <section  ref={el => wrapperRefs.current[i] = el}  key={nanoid()} className="project-cards">
{cardElement}
        </section>
    )
})



    return(
        <main ref={props.project} className="projects-section">
        <h1 >Projects</h1>
    {projectsCard}
</main>
    )
}

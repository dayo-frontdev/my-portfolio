export default function About(props){

    return(
        <>
        <section ref={props.about} className="about-me">
            <h1 >
                About
            </h1>

            <p className="bio">
            Hi, I’m Olawale Dayo, a frontend
             developer and Computer Science student at the National Open University of 
             Nigeria (NOUN). I enjoys turning ideas
              into interactive, responsive websites.
               I specialize in HTML, CSS, JavaScript, and modern tools like React. 
               My goal is to build clean, user-focused 
            interfaces that work smoothly
             across all devices.
            <br/> <br/>
             Beyond code, I’m curious,
             creative, and always learning.
             Whether I’m refining UI details
             or solving layout bugs, I genuinely
             enjoy the process of building and improving digital experiences. Every project is a chance to grow and deliver something meaningful.
            </p>
        </section>
        
        </>
    )
}
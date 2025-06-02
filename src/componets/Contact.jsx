import emailjs from 'emailjs-com'

export default function Contact(props){



function sendEmail(event){
event.preventDefault()

const form = event.target


const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID
const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const contact_id = import.meta.env.VITE_EMAILJS_CONTACT_ID
const public_id = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

emailjs.sendForm(service_id, contact_id, form, public_id);

emailjs.sendForm(service_id, template_id, form, public_id)
.then(() => alert("Sent"))
.catch(()=> alert("Message Failed"))

}


    return(
        <main ref={props.contact} className="contact-section">
            <h1 >Contact</h1>
        <p>Have an idea, opportunity, or just want to say hi?
             Don't hesitate to reach out i'd love to connect!.</p>
        <form onSubmit={sendEmail} className="contact-form">
            <div>
            <label htmlFor="">Name
            </label>
            <input name="name" placeholder=" your name?" type="text" required/>
            </div>
            <div>
            <label htmlFor="">Email
            </label>
            <input name="email" placeholder="jonhdoe@email.com" type="email" required/>
             </div>
            <div>
            <label htmlFor="">Subject
            </label>
            <input name="subject" placeholder="Subject?" type="text" required/>
            </div> 
             <div>
            <label htmlFor="">Message
            </label>
            <textarea name="message" className="message-box" placeholder="Write your message here" type="text" required/>
            </div>
            <button  className="submit-button">Submit</button>
        </form>
            
        </main>
    )
}
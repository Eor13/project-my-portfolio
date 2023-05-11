import "./contact.css";
import { useContext } from 'react';
import { ThemeContext } from '../services/themeContext';

const Contact =() =>{
    const {theme} = useContext(ThemeContext)
    return(
        <section className="containerForm">
            <h1 style={{color:theme.color}}>Adorei receber um email seu!</h1>
            <form target="_blank" action="https://formsubmit.co/2af952cff878e67081a68146c5baf415" method="POST" className>
                <div class="row">
                    <Input type="text" name="name" className="form-control" placeholder="Full Name" required/>
                    <Input type="email" name="email" className="form-control" placeholder="Email Address" required/>
                </div>
                <Textarea placeholder="Your Message" className="form-control" name="message" rows="10" required/>
                <div class="row">
                    <button type="submit" class="form-control btnSubmit">Submit Form</button>
                </div>
                <input type="hidden" name="_next" value="http://localhost:3000/successfulSubmission"></input>
                <input type="hidden" name="_template" value="box"></input>
            </form>
        </section>
    )
}
const Input  =(props)=>{
    const {theme} = useContext(ThemeContext)
    return <input {...props} style={{color:theme.background, background: theme.color}}/>

}
const Textarea  =(props)=>{
    const {theme} = useContext(ThemeContext)
    return <textarea {...props} style={{color:theme.background, background: theme.color}}/>

}
export {Contact}
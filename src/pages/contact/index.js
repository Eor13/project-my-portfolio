import { BtnSubmit, ContainerForm, Row, Title, FormControl,  Textarea} from "./style";

const Contact =() =>{
    return(
        <ContainerForm>
            <Title>Adorei receber um email seu!</Title>
            <form target="_blank" action="https://formsubmit.co/2af952cff878e67081a68146c5baf415" method="POST" className>
                <Row>
                    <FormControl type="text" name="name"  placeholder="Full Name" required/>
                    <FormControl type="email" name="email"  placeholder="Email Address" required/>
                </Row>
                <Textarea placeholder="Your Message" name="message" rows="10" required/>
                <Row>
                    <BtnSubmit type="submit" >Submit Form</BtnSubmit>
                </Row>
                <FormControl type="hidden" name="_next" value="http://localhost:3000/successfulSubmission"></FormControl>
                <FormControl type="hidden" name="_template" value="box"></FormControl>
            </form>
        </ContainerForm>
    )
}


// const Input  =(props)=>{
//     const {theme} = useContext(ThemeContext)
//     return <input {...props} style={{color:theme.colorSecondary, background: theme.colorPrimary}}/>

// }
// const Textarea  =(props)=>{
//     const {theme} = useContext(ThemeContext)
//     return <textarea {...props} style={{color:theme.colorSecondary, background: theme.colorPrimary}}/>

// }
export {Contact}
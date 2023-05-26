import { BtnSubmit, ContainerForm, Row, Title, FormControl,  Textarea} from "./style";

const Contact =() =>{
    return(
        <>
            <ContainerForm>
                <Title>Adorei receber um email seu!</Title>
                <form target="_blank" action="https://formsubmit.co/2af952cff878e67081a68146c5baf415" method="POST">
                    <Row>
                        <FormControl type="text" name="name"  placeholder="Nome Completo" required/>
                        <FormControl type="email" name="email"  placeholder="Email" required/>
                    </Row>
                    <Textarea placeholder="Sua Mensagem" name="message" rows="10" required/>
                    <Row>
                        <BtnSubmit type="submit" >Enviar Mensagem</BtnSubmit>
                    </Row>
                    <FormControl type="hidden" name="_next" value="http://localhost:3000/successfulSubmission"></FormControl>
                    <FormControl type="hidden" name="_template" value="box"></FormControl>
                </form>
            </ContainerForm>
        </>
    )
}

export {Contact}
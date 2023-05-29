import { ButtonLink, Card, Description, DisplayImage, LinkExt, Title, Ul } from "./style";


const CardProject = ({title, image, description, link, label, techs}) =>{
    // console.log(techs)
    // console.log(JSON.parse(techs))

    return(
        <Card className="card">
            <Title>{title}</Title>
            <DisplayImage className="display" src={image} alt="Everson"/>
            <Description>{description}</Description>
            <Ul>Tecnologias Utilizadas
                {      
                    techs.map((tech,index) =>{
                        return (
                            <li key={index}>{tech}</li>
                        )
                    })
                }
            </Ul>

            <ButtonLink>
                <LinkExt href={link} target="_blank" rel="noreferrer">{label}</LinkExt>
            </ButtonLink>
        </Card>
    )};

CardProject.defaultProps ={
    label: "Veja na integra"
};

export {CardProject};
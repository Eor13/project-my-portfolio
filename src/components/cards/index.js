import { ButtonLink, Card, Description, DisplayImage, LinkExt, Title } from "./style";


const CardProject = ({title, image, description, link, label}) =>{
    return(
        <Card className="card">
            <Title>{title}</Title>
            <DisplayImage className="display" src={image} alt="Everson"/>
            <Description>{description}</Description>
            <ButtonLink>
                <LinkExt href={link} target="_blank" rel="noreferrer">{label}</LinkExt>
            </ButtonLink>
        </Card>
    );
};

CardProject.defaultProps ={
    label: "Veja na integra"
};

export {CardProject};
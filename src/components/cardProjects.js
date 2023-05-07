import "./card.css";


const CardProjects = ({title, image, description, link, label}) =>{
    return(
        <div className="card">
        <h3>{title}</h3>
        <img className="display" src={image} alt="Everson"/>
        <p>{description}</p>
        <button><a href={link} target="_blank">{label}</a></button>
        </div>
    );
};

CardProjects.defaultProps ={
    label: "Veja na integra"
};

export {CardProjects};
import { CardProjects } from "../components/cardProjects";


const Projects =() =>{
    return(
        <section>
            <h1>Meus Projetos</h1>
            <p>Estes são alguns projetos desenvolvidos onde aplico algumas tecnicas e tecnologias de desenvolvimentos aprendidas durante durente meu aprendizado de programador.</p>
            <div>
                <CardProjects/>    
                <CardProjects/>    
                <CardProjects/>    
            </div>            
        </section>
    )
}

export { Projects };
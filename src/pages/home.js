import { About } from "./about";

const Home = () => {
    return(
        <header>
            <h1>Olá, Sou o Everson!</h1>
            <h2>Sou Desenvolvedor Front-end Júnior.</h2>
            <button>Cliqe aqui para conhecer mais sobre mim.</button>
            <About/>
        </header>
    )
}

export {Home};
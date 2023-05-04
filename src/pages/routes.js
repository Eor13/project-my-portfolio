import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { About } from "./about";
import { Projects } from "./projects";
import { NavBar } from "./navbar";
import { Curriculum } from "./Curriculum";
import { Contact } from "./contact";


const AppRoutes =() =>{
    return(
        <BrowserRouter>
            <NavBar/>
            <Outlet/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/projects" element={<Projects/>}/>
                <Route exact path="/Curriculum" element={<Curriculum/>}/>
                <Route exact path="/Contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export {AppRoutes}
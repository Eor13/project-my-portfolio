import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Projects } from "./projects";
import { NavBar } from "./navbar";
import { Contact } from "./contact";
import { Curriculum } from "./Curriculum";


const AppRoutes =() =>{
    return(
        <BrowserRouter>
            <NavBar/>
            <Outlet/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/projects" element={<Projects/>}/>
                <Route exact path="/curriculum" element={<Curriculum/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export {AppRoutes}
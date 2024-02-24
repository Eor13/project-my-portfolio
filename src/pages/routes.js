import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Projects } from "./projects";
import { Curriculum } from "./curriculum";
import { About } from "./about";


const AppRoutes =() =>{
    return(
        <BrowserRouter>
            <Outlet/>
            <Routes>
                <Route exact path="/" element={<About/>}/>
                <Route exact path="/projects" element={<Projects/>}/>
                <Route exact path="/curriculum" element={<Curriculum/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export {AppRoutes}
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Projects } from "./projects";
import { Contact } from "./contact";
import { Curriculum } from "./curriculum";
import { About } from "./about";
import { SuccessfulSubmission } from "./successfulSubmission";


const AppRoutes =() =>{
    return(
        <BrowserRouter>
            <Outlet/>
            <Routes>
                <Route exact path="/" element={<About/>}/>
                <Route exact path="/projects" element={<Projects/>}/>
                <Route exact path="/curriculum" element={<Curriculum/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
                <Route exact path="/successfulSubmission" element={<SuccessfulSubmission/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export {AppRoutes}
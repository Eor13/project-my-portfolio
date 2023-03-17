import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { About } from "./about";
import App from "../App";
// import { Contact } from "./contact";

const AppRoutes =() =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<App/>}>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact element={<About/>}/>
                    {/* <Route exact element={<Contact/>}/> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export {AppRoutes}
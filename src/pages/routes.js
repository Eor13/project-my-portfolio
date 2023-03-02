import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { About } from "./about";
import App from "../App";

const AppRoutes =() =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<App/>}>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact element={<About/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export {AppRoutes}
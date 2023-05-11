import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from "../services/themeContext";
import React, { useContext } from "react";
import "./buttons.css";

const ButtonScrollTop =(link) =>{

    const {theme} = useContext(ThemeContext);
    return(
            <a href={link}> <FontAwesomeIcon icon={faArrowCircleUp} style={{color: theme.color, background: theme.background}}/></a>
    );
};

const TogglerButton = (props) => {
    const {theme} = useContext(ThemeContext);
    return(
        <button {...props} className="togglerTheme" style={{color: theme.color, background: theme.background}}>
            <span{...props} style={{background: theme.color}}/>
        </button>
    );
};

export {ButtonScrollTop, TogglerButton};
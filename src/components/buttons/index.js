import { faArrowCircleUp, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { ThemeContext} from "../../services/themeContext";
import { ButtonTheme, LinksFooter, StyleFontAwesomeIconArrowCircleUp, ButtonScroll,StyleFontAwesomeIconCircle} from "./style";
import {useState} from "react";

const ButtonScrollTop =({link}) =>{
    return <a href={link} > <StyleFontAwesomeIconArrowCircleUp icon={faArrowCircleUp} /></a>
};
const ButtonScrollTopAbout =({link}) =>{
    return <ButtonScroll href={link} > <StyleFontAwesomeIconArrowCircleUp icon={faArrowCircleUp} /></ButtonScroll>
};

const TogglerButton = (props) => {
    return(
        <ButtonTheme {...props}> 
            <StyleFontAwesomeIconCircle  {...props} icon={faCircleHalfStroke} />
        </ButtonTheme>
    );
};


const LinkSocialMedias =(props) =>{
    return <LinksFooter {...props} target="_blank" rel="noreferrer"/>
}

const ThemeTogglerButton =(props) =>{
    const { theme, upDateTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        upDateTheme(newTheme);
    }
    
    return <TogglerButton onClick={toggleTheme}/>
};


export {ButtonScrollTop, ButtonScrollTopAbout, TogglerButton, LinkSocialMedias, ThemeTogglerButton };
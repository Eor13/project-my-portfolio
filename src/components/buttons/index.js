import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../services/themeContext";
import React, { useContext } from "react";
import { ButtonTheme, LinksFooter, SpanTheme, StyleFontAwesomeIconArrowCircleUp } from "./style";

const ButtonScrollTop =({link}) =>{

    const {theme} = useContext(ThemeContext);
    return(
            <a href={link} > <StyleFontAwesomeIconArrowCircleUp icon={faArrowCircleUp} style={{color: theme.colorText}}/></a>
    );
};

const TogglerButton = (props) => {
    const {theme} = useContext(ThemeContext);
    return(
        <ButtonTheme {...props}style={{ background: theme.colorText}}>
            <SpanTheme {...props} style={{ background: theme.colorBackgroung}}/>
        </ButtonTheme>
    );
};


const LinkSocialMedias =(props) =>{
    <LinksFooter {...props} target="_blank" rel="noreferrer"/>
}

export {ButtonScrollTop, TogglerButton, LinkSocialMedias };
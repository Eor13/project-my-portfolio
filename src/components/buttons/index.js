import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { ThemeContext} from "../../services/themeContext" 
import { ButtonTheme, LinksFooter, SpanTheme, StyleFontAwesomeIconArrowCircleUp } from "./style";
import yinYang from "../../images/yin-yang.png"

const ButtonScrollTop =({link}) =>{
    return <a href={link} > <StyleFontAwesomeIconArrowCircleUp icon={faArrowCircleUp} /></a>
};

const TogglerButton = (props) => {
    return(
        <ButtonTheme {...props}> 
            <SpanTheme {...props}>
                <img src={yinYang} alt="yin-yang símbolo"/>
            </SpanTheme>
        </ButtonTheme>
    );
};


const LinkSocialMedias =(props) =>{
    return <LinksFooter {...props} target="_blank" rel="noreferrer"/>
}

const ThemeTogglerButton =() =>{
    const { theme, upDateTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        upDateTheme(newTheme);
    }
    
    return <TogglerButton onClick={toggleTheme} />

};


export {ButtonScrollTop, TogglerButton, LinkSocialMedias, ThemeTogglerButton };
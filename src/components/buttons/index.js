import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";
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


export {ButtonScrollTop, TogglerButton, LinkSocialMedias };
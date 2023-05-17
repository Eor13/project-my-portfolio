import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { ButtonTheme, LinksFooter, SpanTheme, StyleFontAwesomeIconArrowCircleUp } from "./style";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMoon, faSun} from "@fortawesome/free-solid-svg-icons";

const ButtonScrollTop =({link}) =>{
    return <a href={link} > <StyleFontAwesomeIconArrowCircleUp icon={faArrowCircleUp} /></a>
};

const TogglerButton = (props) => {
    return(
        <ButtonTheme {...props}> 
            <SpanTheme {...props}>
                {/* <FontAwesomeIcon icon={faMoon} width="15px" height="15px" color="white"className='icon'/>   
                <FontAwesomeIcon icon={faSun} className='icon'/>  */}
            </SpanTheme>
        </ButtonTheme>
    );
};


const LinkSocialMedias =(props) =>{
    return <LinksFooter {...props} target="_blank" rel="noreferrer"/>
}

export {ButtonScrollTop, TogglerButton, LinkSocialMedias };
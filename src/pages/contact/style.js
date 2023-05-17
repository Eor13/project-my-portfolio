import { styled } from "styled-components";
import { themes } from "../../services/themeContext";

const ContainerForm = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 75vh;
`

const Title = styled.h1`
font-size: 2rem;
margin: 15px 0;
color:${({theme}) => theme.colorPrimary}
`

const FormControl = styled.input`
    border:8px solid ${({theme}) => theme.colorDetails};
    border-radius: 8px ;
    width: 100%;
    padding: 10px;
    max-height: 350px;
    margin-bottom: 15px;
    color: ${themes.dark.colorSecondary};
    background-color: ${ themes.dark.colorPrimary};
`

const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 15px;

`
const BtnSubmit = styled.button`
    width: 50%;
    background-color: ${themes.dark.colorPrimary};
    border:8px solid ${({theme}) => theme.colorDetails};
    border-radius: 8px ;
    padding: 10px;
    max-height: 350px;
    margin-bottom: 15px;
    font-weight: 700;
`
const Textarea = styled.textarea`
    border:8px solid ${({theme}) => theme.colorDetails};
    border-radius: 8px ;
    width: 100%;
    padding: 10px;
    max-height: 350px;
    margin-bottom: 15px;
    color: ${themes.dark.colorSecondary};
    background-color: ${themes.dark.colorPrimary};
`

export {BtnSubmit, FormControl, Row, Title, ContainerForm, Textarea}
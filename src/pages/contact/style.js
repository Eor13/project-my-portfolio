import { styled } from "styled-components";

const ContainerForm = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 70.5vh;
    @media(max-width: 500px) {
        width: 85%;
    }
`

const Title = styled.h1`
    font-size: 2rem;
    margin: 15px 0;
    color:${({theme}) => theme.colorPrimary};
    @media(max-width: 500px) {
        font-size: 1.8rem;
    }
`

const FormControl = styled.input`
    border:8px solid ${({theme}) => theme.colorDetails};
    border-radius: 8px ;
    width: 100%;
    padding: 10px;
    max-height: 350px;
    margin-bottom: 15px;
    color: ${({theme}) => theme.colorSecondary};
    background-color: ${({theme}) => theme.colorPrimary};
`

const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 15px;

`
const BtnSubmit = styled.button`
    width: 50%;
    background-color: ${({theme}) => theme.colorPrimary};
    border:8px solid ${({theme}) => theme.colorDetails};
    color: ${({theme}) => theme.colorSecondary};
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
    max-height: 300px;
    margin-bottom: 15px;
    color: ${({theme}) => theme.colorSecondary};
    background-color: ${({theme}) => theme.colorPrimary};
`

export {BtnSubmit, FormControl, Row, Title, ContainerForm, Textarea}
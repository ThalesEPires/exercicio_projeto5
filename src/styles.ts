import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
        background-color: #ccc;
    }
`

export const MainContainer = styled.main`
    padding: 0 40px;
    heigth: 100vh;
    overflow-y: scroll;
`
export const Titulo = styled.h2`
    display: block;
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 18px;
    font-weigth: bold;
`

export const Container = styled.div`
    display: block;
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    align-items: center;
`

export const Botao = styled.button`
    font-weigth: bold;
    font-size: 12px;
    color: #fff;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    background-color: #546284;
    border-radius: 8px;
    margin-right: 8px;
`

export default EstiloGlobal
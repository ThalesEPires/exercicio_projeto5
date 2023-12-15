import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    max-width: 547px;
    width: 100%;
    font-weight: bold;
    font-size: 14px;
    color: #666666;
    margin: 0 auto;
`

export const MainContainer = styled.main`
    padding: 0 40px;
    heigth: 100vh;
    overflow-y: scroll;
    margin-bottom: 28px;
`
export const Nome = styled.h2`
    display: flex;
    font-size: 32px;
    font-weigth: bold;
    margin: 40px auto;
    justify-content: center;
`

export const Campo = styled.input`
    padding: 8px;
    background-color: #fff;
    border-radius: 8px;
    font-weigth: bold;
    color: #666666;
    border-color: #666666;
    width: 100%;
    border: none;
    margin: 0 8px;
`

export const BotaoSalvar = styled.button`
    background-color: #2ecc71;
    font-weight: bold;
    border: none;
    padding: 8px;
    border-radius: 6px;
    cursor: pointer;
`
import styled from 'styled-components'

import { Botao } from '../../styles'

export const Card = styled.div`
    background-color: #81ecec;
    border: 2px solid #000;
    padding: 16px;
    list-style: none;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 8px;
`

export const Titulo = styled.h3`
    font-size: 18px;
    font-weigth: bold;
    margin-left: 8px;
    background-color: transparent;
`

export const BarraAcoes = styled.div`
    display: none;
    text-decoration: none;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
    background-color: #e74c3c;
`

export const BotaoEditar = styled(Botao)`
    background-color: #34495e;
`

export const BotaoCard = styled.div`
    background-color: transparent;
    margin-top: 12px;
`

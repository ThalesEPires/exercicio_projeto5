import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Tarefa'

type ContatosState = {
    length: unknown
    itens: Contato[]
}

const initialState: ContatosState = {
    itens: [
        {
            id: 1,
            nome: 'Thales Pires',
            email: 'teste@teste.com',
            telefone: '01 12345678'
        },
        {
            id: 2,
            nome: 'Maria',
            email: 'teste2@teste2.com',
            telefone: '01 987654321'
        },
        {
            id: 3,
            nome: 'João',
            email: 'teste3@teste3.com',
            telefone: '01 01010101'
        }
    ],
    length: undefined
}

const contatosSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<number>) => {
            state.itens = [
            ...state.itens.filter((contato) => contato.id !== action.payload)
            ]
        },
        editar: (state, action: PayloadAction<Contato>) => {
            const indexDaTarefa = state.itens.findIndex(
            (t) => t.id === action.payload.id 
            )

            if (indexDaTarefa >= 0) {
            state.itens[indexDaTarefa] = action.payload
            }
        },
        cadastrar: (state, action: PayloadAction<Contato>) => {
            const ultimoContato = state.itens[state.itens.length - 1]

            const contatoNovo = {
            ...action.payload,
            id: ultimoContato ? ultimoContato.id + 1 : 1
        }
            state.itens.push(contatoNovo)
            }
        }
    }
)


export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer

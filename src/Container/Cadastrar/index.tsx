import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { cadastrar } from '../../Store/Reducers/contatos'
import { Form, Nome, MainContainer, BotaoSalvar, Campo} from './styles'
import Contato from '../../models/Tarefa'

const Cadastrar = () => {
    const dispatch = useDispatch()
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')

    const cadastrarContato = (evento: FormEvent) => {
        evento.preventDefault()
        const contatoParaAdicionar = new Contato(
            nome,
            telefone,
            email,
            1
        )

    dispatch(cadastrar(contatoParaAdicionar))
    }

    return (
        <MainContainer>
            <Nome>Novo Cadastro</Nome>
            <Form onSubmit={cadastrarContato}>
            <Campo
                value={nome}
                onChange={({ target }) => setNome(target.value)}
                type="text"
                placeholder="Nome"
            />
            <Campo
                value={telefone}
                onChange={({ target }) => setTelefone(target.value)}
                type="tel"
                placeholder="Telefone"
            />
            <Campo
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                type="email"
                placeholder="Email"
            />
                <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
            </Form>
        </MainContainer>
    )
}

export default Cadastrar

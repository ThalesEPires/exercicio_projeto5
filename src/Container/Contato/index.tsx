import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover, editar } from '../../Store/Reducers/contatos'
import TarefaClass from '../../models/Tarefa'
type Props = TarefaClass

const Contatos = ({
    nome: nomeOriginal,
    telefone: telefoneOriginal,
    email: emailOriginal,
    id
}: Props) => {
    const dispatch = useDispatch()
    const [estaEditando, setEstaEditando] = useState(false)
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        if (nomeOriginal.length > 0) {
            setNome(nomeOriginal)
        }
        if (nomeOriginal.length > 0) {
            setTelefone(telefoneOriginal)
        }
        if (nomeOriginal.length > 0) {
            setEmail(emailOriginal)
        }
    }, [nomeOriginal, emailOriginal, telefoneOriginal])
    

    function cancelarEdicao() {
        setEstaEditando(false)
        setNome(nomeOriginal)
        setTelefone(telefoneOriginal)
        setEmail(emailOriginal)
    }

    return (
        <S.Card>
            <S.Nome value={nome} onChange={(evento) => setNome(evento.target.value)}>{nome}</S.Nome>
            <S.EmailTelefone value={telefone} onChange={(evento) => setTelefone(evento.target.value)}>{telefone}</S.EmailTelefone>
            <S.EmailTelefone value={email} onChange={(evento) => setEmail(evento.target.value)}>{email}</S.EmailTelefone>
            <S.BarraAcoes>
                {estaEditando ? (
                    <>
                        <S.BotaoSalvar
                            onClick={() => {
                            dispatch(
                                editar({
                                    nome,
                                    telefone,
                                    email,
                                    id
                            })
                        )
                        setEstaEditando(false)
                        }}
                        >
                        Salvar
                        </S.BotaoSalvar>
                        <S.BotaoCancelarRemover onClick={cancelarEdicao}>
                            Cancelar
                        </S.BotaoCancelarRemover>
                    </>
                ) : (
                <>
                <S.BotaoEditar onClick={() => {setEstaEditando(true)}}>Editar</S.BotaoEditar>
                    <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
                        Remover
                    </S.BotaoCancelarRemover>
                </>
            )}
            </S.BarraAcoes>
        </S.Card>
    )
}

export default Contatos
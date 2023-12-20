import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover, editar } from '../../Store/Reducers/contatos'
import TarefaClass from '../../models/Tarefa'
import { Botao, BotaoSalvar } from '../../styles'
type Props = TarefaClass

const Contatos = ({
    nome: nomeOriginal,
    telefone,
    email,
    id
}: Props) => {
    const dispatch = useDispatch()
    const [estaEditando, setEstaEditando] = useState(false)
    const [nome, setNome] = useState('')

    useEffect(() => {
        if (nomeOriginal.length > 0) {
            setNome(nomeOriginal)
        }
    }, [nomeOriginal])

    function cancelarEdicao() {
        setEstaEditando(false)
        setNome(nomeOriginal)
    }

    return (
        <S.BarraAcoes>
            {estaEditando ? (
                <>
                    <BotaoSalvar
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
                    </BotaoSalvar>
                    <S.BotaoCancelarRemover onClick={cancelarEdicao}>
                        Cancelar
                    </S.BotaoCancelarRemover>
                </>
            ) : (
                <>
                <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
                    <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
                        Remover
                    </S.BotaoCancelarRemover>
                </>
            )}
            </S.BarraAcoes>
    )
}

export default Contatos
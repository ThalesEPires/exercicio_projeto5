import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover, editar } from '../../Store/Reducers/contatos'
import TarefaClass from '../../models/Tarefa'
import { Botao, BotaoSalvar } from '../../styles'
type Props = TarefaClass

const ListaDeContatos = ({
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
        <S.Card>
        <S.Titulo>Maria</S.Titulo>
        <S.Titulo>01 123456789</S.Titulo>
        <S.Titulo>Maria@teste.com</S.Titulo>
        <S.BotaoCard>
        <S.BotaoEditar>Editar</S.BotaoEditar>
        <S.BotaoCancelarRemover>Remover</S.BotaoCancelarRemover>
        </S.BotaoCard>

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
        </S.Card>
    )
            }

export default ListaDeContatos
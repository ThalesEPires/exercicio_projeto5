import { useSelector } from 'react-redux'

import { RootReducer } from '../../Store'
import Contatos from '../Contato'
import { MainContainer } from '../../styles'


const ListaDeContatos = () => {
    const { contatos } = useSelector((state: RootReducer) => state)

    return (
        <MainContainer>
            <ul>
                {contatos.itens.map((c) => (
                    <li key={c.id}>
                        <Contatos
                        id={c.id}
                        telefone={c.telefone}
                        nome={c.nome}
                        email={c.email}
                        />
                    </li>
                ))}
            </ul>
    </MainContainer>
    )
}

export default ListaDeContatos
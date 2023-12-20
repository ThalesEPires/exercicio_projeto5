import { Provider } from "react-redux"
import EstiloGlobal from "./styles"
import store from './Store'
import Cadastrar from "./Container/Cadastrar"
import ListaDeContatos from "./Container/ListaDeContatos"

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <div className="container">
        <Cadastrar />
        <ListaDeContatos />
      </div>
    </Provider>
  )
}

export default App

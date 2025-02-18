import Rodape from "../Rodape"
import Cabecalho from "../Cabecalho"
import Menu from "../Menu"


function Home() {

    return (
        <div>
            <Cabecalho
                titulo="Titulo informado"
                pagina="Pagina informado"
                parametro="Parametro informado" />
            <h2> Conteudos </h2>
            <Rodape />
        </div>
    )
}

export default Home

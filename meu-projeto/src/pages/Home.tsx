import Rodape from "../components/rodape"
import Cabecalho from "../components/cabecalho"



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

import { useNavigate } from "react-router-dom"
import Cabecalho from "../Cabecalho"
import Rodape from "../Rodape"

function Cadastro() {

    const navegacao = useNavigate();

    function HandleVoltar() {
        navegacao('/');

    }
    return (
        <div>
            <Cabecalho
                titulo="Titulo informado"
                pagina="Pagina informado"
                parametro="Parametro informado" />
            Faça seu cadastro
            <Rodape />
            <br /><br />
            <button onClick={HandleVoltar} > VOLTAR </button>
        </div>
    )
}

export default Cadastro
import { useNavigate } from "react-router-dom"
import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";

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
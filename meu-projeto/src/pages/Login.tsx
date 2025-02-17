import { useNavigate, useParams } from "react-router-dom";
import Cabecalho from "../Cabecalho"
import Rodape from "../Rodape"

function Login() {

    
    const QualquerCoisa = useParams();
    const navegacao = useNavigate();

    function HandleVoltar (){

        navegacao('/');
    }
    return (
        <div>
            <Cabecalho />
            Faça seu login
            <Rodape />
            <br /><br />
            <button onClick={HandleVoltar} > VOLTAR</button>
        </div>
    )
}

export default Login
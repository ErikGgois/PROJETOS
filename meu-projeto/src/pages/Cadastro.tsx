import { useNavigate } from "react-router-dom"
import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";
import { useState } from "react";

function Cadastro() {
    const [nomeCliente, setnomeCliente] = useState('');
    function changeNomeCliente(modificacao: React.ChangeEvent<HTMLInputElement>){
        setnomeCliente(modificacao.target.value);
    }

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
            <input type="text" onChange={changeNomeCliente} />
            <br />
            o valor digitado é: {nomeCliente}
            <button onClick={HandleVoltar} > VOLTAR </button>
        </div>
    )
}

export default Cadastro
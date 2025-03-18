import Cabecalho from "../components/cabecalho/index"
import { useState } from "react"

function Requisicoes () {

    const [produtos , setProdutos] = useState([]);

    const carregarProdutos = () => {
        fetch('https://fakestoreapi.com/products')

        .then ((Response) => {
            return Response.json();
        })
        
        .then ((json) => {
            setProdutos(json);
        })
    }



    return (
        <div>

            <Cabecalho/>

                <hr />
                <hr />

            <button onClick={carregarProdutos}>Carregar Produtos </button>

            total de produtos: {produtos.length}
            <br />
            <br />

        </div>
    )
}

export default Requisicoes
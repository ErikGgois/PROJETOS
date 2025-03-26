import Cabecalho from "../components/cabecalho/index"
import { useState } from "react"
import { Produto } from "../types/produtos";

function RequisicoesTypes () {

    const [produtos , setProdutos] = useState<Produto[]>([]);

    const carregarProdutos = () => {
        fetch('https://fakestoreapi.com/products')

        .then ((Response) => {
            return Response.json();
        })
        
        .then ((json) => {
            setProdutos(json);
        })

        alert('Produtos carregados com sucesso');
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
            <h1>
                {produtos.map((item, index) =>(
                    <div key={index}>
                        <img src={item.image} className="products" />
                        <br />
                        TITULO DO ITEM: {item.title}
                        <br />
                        DESCRIÇÃO DO ITEM: {item.description}
                        <br />
                        <br />
                    </div>
                ))}
            </h1>

        </div>
    )
}

export default RequisicoesTypes

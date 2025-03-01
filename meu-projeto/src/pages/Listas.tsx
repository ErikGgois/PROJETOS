function Lista(){

    let ListaNomes = [
        "Erik",
        "Fernanda",
        "João",
    ]

    let ListaObj = [
        {nome:"Erik Gazeta", idade: "29"},
        {nome:"Fernanda Gazeta", idade: "26"},
        {nome:"Silmara Gazeta", idade: "51"}
    ]

    return(
        <div>
            <h1>REDERIZAÇÃO DE LISTAS EM REACT</h1>
                {ListaNomes.map(
                    (posicaoAtual, indexAtual) => (
                        <div key={indexAtual}>{posicaoAtual}</div>
                    )
                    )}

                    <br />
                    <hr />

                    <h1>ENDERIZAÇÃO DE LISTA DE OBJETOS </h1>
                   {ListaObj.map(
                    (objAtual,indexObj) => (
                        <div key={indexObj}>
                            <hr />
                            nome: {objAtual.nome} <br />
                            idade: {objAtual.idade}
                            <hr />
                       </div>
                    )
                   )}

                   <div>
                    
                   </div>
                  
            
        </div>
    )
}

export default Lista;
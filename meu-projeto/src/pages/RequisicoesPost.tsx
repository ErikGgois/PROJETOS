
import React, { useState } from 'react';
import { Usuarios } from '../types/usuarios';
function RequisicoesPost () {

    const [usuarios, setUsuarios] = useState<Usuarios[]>([]);
    const [loading, setLoading] = useState(false);
    

    const carregarUsuarios = async () => {
        setLoading(true);
        let response = await fetch('https://jsonplaceholder.typecode.com/todos/1');
        let json = await response.json();

        const dataArray = Array.isArray(json) ? json : [json]

        setLoading(false);
        setUsuarios(dataArray);
        
    return (
        <div>
            <h1>PAGINA EXEMPLO DE REQUISIÇÕES</h1>
            <button onClick={carregarUsuarios}>Carregar Usuarios</button>
            <br />
            Total de usuarios : 1
            <hr />
            <h1>Lista de produtos</h1>            
            USER ID: 1
            <br />
            TITULO: delectus aut autem
            <hr />
        </div>
    )
}
}

export default RequisicoesPost
import { useState } from "react";
import "../estilo/estiloCalculadora.css"


function Calculadora(){

    const [Number1, setNumber1] = useState(0);
	const [Number2, setNumber2] = useState(0);
	const [Resultado, setResultado] = useState(0);
	

    function changeNumber1(modificacao: React.ChangeEvent<HTMLInputElement>){
        setNumber1(Number(modificacao.target.value));}

	function changeNumber2(modificacao: React.ChangeEvent<HTMLInputElement>){
			setNumber2(Number(modificacao.target.value));}

    function HandleMais (){
	return setResultado (Number1 + Number2);
}

function HandleMenos (){
	return setResultado (Number1 - Number2);
}

function HandleDividir (){
	return setResultado (Number1 / Number2);
}

function HandleMultiplicar (){
	return setResultado (Number1 * Number2);
}


	return(
		<div className="containerPrincipal">
			<div className="Container1">
			<input type="text" onChange={changeNumber1} />
            <br />
            <h3>NUMERO 1</h3> {}
			<input type="text" onChange={changeNumber2} />
			<h3>NUMERO 2</h3> {}

			<div className="Container2">
			<button className="Botao" onClick={HandleMais}><h2>+</h2></button>
			<button className="Botao" onClick={HandleMenos}><h2>-</h2></button>
			<button className="Botao" onClick={HandleMultiplicar}><h2>X</h2></button>
			<button className="Botao" onClick={HandleDividir}><h2>/</h2></button>
			</div>

			<div className="container3"><h3>resultado {Resultado}</h3> </div>

		</div>
		</div>
	)
}

export default Calculadora
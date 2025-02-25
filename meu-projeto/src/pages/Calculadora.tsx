import { useState } from "react";


function Calculadora(){

    const [Number1, setNumber1] = useState('');
	const [Number2, setNumber2] = useState('');
	const [setResultado] = useState('');
	

    function changeNumber1(modificacao: React.ChangeEvent<HTMLInputElement>){
        setNumber1(modificacao.target.value);}

	function changeNumber2(modificacao: React.ChangeEvent<HTMLInputElement>){
			setNumber2(modificacao.target.value);}
	



	return(
		<div>
			<input type="text" onChange={changeNumber1} />
            <br />
            NUMERO 1 {Number1}
			<input type="text" onChange={changeNumber2} />
			NUMERO 2 {Number2}

			<div><button><h2>SOMAR</h2></button>
			<button><h2>SUBTRAIR</h2></button>
			<button><h2>MULTIPLICAR</h2></button>
			<button><h2>DIVIDIR</h2></button>
			</div>

<div>resultado {setResultado}</div>

		</div>
	)
}

export default Calculadora
import '../../estilo/estilo.css'
import { Link } from 'react-router-dom'



function Cabecalho() {
    return (
        <div className='Cabe1'>
            <div className='Cabe2'>
                <div className='HomeLink'><Link to='/'><h2> home </h2></Link> </div>
                <div className='LoginLink'><Link to='/login'><h2> login </h2> </Link> </div>
                <div className='CadastroLink'><Link to='/cadastro'> <h2> cadastro </h2></Link></div>
                <div className='Calculadora'><Link to='/calculadora'> <h2> calculadora </h2> </Link> </div>
                <div className='cabecalhocanto'>
                </div>

            </div>

        </div>

    )
}

export default Cabecalho
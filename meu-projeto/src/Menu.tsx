import './estilo/estilo.css'
import { Link } from 'react-router-dom'

function Menu() {
    return(
    <div className='ContainerCabecalho'>
        <div className='Login'> 
        <Link to='/'> Login </Link>
        </div>

        <div className='Cadastro'> 
        <Link to='/'> Cadastro </Link>
        </div>

        <div className='Sobre'> 
        <Link to='/'> Sobre </Link>
        </div>

    </div>
    
    )
}

export default Menu
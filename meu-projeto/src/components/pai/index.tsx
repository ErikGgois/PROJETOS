import '../../estilo/estilo.css'
import Filho from '../filho'

function Pai(){

    function Handleclick(){
        alert('Mesagem disparada no Pai')
    }

    return(
        <div className='Pai-container'>
            <Filho texto="origem do texto = Pai"
                FN_Acao={Handleclick}/>
            <br />
            
        </div>
    )
}

export default Pai
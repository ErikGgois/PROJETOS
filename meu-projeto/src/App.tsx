// import Componentes from './Componentes'
import './estilo/estilo.css'
// import './FlexDirection'
// import FlexDirection from './FlexDirection'
// import Menu from './Menu'
// import Rodape from './Rodape'
import Home from './pages/home'
import Sobre from './pages/sobre' 
import { Routes,Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sobre' element={<Sobre/>} />
    </Routes>

   /* <div>
      <Menu />
      <Componentes />
      <Rodape />
    </div> */

    
/* atividade quadro colorido  
<div>
  <FlexDirection/>
</div>
*/



   /* primeira atividade<>

      <div className='container'>

        <div className='filho1'>

          <div className='neto1-1'>
          </div>

          <div className='neto1-2'>
          </div>

          <div className='neto1-3'>
          </div>

        </div>

        <div className='filho2'>

          <div className='neto2-1'>
          </div>

          <div className='neto2-2'>
            <div className='bis2-1'>
            <div className='tatara1-1'></div>
            <div className='tatara1-2'></div>
            </div>
            <div className='bis2-2'>
              <div className='tatara2-1'></div>
              <div className='tatara2-2'></div>
            </div>
          </div>

        </div>

        <div className='filho3'>

          <div className='neto3-1'>
          </div>

          <div className='neto3-2'>
          </div>

        </div>

      </div>

    </> */
  )
}

export default App

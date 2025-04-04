// import Componentes from './Componentes'
import './estilo/estilo.css'
import Cadastro from './pages/Cadastro'
// import './FlexDirection'
// import FlexDirection from './FlexDirection'
// import Menu from './Menu'
// import Rodape from './Rodape'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/Notfound'
import Sobre from './pages/Sobre' 
import { Routes,Route } from 'react-router-dom'
import Calculadora from './pages/Calculadora'
import Lista from './pages/Listas'
import Comunicacao from './pages/Comunicacao'
import Requisicoes from './pages/Requisicoes'
import RequisicoesPost from './pages/RequisicoesPost'
import RequisicoesTypes from './pages/RequisicoesTypes'


function App() {

  return (
    <Routes>
      <Route path='*' element={<NotFound/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/sobre' element={<Sobre/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/cadastro' element={<Cadastro/>} />
      <Route path='/calculadora' element={<Calculadora/>} />
      <Route path='lista' element={<Lista/>} />
      <Route path='Comunicacao' element={<Comunicacao/>} />
      <Route path='/Requisicoes' element={<Requisicoes/>} />
      <Route path='/RequisicoesTypes' element={<RequisicoesTypes/>} />
      <Route path='/RequisicoesPost' element={<RequisicoesPost/>} />
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

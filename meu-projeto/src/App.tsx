import './estilo/estilo.css'

function App() {

  return (
    <>

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

    </>
  )
}

export default App

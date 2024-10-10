import Form from './components/Form'


function App() {


  return (
    <>
        <header className='bg-pink-600 py-3'>
          <div className='max-w-4xl mx-auto flex justify-between'>
            <h1 className='text-center text-lg font-bold text-white uppercase'>Contador de Calorías</h1>
          <button></button>
          </div>
        </header>

        <section className='bg-lime-500 py-20 px-5'>
          <div className='max-w-4xl mx-auto'>
            <Form/>
          </div>
        </section>
    </>
  )
}

export default App

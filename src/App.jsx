
import response from './mocks/response.json'
import './App.css'
import { Animes } from './components/Animes' 

function App() {
  const animes = response.data


  return (
    <div className='page'>

      <header>
        <h1>Animes Flims</h1>
        <form action="">
          <input type="text" />
          <button>Buscar</button>
        </form>
      </header>

      <main>
        <h1>Pelis</h1>
        <Animes animes={animes}/>
      </main>

    </div>
  )
}

export default App

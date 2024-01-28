import { useAnimes } from './hooks/useAnimes'
import { useState, useEffect, useRef } from 'react'
import './App.css'
import { Animes } from './components/Animes' 


function useQuery() {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const firstInput = useRef(true)

  useEffect(()=> {
    if(firstInput.current) {
      firstInput.current = query === ''
      return
    }
    if (query === "") {
      setError('Debes introducir un Anime')
      return
    }

    setError(null)
  }, [query])

  return {query, setQuery, error}
}


function App() {
  const {query,setQuery,error} = useQuery()
  const {animes, getAnimes} = useAnimes( query )


  const handleSubmit = (event) => {
    event.preventDefault()
    getAnimes()
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }



  return (
    <div className='page'>

      <header>
        <h1>Animes Flims</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name='query' type="text" placeholder='Attack On Tittan, Koe No Katachi...' />
          <button>Buscar</button>
        </form>
        {error && <p>{error}</p> }
      </header>

      <main>
        <h1>Animes</h1>
        <Animes animes={animes}/>
      </main>

    </div>
  )
}

export default App

import { useState } from 'react'
import results from '../mocks/response.json'

export function useAnimes(query) {
    const [response, setResponseAnimes] = useState([])
    const animes = response.data
    const mappedAnimes = animes?.map(anime => ({
      id: anime.mal_id,
      title: anime.title,
      poster: anime.images.jpg.image_url,
      year: anime.year
    }))

    const getAnimes = () => {
        if(query) {
            // setResponseAnimes(results)
            fetch(`https://api.jikan.moe/v4/anime?q=${query}&sfw=true`)
                .then(res => res.json())
                .then(json => setResponseAnimes(json))
        } else {
            setResponseAnimes(results)
        }
    }
  
    return {animes: mappedAnimes, getAnimes}
  }
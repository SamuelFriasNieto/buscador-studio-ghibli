export function ListOfAnimes ( {animes} ) {
    return (
        <ul>
        {animes.map(anime => (
          <li key={anime.id}>
            <h3>{anime.title}</h3>
            <p>{anime.year}</p>
            <img src={anime.poster} alt="" />
          </li>
        ))}
        </ul>
    )
}

export function MissingAnimes() {
    return (
        <p>No se encontraron animes para esta busqueda</p>
    )
}

export function Animes({ animes }) {
    const hasAnimes = animes?.length > 0

    return (
        hasAnimes
        ? <ListOfAnimes animes={animes}/>
        : <MissingAnimes/>
    )
}
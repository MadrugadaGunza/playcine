const MovieCard = ({ movie }) => {
    return (
        <li key={movie.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Poster do filme ${movie.title}`} />
            <div className="mt-4">
                <h3>{movie.title}</h3>

                <div className="content">
                    <div className="rating">
                        <img src="star.svg" alt="Avaliação" />
                        <p>{movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}</p>
                    </div>

                    <span>*</span>
                    <span className='lang'>{movie.original_language}</span>
                    <span>*</span>
                    <p className="year">{movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}</p>
                </div>
            </div>
        </li>
    )
}

export default MovieCard
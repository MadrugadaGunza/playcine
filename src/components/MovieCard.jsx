const MovieCard = ({ movie }) => {
    return (
        <li key={movie.id} className="movie-card">
            <img
                src={movie ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'not-image.png'}
                alt={`Poster do filme ${movie?.title}`}
            />
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
                <button className="text-md bg-amber-300 w-full mt-4 py-2 rounded-md text-amber-950 cursor-pointer hover:bg-amber-400 transition-colors">
                    Ver detalhes
                </button>
            </div>
        </li>
    )
}

export default MovieCard
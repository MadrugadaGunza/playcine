// dependency imports
import React from "react";
import { BASE_URL } from "./services/api";
import { GET_MOVIES_OPTIONS } from "./services/movie";
import { useDebounce } from "use-debounce";
import { getTrendingMovies, updateSearchCount } from "./appwrite";
// component imports
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";

const App = () => {
  const [moviesList, setMoviesList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const [searchTerm, setSearchTerm] = React.useState('');
  const [debounceSearchTerm] = useDebounce(searchTerm, 500);

  const [trendingMovies, setTrendingMovies] = React.useState([]);

  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const endpoint = query ? `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}` : `${BASE_URL}/discover/movie?sort_by=popularity.desc`

      const response = await fetch(endpoint, GET_MOVIES_OPTIONS);
      if (!response.ok) throw new Error(`Erro ao buscar filmes: ${response.status}`);
      const data = await response.json();
      if (!data.results || data.results.length === 0) {
        setErrorMessage("Nenhum filme encontrado.");
        setMoviesList([]);
        return;
      }

      setMoviesList(data.results || []);

      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }
    } catch (error) {
      console.error("Erro ao buscar filmes: ", error);
      setErrorMessage("Não foi possível obter os filmes. Tente novamente mais tarde.");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  const loadTrendingMovies = async () => {
    try {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
    } catch (error) {
      console.error("Erro ao carregar filmes em alta: ", error);
      setErrorMessage("Não foi possível carregar os filmes em alta. Tente novamente mais tarde.");
    }
  }

  React.useEffect(() => {
    fetchMovies(debounceSearchTerm);
  }, [debounceSearchTerm]);

  React.useEffect(() => {
    loadTrendingMovies();
  }, []);

  return (
    <main>
      <title>PlayCine | Buscar filmes, Ver lançamentos e Descobrir o que assistir</title>
      <meta name="description" content="Explore milhares de filmes, veja lançamentos, avaliações e descubra o que assistir hoje. Busca rápida e recomendações inteligentes no PlayCine." />

      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Encontre os{" "}
            <span className="bg-linear-to-r from-[#d6c7ff] to-[#ab8bff] bg-clip-text text-transparent">
              Filmes
            </span>{" "}
            que você vai adorar sem complicações
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        {trendingMovies.length > 0 && (
          <section className="trending">
            <h2>Filmes em Alta</h2>

            <ul>
              {trendingMovies.map((movie, index) => (
                <li key={movie.$id}>
                  <p>{index + 1}</p>
                  <img src={movie ? movie.poster_url : 'not-image.png'} alt={movie.title} />
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="all-movies">
          <h2>Todos os filmes</h2>

          {isLoading ? (
            <Spinner />
          ) :
            errorMessage ? <p className="text-red-500">{errorMessage}</p> : (
              <ul className="">
                {moviesList.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
              </ul>
            )}
        </section>
      </div>
    </main>
  )
}

export default App 
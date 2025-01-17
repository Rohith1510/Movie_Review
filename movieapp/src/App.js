import './App.css';
import { useEffect,useState } from 'react';
import MovieCard from './MovieCard';
//http://www.omdbapi.com/?i=tt3896198&apikey=1c298818

const API_KEY = "http://www.omdbapi.com?apikey=1c298818"


const App = () => {
  const[searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies('Batman')
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_KEY}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    
  };

  return (
    <div className="App">
      <h1>Movie la land </h1>
      <div className='search'>
        <input
          placeholder='Search for Movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src='./search.svg'
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
      <div className='container'>
        {movies.map((movie) => (
        <MovieCard movie={movie} />
        ))}
      </div>
      ): (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;


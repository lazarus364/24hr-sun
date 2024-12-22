import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom"
import Home from "../assets/Home";
import Navbar from "../assets/Navbar";

function Movies () {
    const [movies, setMovies] = useState([]);
    const [filter, setFilter] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
    async function fetchMovies() {
        try {
          const response = await fetch('https://api.example.com/movies'); // Replace with a real API URL
          if (!response.ok) {
            throw new Error('Failed to fetch movies');
          }
          const data = await response.json();
          setMovies(data);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      }
  
      fetchMovies();
    }, []);
  
    const filteredMovies = movies
      .filter((movie) =>
        movie.title.toLowerCase().includes(filter.toLowerCase())
      )
      .sort((a, b) =>
        sortOrder === 'asc'
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title)
      );
  
    if (loading) {
      return <p>Loading movies...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }
    })
    return (
        <>
        <h2>Movies</h2>
        <input type="text" placeholder="Search by title..." value={filter} onChange={(e) => setFilter(e.target.value)} />
        <button onClick={() => setSortOrder('asc')}>A-Z</button>
        <button onClick={() => setSortOrder('desc')}>A-Z</button>
        <div className="movies-grid">
            {filteredMovies.map((movie, index) => (
                <div key={index} className="movie-card">
                    <img src={`movie.posterUrl`} alt={movie.title} />
                    <p>{movie.title} ({movie.year})</p>
                    </div>
            ))}
        </div>
        </>
    )
}

export default Movies

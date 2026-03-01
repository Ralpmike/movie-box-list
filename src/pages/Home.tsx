import { useEffect, useState, type JSX } from "react";
import { getPopularMovies } from "../services/api";
import type { Movie } from "../model/model";
import MovieCard from "../components/MovieCard";

const Home = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<Movie[] | []>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getPopularMovies();
      setMovies(data || []);
    };
    fetchMovies();
  }, []);

  const handleSearchMovie = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSearchMovie} className="flex gap-2">
        <div className="">
          <input
            className=""
            type="text"
            placeholder="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button type="submit" className="">
          Search
        </button>
      </form>
      <div className="grid grid-cols-4 gap-4 p-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;

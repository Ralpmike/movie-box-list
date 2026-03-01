import { Heart } from "lucide-react";
import type { Movie } from "../model/model";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  // const BASE_SRC = "https://image.tmdb.org/t/p/w500";

  function handleFavoriteMovie(): void {
    alert("Favorite movie");
  }
  return (
    <div className="mx-auto ">
      <div className="flex relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.poster_path}
          className=""
        />
        <div className="absolute right-6 top-4">
          <button className="" onClick={handleFavoriteMovie}>
            <Heart />
          </button>
        </div>
      </div>
      <div className="flex flex-col max-w-2xl text-center">
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;

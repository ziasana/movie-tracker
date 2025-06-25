import { useMutation, gql } from "@apollo/client";
import { formatMovieDate } from "../utils/dateUtils";
import { Link } from "react-router-dom";

const ADD_TO_WATCHLIST = gql`
  mutation AddToWatchlist($movieId: ID!) {
    addToWatchlist(movieId: $movieId) {
      id
      watchlist {
        id
        title
      }
    }
  }
`;

export default function MovieCard({ movie }) {
  const [addToWatchlist] = useMutation(ADD_TO_WATCHLIST);
  console.log("MovieCard id:", movie.id);
  return (
    <Link
      to={`/movies/${movie.id}`}
      className="block hover:scale-105 transition-transform"
    >
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <img
          src={"/images/movie-camera-icon.webp"}
          alt={movie.title}
          className="w-full w-25 h-25 object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg">{movie.title}</h3>
          <p className="text-gray-600">
            {movie.release_date && formatMovieDate(movie.release_date)}
          </p>
          <button
            onClick={() => addToWatchlist({ variables: { movieId: movie.id } })}
            className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            + Watchlist
          </button>
        </div>
      </div>
    </Link>
  );
}

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { formatMovieDate } from "../utils/dateUtils";
import LoadingIndicator from "../components/LoadingIndicator";
import { GET_MOVIE_DETAILS } from "../graphql/queries";

export default function MovieDetails() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_MOVIE_DETAILS, {
    variables: { id },
  });

  if (loading) return <LoadingIndicator />;
  if (error)
    return <div className="text-red-500 p-4">Error: {error.message}</div>;

  const movie = data.movie;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <img
            src={"/images/movie-placeholder-details.jpg"} // Placeholder image
            alt={movie.title}
            className="w-full rounded-lg w-100 shadow-lg"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {movie.release_date && formatMovieDate(movie.release_date)}
            </span>
            <span className="flex items-center">
              ⭐ {movie.vote_average?.toFixed(1)}/10
            </span>
          </div>
          <div className="flex gap-2 mb-6">
            {movie.genres?.map((genre) => (
              <span
                key={genre}
                className="bg-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {genre}
              </span>
            ))}
          </div>
          <p className="text-lg leading-relaxed">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

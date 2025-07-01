import { useQuery } from "@apollo/client";
import { useState } from "react";
import MovieCard from "../components/MovieCard";
import LoadingIndicator from "../components/LoadingIndicator";
import { SEARCH_MOVIES } from "../graphql/queries";

export default function SearchMovie() {
  const [query, setQuery] = useState("");
  const { data, loading, error } = useQuery(SEARCH_MOVIES, {
    variables: { query },
    skip: !query,
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        className="w-full p-2 border rounded mb-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <LoadingIndicator />}
      {error && <p className="text-red-500">Error: {error.message}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.searchMovies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

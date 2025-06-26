import { useQuery, gql } from "@apollo/client";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router-dom";
import React from "react";
import LoadingIndicator from "../components/LoadingIndicator";

const GET_WATCHLIST = gql`
  query MyWatchlist {
    myWatchlist {
      id
      title
      poster_path
    }
  }
`;

export default function Watchlist() {
  const navigate = useNavigate();
  const handleInvalidMovie = () => {
    navigate("/404"); // or just navigate('*')
  };
  handleInvalidMovie();

  // Fetch the watchlist data
  const { data, loading, error } = useQuery(GET_WATCHLIST);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Watchlist</h1>
      {loading && <LoadingIndicator />}
      {error && <p className="text-red-500">Error: {error.message}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.myWatchlist?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

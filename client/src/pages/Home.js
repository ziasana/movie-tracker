import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import MovieCard from "../components/MovieCard";
import PaginationControls from "../components/PaginationControls";

const GET_MOVIES = gql`
  query GetMovies($page: Int, $limit: Int) {
    getMovies(page: $page, limit: $limit) {
      movies {
        id
        title
        poster_path
        release_date
      }
      totalCount
      pageInfo {
        currentPage
        totalPages
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Adjust this value as needed

  const { loading, error, data } = useQuery(GET_MOVIES, {
    variables: {
      page: currentPage,
      limit: itemsPerPage,
    },
  });

  if (loading) return <div className="text-center py-8">Loading movies...</div>;
  if (error)
    return <div className="text-red-500 p-4">Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      {/* Search Input */}

      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.getMovies.movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* Pagination Controls */}
      {data.getMovies.totalCount > 0 && (
        <PaginationControls
          currentPage={data.getMovies.pageInfo.currentPage}
          totalPages={data.getMovies.pageInfo.totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      {/* Empty State */}
      {data.getMovies.totalCount === 0 && (
        <div className="text-center py-12 text-gray-500">
          No movies found matching your search.
        </div>
      )}
    </div>
  );
}

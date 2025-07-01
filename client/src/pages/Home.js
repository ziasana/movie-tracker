import { useState } from "react";
import { useQuery } from "@apollo/client";
import MovieCard from "../components/MovieCard";
import PaginationControls from "../components/PaginationControls";
import LoadingIndicator from "../components/LoadingIndicator";
import { GET_PAGINATED_MOVIES } from "../graphql/queries";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  // Define the number of items per page
  // This can be adjusted based on your design or user preference
  const itemsPerPage = 12;

  // Fetch movies with pagination
  // The useQuery hook will automatically refetch data when currentPage changes
  const { loading, error, data } = useQuery(GET_PAGINATED_MOVIES, {
    variables: {
      page: currentPage,
      limit: itemsPerPage,
    },
  });

  if (loading) return <LoadingIndicator />;
  if (error)
    return <div className="text-red-500 p-4">Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.getMoviesWithPagination.movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* Pagination Controls */}
      {data.getMoviesWithPagination.totalCount > 0 && (
        <PaginationControls
          currentPage={data.getMoviesWithPagination.pageInfo.currentPage}
          totalPages={data.getMoviesWithPagination.pageInfo.totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      {/* Empty State */}
      {data.getMoviesWithPagination.totalCount === 0 && (
        <div className="text-center py-12 text-gray-500">
          No movies found matching your search.
        </div>
      )}
    </div>
  );
}

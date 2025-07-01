import { gql } from "@apollo/client";

/**
 * GraphQL query to fetch a paginated list of movies.
 *
 * @constant
 * @type {DocumentNode}
 * @param {Object} variables - Query variables.
 * @param {number} [variables.page] - The current page number (optional).
 * @param {number} [variables.limit] - The number of movies per page (optional).
 * @returns {Object} Result object containing:
 *   - movies {Array<Object>} List of movie objects with id, title, poster_path, and release_date.
 *   - totalCount {number} Total number of movies available.
 *   - pageInfo {Object} Pagination information:
 *       - currentPage {number}
 *       - totalPages {number}
 *       - hasNextPage {boolean}
 *       - hasPreviousPage {boolean}
 */
export const GET_PAGINATED_MOVIES = gql`
  query getMovies($page: Int, $limit: Int) {
    getMoviesWithPagination(page: $page, limit: $limit) {
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

/**
 * GraphQL query to search for movies based on a search string.
 *
 * @constant
 * @type {import('@apollo/client').DocumentNode}
 * @param {Object} variables - The variables for the query.
 * @param {string} variables.query - The search string to find matching movies.
 * @returns {Object} The result contains an array of movies with their id, title, poster path, and release date.
 */
export const SEARCH_MOVIES = gql`
  query SearchMovies($query: String!) {
    searchMovies(query: $query) {
      id
      title
      poster_path
      release_date
    }
  }
`;

/**
 * GraphQL query to fetch detailed information about a movie by its ID.
 *
 * @constant
 * @type {import('@apollo/client').DocumentNode}
 * @param {Object} variables - The variables for the query.
 * @param {string} variables.id - The unique identifier of the movie.
 * @returns {Object} data - The movie details.
 * @returns {string} data.movie.title - The title of the movie.
 * @returns {string} data.movie.overview - The overview or summary of the movie.
 * @returns {string} data.movie.poster_path - The path to the movie's poster image.
 * @returns {string} data.movie.release_date - The release date of the movie.
 * @returns {Array<string>} data.movie.genres - The genres associated with the movie.
 * @returns {number} data.movie.vote_average - The average vote rating of the movie.
 */
export const GET_MOVIE_DETAILS = gql`
  query GetMovieDetails($id: ID!) {
    movie(id: $id) {
      title
      overview
      poster_path
      release_date
      genres
      vote_average
    }
  }
`;

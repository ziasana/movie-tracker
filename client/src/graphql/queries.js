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
export const GET_MOVIES = gql`
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

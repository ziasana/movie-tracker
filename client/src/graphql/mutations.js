import { gql } from "@apollo/client";

/**
 * GraphQL mutation for adding a movie to the user's watchlist.
 *
 * @constant
 * @type {import('@apollo/client').DocumentNode}
 * @param {Object} variables - The variables for the mutation.
 * @param {string} variables.movieId - The ID of the movie to add to the watchlist.
 * @returns {Object} The updated user object with the new watchlist.
 * @returns {string} return.id - The user's ID.
 * @returns {Array<Object>} return.watchlist - The updated watchlist.
 * @returns {string} return.watchlist[].id - The ID of the movie in the watchlist.
 * @returns {string} return.watchlist[].title - The title of the movie in the watchlist.
 */
export const ADD_TO_WATCHLIST = gql`
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

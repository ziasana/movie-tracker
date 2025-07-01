import { gql } from "apollo-server-express";
export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Movie {
    id: ID!
    title: String!
    overview: String!
    poster_path: String
    release_date: String!
    vote_average: Float
    genres: [String!]!
  }

  type MoviePage {
    movies: [Movie!]!
    totalCount: Int!
    pageInfo: PageInfo!
  }

  type PageInfo {
    currentPage: Int!
    totalPages: Int!
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
  }

  type Query {
    users: [User]
    user(id: ID!): User
    movies: [Movie]
    movie(id: ID!): Movie
    searchMovies(query: String!): [Movie!]!
    myWatchlist: [Movie!]!
    getMoviesWithPagination(
      page: Int = 1
      limit: Int = 10
      search: String
    ): MoviePage!
  }

  type Mutation {
    createUser(id: ID!, name: String!, email: String!, age: Int): User
    addToWatchlist(movieId: ID!): User!
    removeFromWatchlist(movieId: ID!): User!
  }
`;

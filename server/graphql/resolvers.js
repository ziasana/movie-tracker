import User from "../models/User.js";
import Movie from "../models/Movie.js";
import mongoose from "mongoose";

export const resolvers = {
  Query: {
    users: async () => await User.find(),
    user: async (_, { id }) => await User.findById(id),
    movies: async () => await Movie.find(),
    movie: async (_, { id }) => {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error("Invalid movie ID");
      }
      const movie = await Movie.findById(id).lean({ virtuals: true });
      if (!movie) throw new Error("Movie not found");
      return movie;
    },
    searchMovies: async (_, { query }) =>
      await Movie.find({
        title: { $regex: query, $options: "i" }, // Case-insensitive search
      }),
    getMovieDetails: async (_, { id }) => await Movie.findById(id),

    getMovies: async (_, { page = 1, limit = 10 }) => {
      const skip = (page - 1) * limit;

      const [movies, totalCount] = await Promise.all([
        Movie.find().skip(skip).limit(limit),
        Movie.countDocuments(),
      ]);

      const totalPages = Math.ceil(totalCount / limit);

      return {
        movies,
        totalCount,
        pageInfo: {
          currentPage: page,
          totalPages,
          hasNextPage: page < totalPages,
          hasPreviousPage: page > 1,
        },
      };
    },
    myWatchlist: async (_, __, { userId }) => {
      const user = await User.findById(userId).populate("watchlist");
      return user.watchlist;
    },
  },
  Mutation: {
    createUser: async (_, { id, name, email, age }) => {
      const user = new User({ id, name, email, age });
      return await user.save();
    },
    addToWatchlist: async (_, { movieId }, { userId }) => {
      const user = await User.findById(userId);
      if (!user) throw new Error("User not found");

      user.watchlist.push(movieId);
      await user.save();
      return user;
    },
    removeFromWatchlist: async (_, { movieId }, { userId }) => {
      const user = await User.findById(userId);
      if (!user) throw new Error("User not found");

      user.watchlist.pull(movieId);
      await user.save();
      return user;
    },
  },
};

import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  poster_path: {
    type: String,
  },
  release_date: {
    type: Date,
    required: true,
  },
  vote_average: Number,
  genres: {
    type: [String],
    required: true,
  },
});

export default mongoose.model("Movie", MovieSchema);

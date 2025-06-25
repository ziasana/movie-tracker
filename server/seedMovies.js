import Movie from "./models/Movie.js";
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const movies = [
  {
    title: "Inception",
    overview: "A thief who steals corporate secrets through dream-sharing technology.",
    poster_path: "/inception.jpg",
    release_date: new Date("2010-07-16"),
    genres: ["Sci-Fi", "Action"],
    vote_average: 8.8
  },
  {
    title: "The Shawshank Redemption",
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster_path: "/shawshank.jpg",
    release_date: new Date("1994-09-23"),
    genres: ["Drama"],
    vote_average: 9.3
  },
  {
    title: "The Godfather",
    overview: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
    poster_path: "/godfather.jpg",
    release_date: new Date("1972-03-24"),
    genres: ["Crime", "Drama"],
    vote_average: 9.2
  },
  {
    title: "The Dark Knight",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster_path: "/darkknight.jpg",
    release_date: new Date("2008-07-18"),
    genres: ["Action", "Crime", "Drama"],
    vote_average: 9.0
  },
  {
    title: "Pulp Fiction",
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    poster_path: "/pulpfiction.jpg",
    release_date: new Date("1994-10-14"),
    genres: ["Crime", "Drama"],
    vote_average: 8.9
  },
  {
    title: "Fight Club",
    overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    poster_path: "/fightclub.jpg",
    release_date: new Date("1999-10-15"),
    genres: ["Drama"],
    vote_average: 8.8
  },
  {
    title: "Forrest Gump",
    overview: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
    poster_path: "/forrestgump.jpg",
    release_date: new Date("1994-07-06"),
    genres: ["Drama", "Romance"],
    vote_average: 8.8
  },
  {
    title: "The Matrix",
    overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    poster_path: "/matrix.jpg",
    release_date: new Date("1999-03-31"),
    genres: ["Action", "Sci-Fi"],
    vote_average: 8.7
  },
  {
    title: "Goodfellas",
    overview: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
    poster_path: "/goodfellas.jpg",
    release_date: new Date("1990-09-19"),
    genres: ["Crime", "Drama"],
    vote_average: 8.7
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    overview: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    poster_path: "/lotr1.jpg",
    release_date: new Date("2001-12-19"),
    genres: ["Adventure", "Fantasy"],
    vote_average: 8.8
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    overview: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    poster_path: "/lotr2.jpg",
    release_date: new Date("2002-12-18"),
    genres: ["Adventure", "Fantasy"],
    vote_average: 8.7
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    overview: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    poster_path: "/lotr3.jpg",
    release_date: new Date("2003-12-17"),
    genres: ["Adventure", "Fantasy"],
    vote_average: 8.9
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    overview: "The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda.",
    poster_path: "/empirestrikesback.jpg",
    release_date: new Date("1980-06-20"),
    genres: ["Action", "Adventure", "Sci-Fi"],
    vote_average: 8.7
  },
  {
    title: "Interstellar",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster_path: "/interstellar.jpg",
    release_date: new Date("2014-11-07"),
    genres: ["Adventure", "Drama", "Sci-Fi"],
    vote_average: 8.6
  },
  {
    title: "The Silence of the Lambs",
    overview: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
    poster_path: "/silenceofthelambs.jpg",
    release_date: new Date("1991-02-14"),
    genres: ["Crime", "Thriller"],
    vote_average: 8.6
  },
  {
    title: "Se7en",
    overview: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    poster_path: "/se7en.jpg",
    release_date: new Date("1995-09-22"),
    genres: ["Crime", "Mystery", "Thriller"],
    vote_average: 8.6
  },
  // Continue with more movies...
  {
    title: "The Green Mile",
    overview: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    poster_path: "/greenmile.jpg",
    release_date: new Date("1999-12-10"),
    genres: ["Crime", "Drama"],
    vote_average: 8.5
  },
  {
    title: "The Pianist",
    overview: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
    poster_path: "/pianist.jpg",
    release_date: new Date("2002-09-25"),
    genres: ["Biography", "Drama", "War"],
    vote_average: 8.5
  },
  // Add 80+ more movies following the same pattern
  {
    title: "Gladiator",
    overview: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    poster_path: "/gladiator.jpg",
    release_date: new Date("2000-05-05"),
    genres: ["Action", "Drama"],
    vote_average: 8.5
  },
  // ... continue until you have 100+
];

// Example of how to add more quickly (you can expand this pattern)
const additionalMovies = [
  "Schindler's List", "The Departed", "Whiplash", "The Prestige", 
  "Memento", "The Usual Suspects", "The Sixth Sense", "Shutter Island",
  // Add more titles
].map(title => ({
  title,
  overview: `${title} movie description placeholder.`,
  poster_path: `/${title.toLowerCase().replace(/\s+/g, '')}.jpg`,
  release_date: new Date(1990 + Math.floor(Math.random() * 30), 0, 1), // Random year
  genres: ["Drama"], // Default genre
  vote_average: (7 + Math.random() * 3).toFixed(1) // Random rating 7-10
}));

// Combine both arrays
const allMovies = [...movies, ...additionalMovies];

  mongoose.connect(process.env.MONGO_URI)
    .then(() => Movie.insertMany(allMovies))
    .then(() => console.log("Movies seeded successfully!"))
    .catch(err => console.error("Seeding error:", err))
    .finally(() => mongoose.disconnect());


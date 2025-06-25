import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import client from "./apollo";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import Navbar from "../../client/src/components/Navbar";
import SearchMovie from "./pages/SearchMovie";
import MovieDetails from "./components/MovieDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchMovie />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

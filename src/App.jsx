import "./App.css";
import { useEffect, useState } from "react";
import { fetchData } from "./api/apiData";
import ShowcasedMedia from "./components/ShowcasedMedia";
import MediaCard from "./components/MediaCard";

function App() {
  const [movie, setMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Variables for API request URL
  const tmbdBaseUrl = "https://api.themoviedb.org/3";
  const endpointPathTV = "tv/popular";
  const endpointPathMovie = "movie/popular";
  const apiKey = "ed4a2d6bab41c826e9dfb7da4bbb90a0";
  const tvUrl = `${tmbdBaseUrl}/${endpointPathTV}?api_key=${apiKey}`;
  const movieUrl = `${tmbdBaseUrl}/${endpointPathMovie}?api_key=${apiKey}`;

  // useEffect to call the fetch data function to retrieve TV and movie data
  useEffect(() => {
    // Call the fetch data function for movies
    fetchData(movieUrl).then((data) => {
      setMovie(data.results); // Set the state to the data
    });
  }, [tvUrl]);

  // Context:
  // I want app to contain movie state.
  // I want app to contain selectedMovie state.
  // The media card component will probably have a click event that will set the selectedMovie state.

  // Question:
  // How do I update the selectedMovie state from the MediaCard (child) component?
  // - pass a function as a prop to media card that will update the selectedMovie state in the app component

  const handleMovieSelect = (selectedMovie) => {
    setSelectedMovie(selectedMovie);
  };

  return (
    <div>
      <ShowcasedMedia id="top-section" selectedMovie={selectedMovie} />
      <section id="movie-container">
        {movie.slice(0, 5).map((movie) => (
          <MediaCard
            id="bottom-section"
            key={movie.id}
            movie={movie}
            handleMovieSelect={handleMovieSelect} // passed function as prop to media card (child to update parent state)
          />
        ))}
      </section>
    </div>
  );
}

export default App;

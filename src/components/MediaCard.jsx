import React from "react";


const MediaCard = ({ movie, handleMovieSelect }) => {

  // function to handle the click event on the card
  const handleCardClick = () => {
    handleMovieSelect(movie); // call the function passed as a prop to update the selectedMovie state with the movie object
  }


  return (
    <div className="card" onClick={handleCardClick}>
      <img
        src={`https://image.tmdb.org/t/p/w500${
          movie.poster_path || movie.backdrop_path
        }`}
        alt={movie.name}
        className="movie-image"
      />
      <h1 className="movie-title">
        {movie.original_name || movie.original_title}
      </h1>
    </div>
  );
};

export default MediaCard;

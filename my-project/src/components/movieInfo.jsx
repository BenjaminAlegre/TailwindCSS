import './MovieInfo.css';

const MovieInfo = () => {
  return (
    <div className="movie-info">
      <div className="movie-image">
        {/* Imagen de la película, puedes usar una etiqueta img con src o un fondo CSS */}
        <img src="https://pics.filmaffinity.com/Interstellar-366875261-large.jpg" alt="Movie Poster" />
      </div>
      <div className="movie-details">
        <h2 className="movie-title">Movie Title</h2>
        <p className="movie-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <div className="movie-rating">Average Rating: 4.5 / 5</div>
      </div>
    </div>
  );
};

export default MovieInfo;

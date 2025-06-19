import PropTypes from "prop-types";

function MovieInfo({ img, title, rating, runtime, genres, desc }) {
  const getRating = (rating) => {
    var stars = "";
    for (var i = 0; i < rating / 2; i++) {
      if (rating / 2 - i > 0 && rating / 2 - i < 1) stars += "☆";
      else if (rating / 2 - i > 1) stars += "★";
    }

    return stars;
  };

  return (
    <div>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <h3>
        {getRating(rating)}/{rating}
      </h3>
      <h5>{runtime} min.</h5>
      {genres ? (
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      ) : null}
      {desc !== "" ? <h5>{`"${desc}"`}</h5> : null}
    </div>
  );
}

MovieInfo.propTypes = {
  img: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf.apply(PropTypes.string),
  desc: PropTypes.string,
};

export default MovieInfo;

import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieInfo from "../components/MovieInfo";

function Detail() {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const getMovieInfo = async () => {
    const response = await axios.get(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    setMovieInfo(response.data.data.movie);
  };

  useEffect(() => {
    getMovieInfo();
  }, []);

  return (
    <div>
      <h3>
        <Link to={"/"}>back</Link>
        <MovieInfo
          img={movieInfo.medium_cover_image}
          title={movieInfo.title}
          rating={movieInfo.rating}
          runtime={movieInfo.runTime}
          genres={movieInfo.genres}
          desc={movieInfo.description_full}
        ></MovieInfo>
      </h3>
    </div>
  );
}

export default Detail;

import React, { useState, useEffect } from "react";
import styles from "./Row.module.css";
import axios from "../../../Utils/Axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube"

const Row = ({ title, url, isLargeRow }) => {
  const [movies, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const imageBaseUrl = "https://image.tmdb.org/t/p/original/"; 

  useEffect(() => {
    (async () => {
      try {
        console.log(url);
        const request = await axios.get(url);
        console.log(request);
        setMovie(request.data.results);
      } catch (error) {
        console.error("Error fetching data:", error); 
      }
    })();
  }, [url]); 
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        }
      );
    }
  };
const opts={
  height:'390',
  width:'100%',
  playerVars:{
    autoplay:1,
  },
}
  return (
    <div className={styles.row}>
      <h1>{title}</h1>
      <div className={styles.row_posters}>
        {" "}
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${imageBaseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`${styles.row_poster} ${
              isLargeRow ? styles.row_posterLarge : ""
            }`}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;

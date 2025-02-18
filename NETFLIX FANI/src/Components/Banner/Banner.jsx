import React, { useEffect, useState } from "react";
import axios from "../../Utils/Axios";
import requests from "../../Utils/request";
import style from "./Banner.module.css";

const Banner = () => {
  const [movie, setmovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.originals);

        setmovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  // Function to truncate the description
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className={style.banner}
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className={style.banner_contents}>
        <h1 className={style.banner_title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className={style.banner_buttons}>
          <button className={`${style.banner_button} ${style.play}`}>
            Play
          </button>
          <button className={style.banner_button}>My List</button>
        </div>
        <h1 className={style.banner_description}>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className={style.banner_fadeBottom} />
    </header>
  );
};

export default Banner;

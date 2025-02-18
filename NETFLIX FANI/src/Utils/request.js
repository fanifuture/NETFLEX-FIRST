const api_key = import.meta.env.VITE_API_KEY;

const requests = {
  originals: `/discover/tv?api_key=${api_key}&language=en-US&with_networks=213`,
  Trending: `/trending/all/week?api_key=${api_key}&language=en-US`,
  top_rated: `/tv/top_rated?api_key=${api_key}&language=en-US`,
  Action_movies: `/discover/movie?api_key=${api_key}&with_genres=28`,
  Comedy_movies: `/discover/movie?api_key=${api_key}&with_genres=35`,
  Hooror_Movies: `/discover/movie?api_key=${api_key}&with_genres=27`,
  Romance_Movie: `/discover/movie?api_key=${api_key}&with_genres=10749`,
  Documenteries: `/discover/movie?api_key=${api_key}&with_genres=99`,
  Tvshow: `/tv/popular?api_key=${api_key}&language=en-US&page=1`,
};

export default requests;

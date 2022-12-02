import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'eb87ea8e65ad3520d4ba03c42b454490',
  },
});

export const getTrendingMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data.results;
};

export const searchMovies = async (query, page = 1) => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query,
      page,
    },
  });
  return data.results;
};
export const getMovieDetails = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}`);
 

  return data;
};

export const getActors = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}/credits`);
  return data;
};
export const getReviews = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}/reviews`);
  return data.results;
};

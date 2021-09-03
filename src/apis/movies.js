import axios from 'axios';

const addMovieToDb = axios.create({
  baseURL: 'https://movie-dbs.herokuapp.com/chicago-cinema',
  method: 'post'
});

const retrieveMovies = axios.create({
  baseURL: 'https://movie-dbs.herokuapp.com/chicago-cinema',
  method: 'get'
});

const getDetails = axios.create({
  baseURL: 'https://movie-dbs.herokuapp.com/chicago-cinema/movies',
  method: 'get'
});

const getCast = axios.create({
  baseURL: 'http://imdb8.p.rapidapi.com/actors',
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'd3e39eeecfmsh3998390045e2466p154abfjsna7eb052dce03',
    'x-rapidapi-host': 'imdb8.p.rapidapi.com'
  }
});

const calls = {
  addMovieToDb,
  retrieveMovies,
  getDetails,
  getCast
};

export default calls;

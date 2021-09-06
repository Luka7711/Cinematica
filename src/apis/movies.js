import axios from "axios";

const retrieveMovies = axios.create({
  baseURL: "https://daily-blogs-v.herokuapp.com/chicago-cinema",
  method: "get",
});

const getDetails = axios.create({
  baseURL: "https://daily-blogs-v.herokuapp.com/chicago-cinema/movies",
  method: "get",
});

const getCast = axios.create({
  baseURL: "https://imdb8.p.rapidapi.com/actors",
  method: "GET",
  headers: {
    "x-rapidapi-key": "d3e39eeecfmsh3998390045e2466p154abfjsna7eb052dce03",
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
  },
});

const getVideoId = axios.create({
  baseURL: "https://imdb8.p.rapidapi.com/title",
  method: "GET",
  headers: {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "d3e39eeecfmsh3998390045e2466p154abfjsna7eb052dce03",
  },
});

const getVideoSrc = axios.create({
  baseURL: "https://imdb8.p.rapidapi.com/title",
  method: "GET",
  headers: {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "d3e39eeecfmsh3998390045e2466p154abfjsna7eb052dce03",
  },
});

const calls = {
  retrieveMovies,
  getDetails,
  getCast,
  getVideoId,
  getVideoSrc,
};

export default calls;

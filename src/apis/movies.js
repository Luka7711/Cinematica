import axios from "axios";

const addMovieToDb = axios.create({
  baseURL: "http://localhost:9000/chicago-cinema",
  method: "post",
});

const retrieveMovies = axios.create({
  baseURL: "http://localhost:9000/chicago-cinema",
  method: "get",
});

const getDetails = axios.create({
  baseURL: "http://localhost:9000/chicago-cinema/movies",
  method: "get",
});

const calls = {
  addMovieToDb,
  retrieveMovies,
  getDetails,
};

export default calls;

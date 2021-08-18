import axios from "axios";

const addMovieToDb = axios.create({
  baseURL: "http://localhost:9000/chicago-cinema",
  method: "post",
});

const retrieveMovies = axios.create({
  baseURL: "http://localhost:9000/chicago-cinema",
  method: "get",
});

const calls = {
  addMovieToDb,
  retrieveMovies,
};

export default calls;

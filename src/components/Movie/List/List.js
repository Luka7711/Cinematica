import React, { Fragment, useEffect, useState } from "react";
import instance from "../../../apis/movies";
import "./module.list.css";
import { useHistory } from "react-router-dom";
import Page from "./Page";
import Btns from "./Btns";
import About from "../../About/About";

const List = () => {
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentList, setCurrentList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [generalData, setGeneralData] = useState([]);
  const moviesPerPage = 6;
  let history = useHistory();

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    getPages(moviesPerPage);
  }, [movies]);

  useEffect(() => {
    displayCurrentPageList();
  }, [currentPage, movies]);

  const getMovies = async (getPage) => {
    const response = await instance.retrieveMovies("/movies");
    setMovies(response.data.movies);
    setGeneralData(response.data.movies);
  };

  const getPages = (moviesPerPage) => {
    let data = movies.length;
    let pageNums = 0;
    while (data > 0) {
      if (data < moviesPerPage) data -= data;
      else data -= moviesPerPage;
      pageNums++;
    }
    setPages(pageNums);
  };

  const displayCurrentPageList = () => {
    console.log("hello");
    let startAt = moviesPerPage * (currentPage - 1);
    if (movies.length > 0) {
      let currentMoviePage = [];
      for (let i = startAt; i < startAt + moviesPerPage; i++) {
        if (movies[i]) {
          currentMoviePage.push(movies[i]);
        }
        if (movies[i + 1] === undefined) {
          setCurrentList(currentMoviePage);
          return;
        }
      }
      setCurrentList(currentMoviePage);
      return;
    }
  };

  const changeCurrentPage = (pageNum) => {
    if (pageNum > 0 && pageNum <= pages) {
      setCurrentPage(pageNum);
    }
  };

  const displayByCategory = (category) => {
    // search for movies with category
    let dataByCategory = [];
    console.log(category);
    generalData.map((movie, i) => {
      movie.details.genres.map((genre) => {
        if (genre === category) {
          dataByCategory.push(movie);
          return;
        }
      });
      return;
    });
    // change movie state
    setMovies(dataByCategory);
  };

  return (
    <div className="main-page">
      <About />
      <Page currentList={currentList} displayByCategory={displayByCategory} />
      <Btns
        pages={pages}
        changeCurrentPage={changeCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default List;

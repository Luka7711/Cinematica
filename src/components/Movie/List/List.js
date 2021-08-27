import React, { Fragment, useEffect, useState } from "react";
import instance from "../../../apis/movies";
import "./module.list.css";
import { useHistory } from "react-router-dom";
import Page from "./Page";
import Btns from "./Btns";

const List = () => {
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentList, setCurrentList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 5;
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
  };

  const redirectToDetails = (id) => {
    history.push(`/details/${id}`);
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

  return (
    <div className="movielist-container">
      <div className="movielist">
        <Page currentList={currentList} />
        <Btns
          pages={pages}
          changeCurrentPage={changeCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default List;

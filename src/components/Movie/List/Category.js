import React, { useEffect, useState } from "react";

const Category = ({ displayByCategory }) => {
  const [currentCategory, setCurrentCategory] = useState("");
  const categories = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Drama",
    "Fantasy",
    "Family",
    "Musical",
    "Music",
    "Romance",
    "Sci-Fi",
  ];

  useEffect(() => {
    if (currentCategory !== "") {
      displayByCategory(currentCategory);
    }
  }, [currentCategory]);

  let listOfCategories = categories.map((categ, i) => {
    return (
      <button
        className="ui inverted red button"
        onClick={() => setCurrentCategory(categ)}
        key={i}
      >
        {categ}
      </button>
    );
  });

  return (
    <div className="category-box">
      <h1 className="category-title">Categories</h1>
      <div class="category-list">{listOfCategories}</div>
    </div>
  );
};

export default Category;

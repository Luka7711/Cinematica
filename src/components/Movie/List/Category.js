import React, { useState } from "react";

const Category = () => {
  const [currentCategory, setCurrentCategory] = useState(null);
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

  let listOfCategories = categories.map((categ, i) => {
    return (
      <button onClick={() => setCurrentCategory(categ)} key={i}>
        {" "}
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

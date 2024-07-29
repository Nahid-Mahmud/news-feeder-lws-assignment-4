import { data } from "autoprefixer";
import React, { useContext, useEffect, useState } from "react";
import { NewsContext } from "../contexts";

const useNewsQuery = () => {
  // logic to fetch news based on category and search query

  //   state for news data by category
  const [newsData, setNewsData] = useState([]);

  const { category } = useContext(NewsContext);

  // category

  useEffect(() => {
    if (category) {
      fetch(`http://localhost:8000/v2/top-headlines?category=${category}`)
        .then((response) => response.json())
        .then((data) => {
          setNewsData(data.articles);
        });
    } else {
      fetch("http://localhost:8000/v2/top-headlines")
        .then((res) => res.json())
        .then((data) => setNewsData(data.articles));
    }
  }, [category]);
  return newsData;
};

export default useNewsQuery;

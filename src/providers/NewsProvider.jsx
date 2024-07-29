import React, { useEffect, useState } from "react";
import { NewsContext } from "../contexts";

const NewsProvider = ({ children }) => {
  const [category, setcategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState([]);

  //   effect for search query

  useEffect(() => {
    let subscribe = false;

    if (searchQuery) {
      fetch(`http://localhost:8000/v2/search?q=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          setSearchData(data.result);
        });
    } else {
      setSearchData([]);
    }

    return () => (subscribe = true);
  }, [searchQuery]);

  const contextValue = {
    category,
    setcategory,
    setSearchQuery,
    searchQuery,
    searchData,
  };

  console.log(searchData);

  return <NewsContext.Provider value={contextValue}>{children}</NewsContext.Provider>;
};

export default NewsProvider;

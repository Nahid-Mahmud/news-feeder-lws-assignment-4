import React, { useEffect, useState } from "react";
import { NewsContext } from "../contexts";
import { useDebounce } from "../hooks/useDebounce";

const NewsProvider = ({ children }) => {
  const [category, setcategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState([]);

  // debounced hook

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  //   effect for search query

  useEffect(() => {
    let subscribe = false;

    if (searchQuery && !subscribe) {
      fetch(`http://localhost:8000/v2/search?q=${debouncedSearchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          setSearchData(data.result);
        });
    } else {
      setSearchData([]);
    }

    return () => {
      subscribe = true;
    };
  }, [searchQuery, debouncedSearchQuery]);

  const contextValue = {
    category,
    setcategory,
    setSearchQuery,
    searchQuery,
    searchData,
  };

  return <NewsContext.Provider value={contextValue}>{children}</NewsContext.Provider>;
};

export default NewsProvider;

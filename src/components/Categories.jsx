import React, { useContext } from "react";
import { NewsContext } from "../contexts";

const Categories = () => {
  const { category, setcategory } = useContext(NewsContext);

  const handleClick = (category) => {
    setcategory(category.toLowerCase());
  };

  return (
    <div className="container mx-auto   mt-6">
      <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
        <li
          className={`cursor-pointer ${category === "general" ? "text-green-700" : ""}`}
          onClick={() => handleClick("General")}
        >
          General
        </li>
        <li
          className={`cursor-pointer ${category === "business" ? "text-green-700" : ""} `}
          onClick={() => handleClick("Business")}
        >
          Business
        </li>
        <li
          className={`cursor-pointer ${category === "entertainment" ? "text-green-700" : ""} 
        }`}
          onClick={() => handleClick("Entertainment")}
        >
          Entertainment
        </li>
        <li
          className={`cursor-pointer ${category === "health" ? "text-green-700" : ""}`}
          onClick={() => handleClick("Health")}
        >
          Health
        </li>
        <li
          className={`cursor-pointer ${category === "science" ? "text-green-700" : ""}`}
          onClick={() => handleClick("Science")}
        >
          Science
        </li>
        <li
          className={`cursor-pointer ${category === "sports" ? "text-green-700" : ""}`}
          onClick={() => handleClick("Sports")}
        >
          Sports
        </li>
        <li
          className={`cursor-pointer ${category === "technology" ? "text-green-700" : ""} 
        }`}
          onClick={() => handleClick("Technology")}
        >
          Technology
        </li>
      </ul>
    </div>
  );
};

export default Categories;

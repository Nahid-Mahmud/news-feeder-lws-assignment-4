import { useContext } from "react";
import useNewsQuery from "../hooks/useNewsQuery";
import { NewsContext } from "../contexts";

const NewsBoard = () => {
  const newsData = useNewsQuery();
  const { searchData } = useContext(NewsContext);

  const data = searchData?.length > 0 ? searchData : newsData;

  return (
    <main className="my-10 lg:my-14 grid grid-cols-1 xl:grid-cols-3 mx-auto px-5">
      {/* show search data if availave  else show news data */}

      {data?.map((news, index) => (
        <div key={index} className=" max-w-md  text-justify">
          {/* image */}
          <img src={news?.urlToImage} alt="" />
          <a href="#">
            <h3 className="mb-2.5 text-2xl  font-bold lg:text-[28px]">{news?.title}</h3>
          </a>
          <p className="text-base text-[#5C5955]">{news?.description}</p>
          <p className="mt-5 text-base text-[#5C5955] pb-5">
            {news?.source.name} - {news?.publishedAt}
          </p>
        </div>
      ))}
    </main>
  );
};

export default NewsBoard;

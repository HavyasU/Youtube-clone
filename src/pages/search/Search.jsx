import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCategoryData } from "../../utils/fetchCategoryData";
import { GlobalContext } from "../../context/context";
import VideoCard from "../../components/cards/videoCard";
import Navbar from "../../components/navbar/Navbar";

const SearchPage = () => {
  const [searchData, setSearchData] = useState({});
  const { navOpen, loading, setLoading } = useContext(GlobalContext);
  const { search } = useParams();
  const fetchSearchData = async () => {
    setSearchData(await fetchCategoryData(search));
  };
  useEffect(() => {
    fetchSearchData();
  }, [search]);

  return (
    <>
      <Navbar />
      {loading && <Loader />}
      <div
        className={`flex  flex-wrap z-[80]   ${
          navOpen ? "max-sm:pl-[0] pl-[15rem]" : "max-sm:pl-[0rem] pl-[5rem]"
        } justify-center  absolute top-16
    `}
      >
        {searchData &&
          searchData?.items?.map((ele, ind) => {
            return <VideoCard key={ind} item={ele} />;
          })}
      </div>
    </>
  );
};

export default SearchPage;

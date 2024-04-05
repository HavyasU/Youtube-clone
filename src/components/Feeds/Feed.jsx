import React, { useContext, useEffect, useState } from "react";
import { fetchCategoryData } from "../../utils/fetchCategoryData";
import VideoCard from "../cards/videoCard";
import { GlobalContext } from "../../context/context";
import { fetchHomeFeed } from "../../utils/fetchHomeFeed";

const Feeds = ({ category }) => {
  const { navOpen, loading, setLoading } = useContext(GlobalContext);
  const [videoData, setVideoData] = useState({});
  const fetchData = async () => {
    setLoading(true);
    const fetchedData = await fetchCategoryData(category);
    if (fetchedData && fetchedData?.items?.length > 0)
      setVideoData(fetchedData);
    else alert(fetchedData);
    setLoading(false);
  };
  useEffect(() => {
    // if (category === "Home") fetchFeedData();
    fetchData();
  }, [category]);
  console.log(navOpen);
  return (
    <div
      className={`flex  flex-wrap z-[80]   ${
        navOpen ? "max-sm:pl-0 pl-[15rem]" : "max-sm:pl-0 pl-[5rem]"
      } justify-center  absolute top-16
        `}
    >
      {videoData &&
        videoData?.items?.map((ele, ind) => {
          return <VideoCard key={ind} item={ele} />;
        })}
    </div>
  );
};

export default Feeds;

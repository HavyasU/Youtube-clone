import React from "react";
import SuggestedVideoCard from "../cards/SuggestedVideoCard";

const VideoDisplayRight = ({ SuggestedVideos = {} }) => {
  return (
    <div className="max-sm:w-[100vw] w-full flex flex-col justify-center items-center overflow-y-scroll scrollbar-hidden">
      {SuggestedVideos &&
        SuggestedVideos?.items?.length > 0 &&
        SuggestedVideos?.items?.map((ele, ind) => {
          return <SuggestedVideoCard key={ind} item={ele} />;
        })}
    </div>
  );
};

export default VideoDisplayRight;

import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { findDiffDate } from "../../utils/dateCalculation";

const VideoCard = ({ item }) => {
  const navigate = useNavigate();
  // const item = {
  //   kind: "youtube#searchResult",
  //   id: {
  //     kind: "youtube#video",
  //     videoId: "_sqqFtvfIHo",
  //   },
  //   snippet: {
  //     publishedAt: "2024-04-01T15:30:07Z",
  //     channelId: "UCmAPdImtXLGh5E-lTTH4Qmg",
  //     title: "Home 🏠 | Family Entertainer│EP# 13",
  //     description: "",
  //     thumbnails: {
  //       medium: {
  //         url: "https://i.ytimg.com/vi/_sqqFtvfIHo/mqdefault.jpg",
  //         width: 320,
  //         height: 180,
  //       },
  //     },
  //     channelTitle: "Flowers Comedy",
  //     liveBroadcastContent: "none",
  //     publishTime: "2024-04-01T15:30:07Z",
  //   },
  // };
  return (
    <div className="max-sm:mx-0 max-sm:h-[18rem] max-sm:p-3 w-[20rem] h-[20rem] flex flex-col items-center justify-start text-white overflow-hidden bg-transparent rounded-md p-2 mx-2 my-4 border border-gray-800">
      <div
        onClick={() => navigate(`/video/${item?.id?.videoId}`)}
        className={`card-top  w-[19rem] h-[12rem] overflow-hidden rounded-lg`}
      >
        <img
          src={item?.snippet?.thumbnails?.medium?.url}
          className="cursor-pointer w-full h-full object-fill"
          alt="thumbnail"
        />
      </div>
      <div className="w-full pl-2 card-bot flex flex-col justify-start items-centergap-[5px]">
        <p
          onClick={() => navigate(`/video/${item?.id?.videoId}`)}
          dangerouslySetInnerHTML={{ __html: item?.snippet?.title }}
          className="max-sm:text-[15px] max-sm:my-1 text-lg cursor-pointer font-extrabold my-2 line-clamp-2 "
        ></p>
        <p className="max-sm:text-[12px] text-[16px] font-mono font-medium text-nowrap text-ellipsis">
          {item?.snippet?.channelTitle}
        </p>
        <p className="max-sm:text-[12px] text-[18px] font-bold">
          {findDiffDate(item?.snippet?.publishTime) !== "54 years ago"
            ? findDiffDate(item?.snippet?.publishTime)
            : "Live"}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;

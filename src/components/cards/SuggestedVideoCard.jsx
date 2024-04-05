import React, { useContext, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/context";
import { findDiffDate } from "../../utils/dateCalculation";

const SuggestedVideoCard = ({ item }) => {
  const { navOpen } = useContext(GlobalContext);
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
    <div
      onClick={() => navigate(`/video/${item?.id?.videoId}`)}
      className={`${
        navOpen ? "max-sm:w-[24rem] w-[24rem]" : "max-sm:w-[90%] w-[80%] "
      } max-sm:mx-0 max-sm:p-0 max-sm:h-[7rem] h-[8rem] flex transition-all  ease-in-out items-start justify-between text-white overflow-hidden bg-transparent rounded-md p-2 mx-2 my-1`}
    >
      <div
        className={`max-sm:w-[18rem]  max-sm:min-w-[10rem]  max-sm:h-[6rem] card-top w-[20rem] h-[7rem] mr-2 overflow-hidden rounded-lg`}
      >
        <img
          src={item?.snippet?.thumbnails?.medium?.url}
          className="cursor-pointer w-full h-full object-fill"
          alt="thumbnail"
        />
      </div>
      <div className="w-full card-bot h-full  flex flex-col  justify-start items-start  ">
        <p
          dangerouslySetInnerHTML={{ __html: item?.snippet?.title }}
          className="max-sm:text-[15px] w-[100%] max-sm:mb-1 text-[17px] cursor-pointer font-extrabold mb-2 line-clamp-2 "
        ></p>
        <p className="max-sm:text-[12px] text-[15px] my-1 font-mono font-medium text-nowrap text-ellipsis">
          {item?.snippet?.channelTitle}
        </p>
        <p className="max-sm:text-[10px] text-[13px] font-bold">
          {findDiffDate(item?.snippet?.publishTime)}
        </p>
      </div>
    </div>
  );
};

export default SuggestedVideoCard;

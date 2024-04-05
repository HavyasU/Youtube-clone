import React, { useState } from "react";
import { Forward, Redo, ThumbDown, ThumbUp } from "@mui/icons-material";
import VideoComments from "./VideoComments";
import { useNavigate } from "react-router-dom";

const VideoDisplayLeft = ({ item }) => {
  const [descriptionOn, setDescriptionOn] = useState(false);
  const navigate = useNavigate();
  const btnstyle =
    "max-sm:text-[17px] max-sm:w-[9rem] font-extrabold w-[7rem] justify-center items-center flex gap-1 bg-gray-700 px-[1rem] py-[.7rem] rounded-lg";
  return (
    <>
      {item && item?.items?.length > 0 && (
        <div className="max-sm:min-w-[100vw]  max-sm:w-[100vw] mb-4 flex flex-col min-w-[50rem] w-[50rem] justify-center items-start">
          <div className="w-full flex  justify-center items-center">
            <iframe
              className="rounded-md my-2 max-sm:w-[90%] max-sm:h-[14rem] h-[450px]"
              width="800"
              height="500"
              src={`https://www.youtube.com/embed/${item?.items[0]?.id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="max-sm:pl-6  w-[90%] mt-2 pl-4">
            <h1
              dangerouslySetInnerHTML={{
                __html: item?.items[0]?.snippet?.title.replace(/\n/g, "<br />"),
              }}
              className="max-sm:text-[1rem] text-[1.3rem] font-extrabold"
            >
              {/* {item?.items[0]?.snippet?.title} */}
            </h1>
            <div className="flex max-sm:flex-col max-sm:justify-start w-full justify-between items-center gap-2 my-3">
              <h1
                className="max-sm:text-[20px] max-sm:w-full w-[80vw] max-sm:text-start text-2xl font-sans font-extrabold cursor-pointer"
                onClick={() =>
                  navigate(`/channel/${item?.items[0]?.snippet?.channelId}`)
                }
              >
                {item?.items[0]?.snippet?.channelTitle}
              </h1>
              <div className="flex max-sm:w-full max-sm:gap-5 max-sm:my-2 gap-3">
                <button className={btnstyle}>
                  <ThumbUp />
                  {item?.items[0]?.statistics?.likeCount}
                </button>
                <button className={btnstyle}>
                  <ThumbDown />
                </button>
              </div>
            </div>
            <h1 className="text-xllg font-extrabold font-sans">
              {item?.items[0]?.statistics?.viewCount} Views
            </h1>
            <p
              className={`${
                descriptionOn ? "h-[100%]" : "h-[3.3rem]"
              } overflow-hidden cursor-pointer text-lg mt-2`}
              dangerouslySetInnerHTML={{
                __html: `
                ${item?.items[0]?.snippet?.description.replace(
                  /\n/g,
                  "<br />"
                )}`,
              }}
            ></p>
            <p
              className="cursor-pointer font-bold"
              onClick={() => setDescriptionOn(!descriptionOn)}
            >
              {descriptionOn ? "Less View" : "More view"}
            </p>

            <h1 className="text-2xl font-extrabold"></h1>
          </div>
        </div>
      )}
      {item && item?.items?.length > 0 && (
        <VideoComments id={item?.items[0]?.id} />
      )}
    </>
  );
};

export default VideoDisplayLeft;

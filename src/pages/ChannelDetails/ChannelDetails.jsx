import React, { useContext, useEffect, useState } from "react";
import { fetchChannelData } from "../../utils/fetchChannelData";
import { useParams } from "react-router-dom";
import { fetchChannelVideos } from "../../utils/fetchChannelVideos";
import VideoCard from "../../components/cards/videoCard";
import Navbar from "../../components/navbar/Navbar";
import { GlobalContext } from "../../context/context";

// =w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj
const ChannelDetails = () => {
  const { id } = useParams();
  const { navOpen } = useContext(GlobalContext);
  const [channelData, setChannelData] = useState({});
  const [channelVideos, setChannelVideos] = useState({});
  const fetchChannel = async () => {
    setChannelData(await fetchChannelData(id));
    setChannelVideos(await fetchChannelVideos(id));
  };
  useEffect(() => {
    fetchChannel();
  }, [id]);
  return (
    <>
      <Navbar />

      {channelData?.items?.length > 0 && (
        <div
          // {channelData Details}
          className={`${
            navOpen ? "max-sm:pl-0 pl-[16rem]" : "max-sm:pl-0 pl-[6.5rem]"
          }  relative top-[4rem] z-[-1] text-white w-full`}
        >
          <div
            className={`min-w-full max-sm:w-[90vw] max-sm:h-[5rem] h-[10rem] overflow-hidden  flex justify-center items-center `}
          >
            <img
              src={
                channelData?.items[0]?.brandingSettings?.image
                  ?.bannerExternalUrl
              }
              alt="image"
              className={`${
                navOpen ? "max-sm:w-[100vw] w-[68rem]" : "max-sm:w-[100vw] w-[78rem]"
              } h-[100%] object-cover aspect-video rounded-[15px]`}
            />
          </div>
          <div className="max-sm:mt-10 max-sm:flex-col w-full flex justify-center my-3 h-[10rem] ">
            <div className=" flex justify-center items-center mr-4 ">
              <img
                src={channelData?.items[0]?.snippet?.thumbnails?.medium?.url}
                alt="profile-image"
                className="rounded-full w-[7rem] object-cover"
              />
            </div>
            <div className="max-sm:pl-6  min-w-[15rem]  max-sm:w-[90vw] w-[60rem] flex flex-col justify-start items-start pl-3 mb-10 ">
              <h1 className="font-extrabold text-xl my-2 mt-6">
                {channelData?.items[0]?.snippet?.title}
              </h1>
              <h1 className="max-sm:line-clamp-5 font-extrabold text-[15px] ">
                {channelData?.items[0]?.snippet?.description}
              </h1>
            </div>
          </div>
        </div>
      )}

      <div
        className={`flex flex-wrap justify-center items-center ${
          navOpen ? "max-sm:pl-0 pl-[16rem]" : "max-sm:pl-0 pl-[6.5rem]"
        }    relative top-20 mb-3 
        `}
      >
        {channelVideos &&
          channelVideos?.items?.length > 0 &&
          channelVideos?.items?.map((ele, ind) => {
            return <VideoCard item={ele} key={ind} />;
          })}
      </div>
    </>
  );
};

export default ChannelDetails;

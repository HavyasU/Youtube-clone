import React, { useContext, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchVideoData } from "../../utils/fetchVideoData";
import Navbar from "../../components/navbar/Navbar";
import { GlobalContext } from "../../context/context";
import VideoDisplayLeft from "../../components/videoCards/VideoDisplayLeft";
import VideoDisplayRight from "../../components/videoCards/VideoDisplayRight";
import { fetchSuggestedVideos } from "../../utils/fetchSuggestedVideos";
import CommentCard from "../../components/cards/commentCard";
import VideoComments from "../../components/videoCards/VideoComments";

const VideoDetails = () => {
  const { id } = useParams();
  const { navOpen } = useContext(GlobalContext);
  // const item = {
  //   kind: "youtube#videoListResponse",

  //   items: [
  //     {
  //       kind: "youtube#video",
  //       id: "lLjvsAyEj-g",
  //       snippet: {
  //         publishedAt: "2023-04-20T13:30:27Z",
  //         channelId: "UCdvBex6r_1-i8Sut-mCy2Jw",
  //         title: "Edith Whiskers (Tom Rosenthal) - Home (Lyrics)",
  //         description:
  //           "Follow Our Official Spotify Playlist: https://TajTracks.lnk.to/Spotify​​​​\nTikTok Spotify Playlist: https://spoti.fi/32iCMvP\nEdith Whiskers (Tom Rosenthal) - Home (Lyrics)\n\nStream / Download:\nhttps://edithwhiskers.ffm.to/stopstealingthecovers\n\nEdith Whiskers: \nSpotify : https://smarturl.it/EdithWhiskersSpotify\nInstagram : https://www.instagram.com/edithwhiskers\n\nHome Lyrics:\n\n[Verse 1]\nAlabama, Arkansas, I do love my Ma and Pa\nNot the way that I do love you\nWell, holy moly, me oh my, you're the apple of my eye\nGirl, I've never loved one like you\nMan, oh, man, you're my best friend, I scream it to the nothingness\nThere ain't nothing that I need\nWell, hot and heavy pumpkin pie, chocolate candy, Jesus Christ\nAin't nothing please me more than you\n\n[Chorus]\nOh, home, let me come home\nHome is wherever I'm with you\nOh, homе, let me come homе\nHome is wherever I'm with you\n\n[Post-Chorus]\nLa, la, la, la, take me home\nMother, I'm coming home\n\n[Verse 2]\nI'll follow you into the park, through the jungle, through the dark\nGirl, I never loved one like you\nMoats and boats and waterfalls, alleyways and pay phone calls\nI been everywhere with you\nWe laugh until we think we'll die, barefoot on a summer night\nNothing new is sweeter than with you\nAnd in the streets, you run afree like it's only you and me\nGeez, you're something to see\n\n[Chorus]\nOh, home, let me come home\nHome is whenever I'm with you\nOh, home, let me come home\nHome is wherever I'm with you\n\n[Outro]\nHome, let me come home\nHome is whenever I'm with you\nOh, home, let me come home\nHome is wherever I'm with you\n\nEdith Whiskers (Tom Rosenthal) - Home (Lyrics)\n\n#TomRosenthal #Home #TajTracks #Edith Whiskers #Lyrics",
  //         thumbnails: {
  //           default: {
  //             url: "https://i.ytimg.com/vi/lLjvsAyEj-g/default.jpg",
  //             width: 120,
  //             height: 90,
  //           },
  //           medium: {
  //             url: "https://i.ytimg.com/vi/lLjvsAyEj-g/mqdefault.jpg",
  //             width: 320,
  //             height: 180,
  //           },
  //           high: {
  //             url: "https://i.ytimg.com/vi/lLjvsAyEj-g/hqdefault.jpg",
  //             width: 480,
  //             height: 360,
  //           },
  //           standard: {
  //             url: "https://i.ytimg.com/vi/lLjvsAyEj-g/sddefault.jpg",
  //             width: 640,
  //             height: 480,
  //           },
  //           maxres: {
  //             url: "https://i.ytimg.com/vi/lLjvsAyEj-g/maxresdefault.jpg",
  //             width: 1280,
  //             height: 720,
  //           },
  //         },
  //         channelTitle: "Taj Tracks",
  //         categoryId: "10",
  //         liveBroadcastContent: "none",
  //         localized: {
  //           title: "Edith Whiskers (Tom Rosenthal) - Home (Lyrics)",
  //           description:
  //             "Follow Our Official Spotify Playli\nst: https://TajTracks.lnk.to/Spotify​​​​\nTikTok Spotify Playlist: https://spoti.fi/32iCMvP\nEdith Whiskers (Tom Rosenthal) - Home (Lyrics)\n\nStream / Download:\nhttps://edithwhiskers.ffm.to/stopstealingthecovers\n\nEdith Whiskers: \nSpotify : https://smarturl.it/EdithWhiskersSpotify\nInstagram : https://www.instagram.com/edithwhiskers\n\nHome Lyrics:\n\n[Verse 1]\nAlabama, Arkansas, I do love my Ma and Pa\nNot the way that I do love you\nWell, holy moly, me oh my, you're the apple of my eye\nGirl, I've never loved one like you\nMan, oh, man, you're my best friend, I scream it to the nothingness\nThere ain't nothing that I need\nWell, hot and heavy pumpkin pie, chocolate candy, Jesus Christ\nAin't nothing please me more than you\n\n[Chorus]\nOh, home, let me come home\nHome is wherever I'm with you\nOh, homе, let me come homе\nHome is wherever I'm with you\n\n[Post-Chorus]\nLa, la, la, la, take me home\nMother, I'm coming home\n\n[Verse 2]\nI'll follow you into the park, through the jungle, through the dark\nGirl, I never loved one like you\nMoats and boats and waterfalls, alleyways and pay phone calls\nI been everywhere with you\nWe laugh until we think we'll die, barefoot on a summer night\nNothing new is sweeter than with you\nAnd in the streets, you run afree like it's only you and me\nGeez, you're something to see\n\n[Chorus]\nOh, home, let me come home\nHome is whenever I'm with you\nOh, home, let me come home\nHome is wherever I'm with you\n\n[Outro]\nHome, let me come home\nHome is whenever I'm with you\nOh, home, let me come home\nHome is wherever I'm with you\n\nEdith Whiskers (Tom Rosenthal) - Home (Lyrics)\n\n#TomRosenthal #Home #TajTracks #Edith Whiskers #Lyrics",
  //         },
  //       },
  //       contentDetails: {
  //         duration: "PT3M16S",
  //         dimension: "2d",
  //         definition: "hd",
  //         caption: "false",
  //         licensedContent: true,
  //         contentRating: {},
  //         projection: "rectangular",
  //       },
  //       statistics: {
  //         viewCount: "6101348",
  //         likeCount: "52236",
  //         favoriteCount: "0",
  //         commentCount: "598",
  //       },
  //     },
  //   ],
  //   pageInfo: {
  //     totalResults: 1,
  //     resultsPerPage: 1,
  //   },
  // };
  const [videData, setVideoData] = useState({});
  const [SuggestedVideos, setSuggestedVideos] = useState({});
  const fetchVideo = async () => {
    setVideoData(await fetchVideoData(id));
    setSuggestedVideos(await fetchSuggestedVideos(id));
  };
  useLayoutEffect(() => {
    fetchVideo();
  }, [id]);
  return (
    <>
      <Navbar />
      <div
        className={`max-sm:flex-col flex z-[80]  overflow-hidden scrollbar-hidden ${
          navOpen ? "max-sm:pl-[0rem] pl-[16rem]" : "max-sm:pl-0 pl-[6.5rem]"
        } justify-between items-start max-sm:w-[100vw]  absolute top-16 mb-3
        
        `}
      >
        <div className="scrollbar-hidden">
          <VideoDisplayLeft item={videData} />
        </div>
        <div className="scrollbar-hidden">
          <VideoDisplayRight SuggestedVideos={SuggestedVideos} />
        </div>
      </div>
    </>
  );
};

export default VideoDetails;

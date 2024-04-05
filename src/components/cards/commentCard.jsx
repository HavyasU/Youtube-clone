import React from "react";
// const comment = {
//   kind: "youtube#commentThread",
//   id: "UgwZ7lIN03eIx9aAq6V4AaABAg",
//   snippet: {
//     channelId: "UCN1hnUccO4FD5WfM7ithXaw",
//     videoId: "7ghhRHRP6t4",
//     topLevelComment: {
//       kind: "youtube#comment",
//       id: "UgwZ7lIN03eIx9aAq6V4AaABAg",
//       snippet: {
//         channelId: "UCN1hnUccO4FD5WfM7ithXaw",
//         videoId: "7ghhRHRP6t4",
//         textDisplay: "The MOST ANNOYING VOICE!! This guy and this group suck!",
//         textOriginal: "The MOST ANNOYING VOICE!! This guy and this group suck!",
//         authorDisplayName: "@ggove11",
//         authorProfileImageUrl:
//           "https://yt3.ggpht.com/ytc/AIdro_ndoDww5wBWNbPJJ9XOdhgaf6pK9gfHvxyzhg=s48-c-k-c0x00ffffff-no-rj",
//         authorChannelUrl: "http://www.youtube.com/@ggove11",
//         authorChannelId: {
//           value: "UCjpePhbzmbNi4s-y_ECSaZA",
//         },
//         canRate: true,
//         viewerRating: "none",
//         likeCount: 0,
//         publishedAt: "2024-03-27T19:57:19Z",
//         updatedAt: "2024-03-27T19:57:19Z",
//       },
//     },
//     canReply: true,
//     totalReplyCount: 0,
//     isPublic: true,
//   },
// };
const CommentCard = ({ comment }) => {
  return (
    comment &&
    comment?.snippet && (
      <div className="flex  text-white my-2">
        <div className="max-sm:ml-2 min-w-[30px] w-[30px] h[30px] mr-1">
          <img
            src={
              comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
            }
            alt=""
            className=" rounded-full"
          />
        </div>
        <div className="flex flex-col pl-2">
          <h1 className="text-[16px] font-bold mb-2">
            {comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
          </h1>
          <h1 className="max-sm:text-[12px] text-[15px] font-normal pl-4 px-3">
            {comment?.snippet?.topLevelComment?.snippet?.textOriginal}
          </h1>
        </div>
      </div>
    )
  );
};

export default CommentCard;

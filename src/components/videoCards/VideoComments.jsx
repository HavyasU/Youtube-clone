import React, { useEffect, useState } from "react";
import { fetchVideoCommets } from "../../utils/fetchComments";
import CommentCard from "../cards/commentCard";

const VideoComments = ({ id }) => {
  const [comments, setComments] = useState();
  const fetchComments = async () => {
    setComments(await fetchVideoCommets(id));
  };
  useEffect(() => {
    fetchComments();
  }, [id]);
  return (
    <div className="max-sm:w-[90vw] max-sm:p-0 max-sm:ml-2 flex p-5  flex-col w-[50rem] mt-3 pl-5 overflow-hidden">
      {comments?.data?.items?.length > 0 &&
        comments?.data?.items?.map((ele, ind) => {
          console.log(ele);
          return <CommentCard key={ind} comment={ele} />;
        })}
    </div>
  );
};

export default VideoComments;

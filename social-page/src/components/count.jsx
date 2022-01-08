import React from "react";
import { useSelector } from "react-redux";
import LikeCount from "./LikeCount"; 
import CommentCount from "./CommentCount";
import ShareCount from "./ShareCount";
//import viewCount from "./viewCount";

function Count(){

    let viewCount = useSelector(state=>state.ind[0].views);

    let likeCount = useSelector(state=>state.ind[0].likes) ;
    let commentCount = useSelector(state=>state.ind[0].comments);
    let shareCount = useSelector(state=>state.ind[0].shares); 
    return (
        <div>
            <p>{`${viewCount} Views | ${likeCount} Likes | ${commentCount} Comments | ${shareCount} shares`}</p>
        <div>
            <LikeCount />
            <CommentCount />
            <ShareCount />
        </div>
        </div>
    );
}

export default Count;
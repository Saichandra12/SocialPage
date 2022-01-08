import React from "react";
import { useSelector } from "react-redux";
import LikeCount from "./LikeCount"; 
import CommentCount from "./CommentCount";
import ShareCount from "./ShareCount";
function Count(){
    let viewCount = 0;
    let likeCount = useSelector(state=>state.likeCount) ;
    let commentCount = useSelector(state=>state.commentCount);
    let shareCount = useSelector(state=>state.shareCount); 
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
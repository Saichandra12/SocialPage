import {useDispatch} from "react-redux";
import { action } from "../store/store";

function CommentCount(){

    const dispatch = useDispatch();
const increaseCommentCount = () =>{
    dispatch(action.addCommentCount(1));
}

 return (
        <button id="btn2"  onClick={increaseCommentCount}>comment</button>
    );
}

export default CommentCount;

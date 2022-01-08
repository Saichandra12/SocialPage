import {useDispatch} from "react-redux";
import { action } from "../store/store";

function LikeCount(){

    const dispatch = useDispatch();
const increaseLikeCount = () =>{
    dispatch(action.addLikeCount(1));
}

 return (
        <button id="btn1"  onClick={increaseLikeCount}>Like</button>
    );
}

export default LikeCount;

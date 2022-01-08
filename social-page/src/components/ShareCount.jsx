import {useDispatch} from "react-redux";
import { action } from "../store/store";

function ShareCount(){

    const dispatch = useDispatch();
const increaseShareCount = () =>{
    dispatch(action.addShareCount(1));
}

 return (
        <button id = "btn3"  onClick={increaseShareCount}>share</button>
    );
}

export default ShareCount;

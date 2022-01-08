import Name from "./name";
import About from "./about";
import Research from "./research";
import Description from "./description";
import Count from "./count";
import Avatar from "./Avatar"
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { action } from "../store/store";

function App() {
    const dispatch = useDispatch();
    
    useEffect(()=>{
        axios.get("http://localhost:4000/api/all")
          .then(res => {
            if (res.data.length === 0) {
              axios.post("http://localhost:4000/api/new")
              .then(res => dispatch(action.count(res.data)))
              .catch(err => console.log("error in initialising data",err))
              
            }
            else
              {
                //console.log(res.data)
                dispatch(action.count(res.data))}
            axios.put("http://localhost:4000/api/change",
              {views:res.data[0].views+1,id:res.data[0].id})
            })
          .catch(err => console.log("error in loading data",err))
      },[dispatch])
    return (
    <div className="container" id="body">
        <Avatar />
        <div className="name-about">
            <Name />
            <About />
        </div>
        <Research />
        <Description />
        <Count />
        
    </div>);
  }
  
  export default App;
  
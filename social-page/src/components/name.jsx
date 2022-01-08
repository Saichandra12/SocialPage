import React from "react";
import Data from "../data.json"


function Name(){
    return <h1 id="name">{Data.name}</h1>
}

export default Name;
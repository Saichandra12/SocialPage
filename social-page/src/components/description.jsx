import React from "react";
import Data from "../data.json";

function Description(){
    return (
        <p id = "description">{Data.description}</p>
    )
}

export default Description;
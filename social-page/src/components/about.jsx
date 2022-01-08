import React from "react";
import Data from "../data.json";

function About(){
    return (
        <div id="about">
            <p>{Data.about}</p>
            <p>{Data.about1}</p>
        </div>
    );
}

export default About;
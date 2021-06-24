import React, { useEffect, useState } from "react";
import Feature from "./feature";
import "./feature.scss";

function FeatureList()
{
    let [features, setFeatures]= useState([
        {
        feature: "Idk",
        votes: 1
        },
        {
        feature: "Another feature",
        votes: 12
        }
    ]);


    return <React.Fragment>
        {features.map( (featureObj, index) =>(
            <Feature feature={featureObj.feature} votes={featureObj.votes} />
            
        ))}
        
        </React.Fragment>
}

export default FeatureList;
import React, { useEffect, useState } from "react";
import Feature from "./feature";
import  {getUrl} from "../../services/getUrl"
import axios from "axios";
import "./feature.scss";

//Read all features from the api and render them
function FeatureList()
{
    let [features, setFeatures]= useState([]);

    useEffect(()=>{

        axios.get(getUrl() +"getFeatures")
        .then(res  => {
            console.log("Data", res.data["features"]);
            setFeatures(res.data["features"]);
        })


    }, [])

    function updateVotes(id: number)
    {
        alert("Voting for " + id);

        //TO DO: Connect to server to change vote for the user (check the url)

        //Use response for number of votes and whether or not the user voted
    }

    return <React.Fragment>
        {features ? features.map( (featureObj, index) =>(
            <Feature feature={featureObj} onVote={updateVotes} />
            
        )) : ""}
        
        </React.Fragment>
}

export default FeatureList;
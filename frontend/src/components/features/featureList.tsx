import React, { useEffect, useState } from "react";
import Feature from "./feature";
import "./feature.scss";

//Read all features from the api and render them
function FeatureList()
{
    let [features, setFeatures]= useState([
        {
        id: 0,
        description: "Some feature",
        votes: 1,
        userVoted:true
        },
        {
        id: 1,
        description: "Another feature",
        votes: 12,
        userVoted:false
        }
    ]);

    useEffect(()=>{

    }, [])

    function updateVotes(id: number)
    {
        alert("Voting for " + id);

        //TO DO: Connect to server to change vote for the user (check the url)

        //Use response for number of votes and whether or not the user voted
    }

    return <React.Fragment>
        {features.map( (featureObj, index) =>(
            <Feature feature={featureObj} onVote={updateVotes} />
            
        ))}
        
        </React.Fragment>
}

export default FeatureList;
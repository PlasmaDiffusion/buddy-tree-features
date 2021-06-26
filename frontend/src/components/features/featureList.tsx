import React, { useEffect, useState } from "react";
import Feature from "./feature";
import  {getServerURL, getUserFromURL, createGetRequest} from "../../services/getUrl"
import axios from "axios";
import "./feature.scss";
import FeatureInput from "../featureInput/featureInput";


//Read all features from the api and render them
function FeatureList()
{
    let [features, setFeatures]= useState([]);

    useEffect(()=>{
        getAllFeatures()
    }, [])

    //Use axios to send a get request of all features
    function getAllFeatures(){




        axios.get(createGetRequest()) 
        .then(res  => {
            console.log("Data", res.data["features"]);
            setFeatures(res.data["features"]);
        })
    }

    //Vote (or unvote) for a feature
    function updateVotes(featureID: number, index: number)
    {
        let user = getUserFromURL(true);
        if (user=="") return
        

        axios.post(getServerURL() +"voteForFeature", {id:featureID, user:user})
        .then(res  => {
            //Server should return list of features with the updated votes
            setFeatures(res.data["features"]);
        })
        
    }

    return <React.Fragment>
        <FeatureInput onEntered={getAllFeatures} />
        <div className="featureList">
        {features ? features.map( (featureObj, index) =>(
            <Feature feature={featureObj} key={"Feature_"+index} index={index} onVote={updateVotes} />
            
        )) : ""}
        </div>
        </React.Fragment>
}

export default FeatureList;
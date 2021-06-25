import React, { useEffect, useState } from "react";
import Feature from "./feature";
import  {getUrl} from "../../services/getUrl"
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

    
    function getAllFeatures(){
        axios.get(getUrl() +"getFeatures")
        .then(res  => {
            console.log("Data", res.data["features"]);
            setFeatures(res.data["features"]);
        })
    }

    function updateVotes(featureID: number, index: number)
    {

        //Get the user (simulated through url)
        const url = window.location.href;
        let params = url.split("/");
        let user = params[params.length-1];

        axios.post(getUrl() +"voteForFeature", {id:featureID, user:user})
        .then(res  => {

            setFeatures(res.data["features"]);
        })

        
    }

    return <React.Fragment>
        <FeatureInput onEntered={getAllFeatures} />
        {features.length>0 ? features.map( (featureObj, index) =>(
            <Feature feature={featureObj} key={"Feature_"+index} index={index} onVote={updateVotes} />
            
        )) : ""}
        
        </React.Fragment>
}

export default FeatureList;
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

    function updateVotes(id: number)
    {
        alert("Voting for " + id);

        //Get the user (simulated through url)
        const url = window.location.href;
        let params = url.split("/");
        let user = params[params.length-1];
        alert(user);

        // axios.post(getUrl() +"addFeature", {description:feature})
        // .then(res  => {
        //     //Clear the form and update the request without refreshing
        //     setFeature("");
        //     props.onEntered();
        // })

        //Use response for number of votes and whether or not the user voted
        let modifiedFeatures = [...features];
        
    }

    return <React.Fragment>
        <FeatureInput onEntered={getAllFeatures} />
        {features.length>0 ? features.map( (featureObj, index) =>(
            <Feature feature={featureObj} onVote={updateVotes} />
            
        )) : ""}
        
        </React.Fragment>
}

export default FeatureList;
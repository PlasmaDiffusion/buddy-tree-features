import React, { useEffect, useState } from "react";
import axios from "axios";
import {getServerURL} from "../../services/getUrl"
import "./featureInput.scss";

interface Props{
    onEntered: ()=>void;
}

//Render an input form, and submit a feature with a post request
function FeatureInput(props:Props)
{
    let [feature, setFeature]= useState("");


    function onChangeInput(e : React.ChangeEvent<HTMLTextAreaElement>)
    {
        setFeature(e.currentTarget.value)
    }

    function addFeature(e: React.FormEvent<HTMLFormElement>)
    {
        e.preventDefault();
        
        if (feature == "") return;

        //Send the new feature to the database
        axios.post(getServerURL() +"addFeature", {description:feature})
            .then(res  => {
                //Clear the form and update the request without refreshing
                setFeature("");
                props.onEntered();
            })

    }

    return <React.Fragment>
        <p id="inputPrompt">What new feature would you <br></br> like us to add to Buddytree?</p>
        <form onSubmit={addFeature}>
           <textarea name="feature" rows={2} onChange={onChangeInput} value={feature} required></textarea>
            <input type="submit" value="Add" />
        </form>
    </React.Fragment>
}

export default FeatureInput;
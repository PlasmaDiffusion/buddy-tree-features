import React, { useEffect, useState } from "react";
import axios from "axios";
import {getUrl} from "../../services/getUrl"

function FeatureInput()
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

        //Connect to the data base to add the feature
        axios.post(getUrl() +"addFeature", {description:feature})
            .then(res  => {
                console.log(res);
                setFeature("");
            })

    }

    return <React.Fragment>
        <p>What new feature would you like us to add to Buddytree?</p>
        <form onSubmit={addFeature}>
           <textarea name="feature" rows={2} onChange={onChangeInput} value={feature} required></textarea>
            <input type="submit" />
        </form>
    </React.Fragment>
}

export default FeatureInput;
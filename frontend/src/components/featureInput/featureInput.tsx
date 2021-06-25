import React, { useEffect, useState } from "react";


function FeatureInput()
{
    let [feature, setFeature]= useState("");


    function onChangeInput(e : React.ChangeEvent<HTMLTextAreaElement>)
    {
        setFeature(e.currentTarget.value)
    }

    function addFeature(e: React.FormEvent<HTMLFormElement>)
    {
        if (feature == "") return;

        //Connect to the data base to add the feature

    }

    return <React.Fragment>
        <p>What new feature would you like us to add to Buddytree?</p>
        <form onSubmit={addFeature}>
           <textarea name="feature" rows={2} onChange={onChangeInput} required></textarea>
            <input type="submit" />
        </form>
    </React.Fragment>
}

export default FeatureInput;
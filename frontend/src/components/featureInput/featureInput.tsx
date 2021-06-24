import React, { useEffect, useState } from "react";


function FeatureInput()
{
    let [feature, setFeature]= useState("");


    function onChangeInput(e : React.ChangeEvent<HTMLTextAreaElement>)
    {
        setFeature(e.currentTarget.value)
    }

    return <React.Fragment>
        <p>What new feature would you like us to add to Buddytree?</p>
        <form>
           <textarea rows={2} onChange={onChangeInput}></textarea>
            <input type="submit" />
        </form>
    </React.Fragment>
}

export default FeatureInput;
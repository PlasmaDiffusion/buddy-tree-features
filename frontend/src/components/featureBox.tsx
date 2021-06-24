import React, { useEffect, useState } from "react";
import Feature from "./feature/feature";


function FeatureBox()
{
    let [features, setFeatures]= useState([]);

    return <React.Fragment><Feature /></React.Fragment>
}

export default FeatureBox;
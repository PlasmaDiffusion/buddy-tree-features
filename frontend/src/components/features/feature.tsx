import React, { useEffect, useState } from "react";

interface Props{
    feature: string,
    votes: number,
}

function Feature(props: Props) {

    function updateVote(){

    }

    return <React.Fragment>
        <div>
            <p>{props.feature}</p><button className="voteBtn" onClick={updateVote}>👍</button> <p>{props.votes}</p>
        </div>
    </React.Fragment>

}

export default Feature;
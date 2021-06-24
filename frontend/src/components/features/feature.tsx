import React, { useEffect, useState } from "react";

//A feature component shows the feature, the vote button and vote count

interface Props{
    feature: {
        id: number,
        description: string,
        votes: number,
        userVoted: boolean,
    }
    onVote: (id:number)=>void;
}

function Feature(props: Props) {


    return <React.Fragment>
        <div>
            <p>{props.feature.description}</p>
            <button className={props.feature.userVoted ? "voteBtnVoted"  : "voteBtn"}
                onClick={()=>{props.onVote(props.feature.id)}}>
            👍
            </button>
            <p>{props.feature.votes}</p>
        </div>
    </React.Fragment>

}

export default Feature;
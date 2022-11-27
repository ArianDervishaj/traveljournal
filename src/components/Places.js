import React from "react";



function Places(props){

    return(
        <div className="places">
            <img src={`../assets/${props.image}`} alt="l'endroit" />
            <h3>{props.country}</h3>
            <a href={props.mapLink} target="_blank" rel='noreferrer'>link</a>
            <h1>{props.title}</h1>
            <p>{props.startDate} - {props.endDate}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default Places;
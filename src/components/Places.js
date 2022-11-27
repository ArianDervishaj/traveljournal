import React from "react";



function Places(props){

    return(

        <div className="places">
            <img className="places--photo" src={`../assets/${props.image}`} alt="l'endroit" />
            <div className="places--text">
                <img src="https://cdn.simpleicons.org/GoogleMaps/green" alt="globe" className="places--logo"/>
                <span className="places--location">{props.country}</span>
                <a  className="places--maplink" href={props.mapLink} target="_blank" rel='noreferrer'>View on Google Maps</a>
                <h1 className="places--title">{props.title}</h1>
                <p className="places--dates">{props.startDate} - {props.endDate}</p>
                <p className="places--description">{props.description}</p>
            </div>
        </div>

    )
}

export default Places;
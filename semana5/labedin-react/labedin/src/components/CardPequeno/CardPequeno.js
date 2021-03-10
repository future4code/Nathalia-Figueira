import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.icon } />
            <div>
                <p>{props.endereco}</p>
                <p>{props.endereco}</p>
            </div>
        </div>
    )
}

export default CardPequeno;
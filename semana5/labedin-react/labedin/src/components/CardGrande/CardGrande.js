import React from 'react';
import './CardGrande.css'

function CardGrande(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } />
            <div>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardGrande;
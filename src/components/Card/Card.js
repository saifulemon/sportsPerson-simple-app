import React from 'react';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { useState } from 'react';

const Card = (props) => {

    const { name, Role, age, salary, country, match, img } = props.player;
    // const [add] = useState(false)

    return (
        <div className="card">
            <img src={img} alt="player" className='card__image' />
            <p className="card__name">{name}</p>
            <div className="grid-container">
                <p>Age: {age}</p>
                <p>Role: {Role}</p>
                <p>Match: {match}</p>
                <p>Salary: $ {salary}</p>
                <p>Country: {country}</p>
            </div>
            <ul className="social-icons">
                <li><a href="hello"><i><FontAwesomeIcon icon={faTwitter} /></i></a></li>
                <li><a href="hello"><i><FontAwesomeIcon icon={faFacebook} /></i></a></li>
                <li><a href="hello"><i><FontAwesomeIcon icon={faInstagram} /></i></a></li>
            </ul>

            {/* {
                add ? 
                <button className="btn draw-border" onClick={() => props.handleRemovePlayer(props.player)}>Remove</button>
                : <button className="btn draw-border" onClick={
                    () => props.handleAddPlayer(props.player)
                }
                >Add to Info</button>
            } */}

            <button className="btn draw-border">Follow</button>
        </div>
    );
};

export default Card;
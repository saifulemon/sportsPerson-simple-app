import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter } from '@fortawesome/free-solid-svg-icons';
import './Card.css'

const Card = (props) => {

    const {name, Role, age, salary, country, match, img } = props.player;

    return (
        <>
            <div className='container'>
                <div className="card">
                    <img src={img} className='card__image'/>
                    <p className="card__name">{name}</p>
                    <div className="grid-container">
                        <p>Age: {age}</p>
                        <p>Role: {Role}</p>
                        <p>Match: {match}</p>
                        <p>Salary: {salary}</p>
                        <p>Country: {country}</p>
                    </div>
                    <ul className="social-icons">
                        {/* <li><a href="https://www.instagram.com/saiful_emon1"><FontAwesomeIcon icon={faTwitter}/></a></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-twitter" /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-github" /></li> */}
                    </ul>
                    <button className="btn draw-border">Follow</button>
                </div>
                <div className="card">
                    <img src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no" alt="Person" class="card__image"/>
                    <p className="card__name">{name}</p>
                    <div className="grid-container">

                    </div>
                    <ul className="social-icons">
                        {/* <li><a href=""><FontAwesomeIcon icon="fa-brands fa-instagram" /></a></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-twitter" /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-github" /></li> */}
                    </ul>
                    <button className="btn draw-border">Follow</button>
                </div>
                <div className="card">
                    <img src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no" alt="Person" class="card__image"/>
                    <p className="card__name">{name}</p>
                    <div className="grid-container">

                    </div>
                    <ul className="social-icons">
                        {/* <li><FontAwesomeIcon icon="fa-brands fa-instagram" /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-twitter" /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-github" /></li> */}
                    </ul>
                    <button className="btn draw-border">Follow</button>
                </div>
            </div> 
        </>
    );
};

export default Card;
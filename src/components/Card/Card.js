import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter } from '@fortawesome/free-solid-svg-icons';
import './Card.css'

const Card = () => {
    return (
        <>
            <div class="container">
                <div class="card">
                    <img src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no" alt="Person" class="card__image"/>
                    <p class="card__name">Lily-Grace Colley</p>
                    <div class="grid-container">

                    </div>
                    <ul class="social-icons">
                        {/* <li><a href="https://www.instagram.com/saiful_emon1"><FontAwesomeIcon icon={faTwitter}/></a></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-twitter" /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-github" /></li> */}
                    </ul>
                    <button class="btn draw-border">Follow</button>
                </div>
                <div class="card">
                    <img src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no" alt="Person" class="card__image"/>
                    <p class="card__name">Lily-Grace Colley</p>
                    <div class="grid-container">

                    <div class="grid-child-posts">
                        156 Post
                    </div>

                    <div class="grid-child-followers">
                        1012 Likes
                    </div>
                    </div>
                    <ul class="social-icons">
                        {/* <li><FontAwesomeIcon icon="fa-brands fa-instagram" /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-twitter" /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-github" /></li> */}
                    </ul>
                    <button class="btn draw-border">Follow</button>
                </div>
                <div class="card">
                    <img src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no" alt="Person" class="card__image"/>
                    <p class="card__name">Lily-Grace Colley</p>
                    <div class="grid-container">

                    <div class="grid-child-posts">
                        156 Post
                    </div>

                    <div class="grid-child-followers">
                        1012 Likes
                    </div>
                    </div>
                    <ul class="social-icons">
                        {/* <li><FontAwesomeIcon icon="fa-brands fa-instagram" /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-twitter" /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-github" /></li> */}
                    </ul>
                    <button class="btn draw-border">Follow</button>
                </div>
            </div> 
        </>
    );
};

export default Card;
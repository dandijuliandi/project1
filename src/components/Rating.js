import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

function Rating({ stars }) {
    return (
        <>
            <FontAwesomeIcon icon={stars >= 1 ? faStar : stars >= 0.5 ? faStarHalfAlt : farStar} color='#f8E825'/>
            <FontAwesomeIcon icon={stars >= 2 ? faStar : stars >= 1.5 ? faStarHalfAlt : farStar} color='#f8E825'/>
            <FontAwesomeIcon icon={stars >= 3 ? faStar : stars >= 2.5 ? faStarHalfAlt : farStar} color='#f8E825'/>
            <FontAwesomeIcon icon={stars >= 4 ? faStar : stars >= 3.5 ? faStarHalfAlt : farStar} color='#f8E825'/>
            <FontAwesomeIcon icon={stars >= 5 ? faStar : stars >= 4.5 ? faStarHalfAlt : farStar} color='#f8E825'/>
        </>
    )
}

export default Rating
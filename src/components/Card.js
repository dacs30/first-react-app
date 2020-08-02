import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='photo' src={`https://robohash.org/${id}`} />
            <div>
                <h2 className='tc'>{name}</h2>
                <p className='tc'>{email}</p>
            </div>
        </div>
    )
};

export default Card;

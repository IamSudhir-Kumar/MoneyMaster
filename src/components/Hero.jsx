import React from 'react';

const Hero = ({src}) => {
    return (
        <div>
            <video autoPlay loop muted >
                <src src={src} type='video/mp4' />
                </video>
        </div>
    );
};

export default Hero;

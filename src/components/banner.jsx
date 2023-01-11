import React, { useState } from 'react';


export const Banner = () => {

    const images = ["bababoue"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentImage = images[currentIndex];

    setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
    }, 2000);

    return (
        <div className="banner">
            <img src={currentImage} alt="Banner" />
        </div>
    );
};
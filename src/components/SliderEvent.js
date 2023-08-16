import React, { useState , useEffect } from 'react'
import { SliderImg } from '../data/SliderImg'
function SliderEvent() {
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % SliderImg.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <React.Fragment>
            
                <div className="slider-container">
                    <div className="slider-content">
                        {SliderImg.map((imageUrl, index) => (
                            <div key={index} className={`slide ${currentSlide === index ? 'active' : ''}`}>
                                <img src={imageUrl} alt={`Image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            
        </React.Fragment>
    )
}

export default SliderEvent
import React, { useState, useEffect } from 'react';


const SliderImages = [
    'https://media.istockphoto.com/id/1464678223/photo/happy-man-using-mobile-phone-on-back-seat-of-car.webp?b=1&s=170667a&w=0&k=20&c=uJ0XQssQQwxDda60iXsx2EGXYmqTSEKPTQk__oGjb5A=',
    'https://media.istockphoto.com/id/1142857528/photo/automatic-software-technology-system-for-efficient-work-with-the-most-advanced-technology.webp?b=1&s=170667a&w=0&k=20&c=vI5CxqvOZf4Av9XJqg70HRXUVaKkjfHFcd0wpog3oRY=',
    'https://media.istockphoto.com/id/457859971/photo/india-city-lights-map.webp?b=1&s=170667a&w=0&k=20&c=ebV_I2BHz4PaIPqBnm8iP5Ixa4nW4qrecpQdKEXOkYk='
];

const Footer = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % SliderImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <React.Fragment>


            <h5>Recent Activities</h5>
            <div className="slider-container">
                <div className="slider-content">
                    {SliderImages.map((imageUrl, index) => (
                        <div
                            key={index}
                            className={`slide ${currentSlide === index ? 'active' : ''}`}
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            <img src={imageUrl} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>


    );
};

export default Footer;

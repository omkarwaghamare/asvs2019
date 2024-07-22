import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slideshow = () => {
  const sliderRef = useRef(null);

  const photos = [
    "images/slide1.jpg",
    "images/slide2.jpg",
    "images/slide3.jpg",
    "images/slide4.jpg"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const slideshowContainerStyle = {
    width: '80%', // Adjust as needed
    margin: '0 auto', // Center the slideshow
    position: 'relative' // Positioning for navigation buttons
  };

  const imgStyle = {
    width: '100%', // Make sure the images fit within the container
    height: 'auto' // Maintain the aspect ratio
  };

  const buttonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    zIndex: 1
  };

  const prevButtonStyle = {
    ...buttonStyle,
    left: '0'
  };

  const nextButtonStyle = {
    ...buttonStyle,
    right: '0'
  };

  return (
    <div style={slideshowContainerStyle}>
      <button style={prevButtonStyle} onClick={() => sliderRef.current.slickPrev()}>
        &#9664; {/* Left arrow */}
      </button>
      <button style={nextButtonStyle} onClick={() => sliderRef.current.slickNext()}>
        &#9654; {/* Right arrow */}
      </button>
      <Slider ref={sliderRef} {...settings}>
        {photos.map((photo, index) => (
          <div key={index}>
            <img src={photo} alt={`Slide ${index + 1}`} style={imgStyle} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;


import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Header from "./Header";
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';



// styles
import '../App.css';

const imageData = [
  {
    label: "Image 1",
    alt: "image1",
    url:image1,
	siteUrl:"www.infoscanghana.com"
  },
  {
    label: "Image 2",
    alt: "image2",
    url:image2,
	siteUrl:"www.infoscanghana.com"
  },
  {
    label: "Image 3",
    alt: "image3",
    url: image3,
	siteUrl:"www.infoscanghana.com"
  },
  {
    label: "Image 4",
    alt: "image4",
    url:image4,
	siteUrl:"www.infoscanghana.com"
  },
  {
    label: "Image 5",
    alt: "image5",
    url:image5,
	siteUrl:"www.infoscanghana.com"
  }
];

const renderSlides = imageData.map((image) => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt} width='600' height='340' />
    <p className="legend">{image.label}</p>
  </div>
));

export default function ImgCarousel() {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return ( 
     
	 <div>
	  <Header/>
    <div className="ImgCarousel" align="center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
		showThumbs={false}
		interval="5000"
		trnsitiontime="5000"
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
        className="carousel-container"
		preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
      >
        {renderSlides}
      </Carousel>
	  
      </div>
    </div>
	
	
	
	
	
	
	
	
  );
}

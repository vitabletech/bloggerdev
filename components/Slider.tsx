import React, { useState } from 'react';
import { Slide } from '../types';

interface SliderProps {
  slides: Slide[];
}

const ChevronLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m15 18-6-6 6-6"/></svg>
);

const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6"/></svg>
);

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto h-96 not-prose my-6">
      <div className="w-full h-full rounded-lg overflow-hidden relative bg-gray-900">
        {slides.map((slide, index) => (
            <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0'}`}>
                 <img src={slide.imageUrl} alt={slide.caption} className="w-full h-full object-cover" />
                 <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white text-center">
                    <p>{slide.caption}</p>
                 </div>
            </div>
        ))}
      </div>
      
      <button onClick={goToPrevious} className="absolute top-1/2 left-2 -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors focus:outline-none focus:ring-2 focus:ring-white">
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      
      <button onClick={goToNext} className="absolute top-1/2 right-2 -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors focus:outline-none focus:ring-2 focus:ring-white">
        <ChevronRightIcon className="h-6 w-6" />
      </button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-colors ${currentIndex === slideIndex ? 'bg-white ring-2 ring-gray-300' : 'bg-gray-400 hover:bg-gray-200'}`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

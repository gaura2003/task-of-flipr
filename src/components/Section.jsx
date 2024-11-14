import React from 'react';
import image from '../assets/Client-First-IMAGES/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook.svg';

const Section = () => {
  return (
    <section className="relative w-full">
        <img className="absolute w-full h-full object-cover z-[-10]" src={image} alt="banner image" />
        <div className="bg-black bg-opacity-50 sm:bg-opacity-30 w-full text-white top-0 z-[1] h-[550px] md:h-[500px] sm:h-[400px] flex items-center sm:justify-start justify-center sm:px-0 px-6">
          <div className="sm:w-[90%]  sm:px-6 py-10 ">
            <p className="mb-2 text-sm md:mb-4 md:text-base">POSTED ON STARTUP</p>
            <h1 className="mb-4 text-3xl font-bold leading-tight md:mb-6 md:text-4xl lg:text-5xl">
              Step-by-step guide to choosing great font pairs
            </h1>
            <p className="text-xs md:text-sm">By Lorem ipsum | Aug 23 2022</p>
            <p className="mt-3 md:mt-5 text-sm md:text-base w-full md:w-[80%] lg:w-[75%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugit dese facere odio sunt alias labore maiores minus quae ad.
            </p>
            <div className="mt-4">
              <button className="bg-secondary text-gray-900 px-8 font-bold py-2 mt-4 rounded-sm">
                Read More &gt;
              </button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Section;

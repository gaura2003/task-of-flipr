import React from 'react';
import image from '../assets/Client-First-IMAGES/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook.svg';

const Section2 = () => {
  const slide = {
    image: image,
    category: "Startup",
    title: "Step-by-step guide to choosing great font pairs",
    author: "James West",
    date: "May 23, 2022",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  };

  return (
    <section className="relative h-full text-white">
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-8">
        <p className="text-sm uppercase">
          Posted on <span className="text-yellow-500">{slide.category}</span>
        </p>
        <h1 className="text-4xl font-bold mt-2">{slide.title}</h1>
        <p className="mt-2">
          By <span className="text-yellow-500">{slide.author}</span> | {slide.date}
        </p>
        <p className="mt-4 max-w-lg">{slide.description}</p>
        <button className="bg-secondary text-gray-900 px-8 font-bold py-2 mt-4 rounded-sm">
          Read More &gt;
        </button>
      </div>
    </section>
  );
};

export default Section2;

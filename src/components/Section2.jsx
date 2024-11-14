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
    // <section className="relative h-full text-white">
    //   <img
    //     src={slide.image}
    //     alt={slide.title}
    //     className="w-full h-full object-cover z-[-10]"
    //   />
    //   <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-8">
    //     <p className="text-sm uppercase">
    //       Posted on <span className="text-yellow-500">{slide.category}</span>
    //     </p>
    //     <h1 className="text-4xl font-bold mt-2">{slide.title}</h1>
    //     <p className="mt-2">
    //       By <span className="text-yellow-500">{slide.author}</span> | {slide.date}
    //     </p>
    //     <p className="mt-4 max-w-lg">{slide.description}</p>
    //     <button className="bg-secondary text-gray-900 px-8 font-bold py-2 mt-4 rounded-sm">
    //       Read More &gt;
    //     </button>
    //   </div>
    // </section>
    <section className="relative w-full">
        <img className="absolute w-full h-full object-cover z-[-10]" src={slide.image} alt="banner image" />
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
              {/* <Button text="Read More >" onClickHandler={() => navigate("/blog-post")} /> */}
              <button className="bg-secondary text-gray-900 px-8 font-bold py-2 mt-4 rounded-sm">
                Read More &gt;
              </button>
            </div>
          </div>
        </div>
      </section>

    
  );
};

export default Section2;

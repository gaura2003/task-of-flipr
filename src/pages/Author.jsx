import React from 'react';
import Bloger1 from "../assets/Client-First-IMAGES/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.svg";
import Bloger2 from "../assets/Client-First-IMAGES/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.svg";
import Bloger3 from "../assets/Client-First-IMAGES/fashion-woman-cute-shoes-.svg";
import Bloger4 from "../assets/Client-First-IMAGES/content-baker-with-delicious-puff-in-cafeteria-6205509.svg";
import Bloger5 from "../assets/Client-First-IMAGES/man -with-eyeglasses.svg";
import Bloger6 from "../assets/Client-First-IMAGES/woman-in-blue-shirt.svg";
import Bloger7 from "../assets/Client-First-IMAGES/content-unshaven-man-covering-eye-with-yellow-flower-.svg";
import Bloger8 from "../assets/Client-First-IMAGES/cheerful-young-ethnic-male-millennial-standing-near-stone-wall-and-smiling-6147118.svg";
import img from "../assets/Client-First-IMAGES/close-up-photography-of-man-wearing-sunglasses-1212984 (2).svg";
import shape1 from "../assets/Client-First-IMAGES/shape-1.svg";
import shape from "../assets/Client-First-IMAGES/shape.svg";
import Facebook from '../assets/Client-First-icons/facebook.svg';
import Twitter from '../assets/Client-First-icons/twitter.svg';
import Instagram from '../assets/Client-First-icons/instagram.svg';
import LinkedIn from '../assets/Client-First-icons/linkedin.svg';
import mirrorHigh from "../assets/Client-First-IMAGES/stained-glass-high-rise-building.svg";
import manBlackCrew from "../assets/Client-First-IMAGES/man-in-black-crew-neck-t-shirt-sitting-beside-woman-in-gray-crew-neck-t-shirt.svg";


const Authors = [
  {
    Name: 'Floyd Miles',
    ImageUrl: Bloger1,
    description: 'lorem ipsum dolor'
  },
  {
    Name: 'Dianne Russell',
    ImageUrl: Bloger2,
    description: 'lorem ipsum dolor'
  },
  {
    Name: 'Jenny Wilson',
    ImageUrl: Bloger3,
    description: 'lorem ipsum dolor'
  },
  {
    Name: 'Lestie Alexander',
    ImageUrl: Bloger4,
    description: 'lorem ipsum dolor'
  },
  {
    Name: "Guy Hawkins",
    ImageUrl: Bloger5,
    description: "lorem ipsum dolor",
  },
  {
    Name: "Eleanor Pena",
    ImageUrl: Bloger6,
    description: "lorem ipsum dolor",
  },
  {
    Name: "Robert Fox",
    ImageUrl: Bloger7,
    description: "lorem ipsum dolor",
  },
  {
    Name: "Lacob Jones",
    ImageUrl: Bloger8,
    description: "lorem ipsum dolor",
  },
];

function Author() {

  return (<div className="max-w-6xl mx-auto p-6">
    <header className="bg-[#F4F4F4] p-6 shadow-md flex items-center space-x-6 flex-col sm:flex-row">
      <img
        src={img}
        alt="Profile picture of a smiling person wearing sunglasses"
        className="w-auto h-52 sm:h-52 sm:w-52 object-cover"
      />
      <div className="mt-4 sm:mt-0">
        <h1 className="text-3xl font-bold">Hey there, I'm Andrew Johnson and welcome to my Blog</h1>
        <p className="text-gray-600 mt-2 sm:w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt.
        </p>
        <div className="social-links mt-4 flex gap-5 justify-center sm:justify-start">
          <img src={Facebook} alt="Facebook" className="w-6 h-6" />
          <img src={Twitter} alt="Twitter" className="w-6 h-6" />
          <img src={Instagram} alt="Instagram" className="w-6 h-6" />
          <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
        </div>
      </div>
    </header>
  
    <div className="flex justify-center relative pl-40 sm:relative right-14 sm:right-0 md:right-0 lg:right-0">
  <img 
    src={shape} 
    alt="Shape" 
  />
  <img 
    src={shape1} 
    alt="Shape 1" 
    className="md:w-72 w-28"
  />
</div>
  
    <main className="mt-12">
      <h2 className="text-2xl font-bold mb-6">My Posts</h2>
      <div className="space-y-12">
        <article className="flex flex-col sm:flex-row space-y-6 sm:space-x-6 sm:space-y-0">
          <img
            src={mirrorHigh}
            alt="Abstract image with geometric shapes"
            className="w-full sm:w-52 h-52 object-cover"
          />
          <div className="flex-1">
            <span className="text-purple-500 font-bold">BUSINESS</span>
            <h3 className="text-xl font-bold mt-2">Font sizes in UI design: The complete guide to follow</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </article>
  
        <article className="flex flex-col sm:flex-row space-y-6 sm:space-x-6 sm:space-y-0">
          <img
            src={manBlackCrew}
            alt="Group of people working together in an office"
            className="w-full sm:w-52 h-52 object-cover"
          />
          <div className="flex-1">
            <span className="text-blue-500 font-bold">ECONOMY</span>
            <h3 className="text-xl font-bold mt-2">How to build rapport with your web design clients</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </article>
      </div>
    </main>
  </div>
      
  );
}

export default Author;

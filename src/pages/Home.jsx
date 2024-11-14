import React from "react";
import Slider from "../components/Section2";
import Features from "../components/Features";
import Category from "./Category";
import Section1 from "../components/Section1";
import JoinNow from "../components/JoinNow";
import Section3 from "../components/Section3";
import startup from "../assets/Client-First-icons/startup.svg";
import business from "../assets/Client-First-icons/business.svg";
import economy from "../assets/Client-First-icons/economy.svg";
import technology from "../assets/Client-First-icons/technology.svg";
import AuthorCard from "../components/AuthorCard";
import Bloger1 from "../assets/Client-First-IMAGES/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.svg";
import Bloger2 from "../assets/Client-First-IMAGES/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.svg";
import Bloger3 from "../assets/Client-First-IMAGES/fashion-woman-cute-shoes-.svg";
import Bloger4 from "../assets/Client-First-IMAGES/content-baker-with-delicious-puff-in-cafeteria-6205509.svg";
import Logo1 from "../assets/Client-First-IMAGES/Logo 1.svg";
import Logo2 from "../assets/Client-First-IMAGES/Logo 2.svg";
import Logo3 from "../assets/Client-First-IMAGES/Logo 3.svg";
import Logo4 from "../assets/Client-First-IMAGES/Logo 4.svg";
import Logo5 from "../assets/Client-First-IMAGES/Logo 5.svg";
import BgImage from "../assets/Client-First-IMAGES/bgImageOfHomePage.svg";

export const defaultCategories = [
  { category: "Business", imageUrl: business },
  { category: "Startup", imageUrl: startup },
  { category: "Economy", imageUrl: economy },
  { category: "Technology", imageUrl: technology },
];

const Authors = [
  {
    Name: "Floyd Miles",
    ImageUrl: Bloger1,
    description: "lorem ipsum dolor",
  },
  {
    Name: "Dianne Russell",
    ImageUrl: Bloger2,
    description: "lorem ipsum dolor",
  },
  {
    Name: "Jenny Wilson",
    ImageUrl: Bloger3,
    description: "lorem ipsum dolor",
  },
  {
    Name: "Lestie Alexander",
    ImageUrl: Bloger4,
    description: "lorem ipsum dolor",
  },
];

const Home = () => (
  
  <>
    <Slider />
    <Features />
    <Section1 />

    <h2 className="text-2xl font-bold text-center mt-10">Choose A Category</h2>
    <div className="px-4 sm:px-6 lg:px-8">
      <Category Category={defaultCategories} />
    </div>

    {/* section */}
    <section data-aos="fade-up" className="px-6 mt-12 sm:mt-24 sm:px-16">
        <div className="relative w-full">
          <img className=" sm:w-[70%] mb-8 sm:mb-0" src={BgImage} alt="" />
          <div className="sm:absolute sm:bottom-0 sm:w-[40%] right-0 bg-white sm:p-20 shadow-sm flex flex-col gap-3">
            <h1>WHY WE STARTED</h1>
            <h2 className="text-xl font-semibold sm:text-3xl">It started out as a simple idea and evolved into our passion</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore voluptas aperiam non amet sint vitae modi! Incidunt consequatur dicta voluptatibus?</p>
            <div className="mt-2">
              {/* <Button text="Discover Our Story >" onClickHandler={() => navigate("/about-us")} /> */}
            </div>
          </div>
        </div>
      </section>

    <div className="flex flex-col justify-center items-center mt-10">
      <h2 className="text-center text-2xl font-bold">Authors List</h2>
      <AuthorCard AuthorsData={Authors} />
    </div>

    <div className="flex flex-col sm:flex-row md:flex-row gap-5 sm:gap-0 md:gap-0 lg:gap-0 justify-between  px-5 items-center mt-10">
      <div className="text-center">
        <p className="text-gray-400">We Are</p>
        <h4 className="text-2xl">Featured in</h4>
      </div>
      <img src={Logo1} alt="Logo1" />
      <img src={Logo2} alt="Logo2" />
      <img src={Logo3} alt="Logo3" />
      <img src={Logo4} alt="Logo4" />
      <img src={Logo5} alt="Logo5" />
    </div>

    <div className="px-4 sm:px-6 lg:px-8">
      <Section3 />
    </div>

    <div className="px-4 sm:px-6 lg:px-8">
      <JoinNow />
    </div>
  </>
);

export default Home;

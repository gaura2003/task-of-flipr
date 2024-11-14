import React from 'react';
import { useNavigate } from 'react-router-dom';
import Facebook from '../assets/Client-First-icons/facebook.svg';
import Twitter from '../assets/Client-First-icons/twitter.svg';
import Instagram from '../assets/Client-First-icons/instagram.svg';
import LinkedIn from '../assets/Client-First-icons/linkedin.svg';

function AuthorCard({ AuthorsData }) {
  const navigate = useNavigate();

  const handleAuthorClick = (author) => {
    navigate(`/author`, { state: { author } });
  };

  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
      {AuthorsData.map((author, index) => (
        <div
          key={index}
          onClick={() => handleAuthorClick(author)}
          className="p-4 bg-backgroundLight rounded shadow hover:scale-105 flex flex-col justify-center items-center transition transform hover:bg-backgroundLightYellow cursor-pointer"
        >
          <img src={author.ImageUrl} alt={author.Name} />
          <h2 className="text-2xl font-semibold text-primary">{author.Name}</h2>
          <p>{author.description}</p>
          <div className="flex space-x-4 mt-4">
            <img src={Facebook} alt="Facebook" />
            <img src={Twitter} alt="Twitter" />
            <img src={Instagram} alt="Instagram" />
            <img src={LinkedIn} alt="LinkedIn" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default AuthorCard;

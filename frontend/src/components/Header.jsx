import React from 'react';
import logo from '../assets/logo.png';
import { FaUser } from "react-icons/fa";
import { IoIosHelp } from "react-icons/io";
import { RiGalleryFill } from "react-icons/ri";
import { PlaceholdersAndVanishInput } from './ui/Placeholders-and-vanish-input';

const Header = () => {

  const handleChange = (e) => {
    const { value } = e.target;
    console.log("Input changed:", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with value:", e.target.elements[0].value);
  };

  return (
    <>
      <div className="header w-full flex items-center justify-between px-[20px] md:px-[2%] h-[65px]">
        <div className="logo">
          <img src={logo} alt="Logo" className="h-[35px]" />
        </div>
        <div className="flex items-center space-x-10">
          <div className="saved w-[32px] h-[32px] flex items-center justify-center cursor-pointer bg-[#f0f0f0] rounded-full">
            <RiGalleryFill className="text-[18px]" />
          </div>
          <div className="help w-[32px] h-[32px] flex items-center justify-center cursor-pointer bg-[#f0f0f0] rounded-full">
            <IoIosHelp className="text-[35px]" />
          </div>
          <div className="user w-[32px] h-[32px] flex items-center justify-center cursor-pointer bg-[#f0f0f0] rounded-full">
            <FaUser className="text-[15px]" />
          </div>
        </div>
      </div>

      {/* Input Component */}
      <PlaceholdersAndVanishInput 
        placeholders={["Search...", "Type here..."]} 
        onChange={handleChange} 
        onSubmit={handleSubmit} 
      />
    </>
  );
}

export default Header;

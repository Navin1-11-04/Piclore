import React from 'react';
import logo from '../assets/logo.png';
import { FaUser } from "react-icons/fa";
import { IoIosHelp } from "react-icons/io";
import { RiGalleryFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="header w-full flex items-center justify-between px-[20px] md:px-[2%] h-[65px]">
        <div className="logo">
          <img src={logo} alt="Logo" className="h-[35px]" />
        </div>
        <div className="flex items-center space-x-10">
          <Link to="/gallery" className="saved w-[32px] h-[32px] flex items-center justify-center cursor-pointer bg-[#f0f0f0] rounded-full">
            <RiGalleryFill className="text-[18px]" />
          </Link>
          <div className="help w-[32px] h-[32px] flex items-center justify-center cursor-pointer bg-[#f0f0f0] rounded-full">
            <IoIosHelp className="text-[35px]" />
          </div>
          <div className="user w-[32px] h-[32px] flex items-center justify-center cursor-pointer bg-[#f0f0f0] rounded-full">
            <FaUser className="text-[15px]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

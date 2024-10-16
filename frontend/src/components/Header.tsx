import React, { useState } from 'react';
import Favourites from '../pages/Favourites.tsx'; // Ensure the correct import path
import { LuHelpCircle } from 'react-icons/lu';
import { FaRegStar } from 'react-icons/fa';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { Separator } from '../components/ui/separator';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';
import Help from "../pages/Help.tsx"
interface HeaderProps {
  toggleSearchbar: () => void;
  isSearchOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSearchbar, isSearchOpen }) => {
  const [isFavouritesOpen, setFavouritesOpen] = useState<boolean>(false);
  const [isHelpOpen,setIsHelpOpen] = useState<boolean>(false);

  const toggleFavourites = () => {
    setFavouritesOpen((prev) => !prev);
  };

  const toggleHelp = () =>{
    setIsHelpOpen((prev)=>!prev);
  };

  return (
    <>
      <div className="header w-full h-[100px] flex items-center justify-center flex-col sticky top-0 z-[100]">
        <div className="w-full h-[55px] flex items-center justify-between text-neutral-800 font-normal px-8 bg-white">
          <h1>Piclore</h1>
          <div className="w-fit flex items-center justify-between gap-[2vh] text-[14px] text-zinc-600">
            <span>Sign in</span>
            <Separator orientation="vertical" />
            <span>Sign up</span>
          </div>
        </div>
        <div className="w-full h-[45px] flex items-center justify-between text-neutral-800 bg-neutral-50 px-8">
          <div className="w-fit flex items-center justify-between text-[15px] font-[440] tracking-wide leading-none h-full pt-5">
            <Link to="/" className="hover:border-b-2 border-neutral-800 h-full cursor-pointer">Home</Link>
            <Separator orientation="vertical" />
            <Link to="/explore" className="hover:border-b-2 border-neutral-800 h-full cursor-pointer">Explore</Link>
            <Separator orientation="vertical" />
            <Link to="/create" className="hover:border-b-2 border-neutral-800 h-full cursor-pointer">Create</Link>
          </div>
          <div className="w-fit flex items-center justify-between gap-[5vh] text-lg text-neutral-800">
            <span aria-label="Search" role="img" onClick={toggleSearchbar} className="cursor-pointer">
              <HiMiniMagnifyingGlass />
            </span>
            <span aria-label="Favorites" role="img" onClick={toggleFavourites} className="cursor-pointer">
              <FaRegStar />
            </span>
            <span aria-label="Help" role="img" onClick={toggleHelp} className='cursor-pointer'>
              <LuHelpCircle />
            </span>
          </div>
        </div>
      </div>

      {/* Conditionally render Favourites sheet based on isFavouritesOpen */}
      <Favourites isOpen={isFavouritesOpen} onClose={toggleFavourites} />      {/* Conditionally render Searchbar based on isSearchOpen */}
      <Help isOpen={isHelpOpen} onClose={toggleHelp} />      {/* Conditionally render Searchbar based on isSearchOpen */}
      {isSearchOpen && <Searchbar toggleSearchbar={toggleSearchbar} />}
    </>
  );
};

export default Header;

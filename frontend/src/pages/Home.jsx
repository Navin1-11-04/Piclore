import React, { useState } from 'react';
import { IconStar, IconHeart } from '@tabler/icons-react';
import { IconStarFilled, IconHeartFilled } from '@tabler/icons-react'; 
import { IconChevronsUp } from '@tabler/icons-react';
import ToolBar from '../components/ToolBar';

const Home = () => {
  const images = [
    "https://images.unsplash.com/photo-1727098043574-b0c96c53e4ab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1727808880393-022b3680722c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1723764881665-5b40cea01c9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1724505179167-359fd018c2cc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1724962867157-488b16c6ed39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1727373631848-e6da2d85c872?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1724376763727-df500e6bad63?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1727814719781-f7e2f0c05d9e?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1727915325711-5fdfb5a0a55c?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664283661240-f2401675c6b9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1728046421058-1e1e28e57193?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1727257050264-33a4f5f0982a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4OHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1719937050601-969f4f25d060?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This ensures smooth scrolling
    });
  };

  // State for each post's star and heart icon
  const [likedPosts, setLikedPosts] = useState(Array(images.length).fill(false));
  const [favouritedPosts, setFavouritedPosts] = useState(Array(images.length).fill(false));

  // Toggle like (heart icon)
  const toggleLike = (index) => {
    setLikedPosts((prev) => {
      const newLikes = [...prev];
      newLikes[index] = !newLikes[index]; // Toggle the state
      return newLikes;
    });
  };

  // Toggle favourite (star icon)
  const toggleFavourite = (index) => {
    setFavouritedPosts((prev) => {
      const newFavourites = [...prev];
      newFavourites[index] = !newFavourites[index]; // Toggle the state
      return newFavourites;
    });
  };
  
//   const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
// const shuffledImages = shuffleArray(images);

  return (
    <>
    <ToolBar/>
    <div className="home container mx-auto px-[5vw] sm:px-[2vw] md:px-[2vw] py-4 md:py-6 overflow-y-scroll" >
      <div className="posts masonry-grid columns-2 sm:columns-3 md:columns-4 lg:columns-6 gap-4 md:gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="post mb-6 bg-white overflow-hidden break-inside-avoid relative"
          > 
            <div className="post_icons absolute bottom-[75px] left-[7px] flex items-center justify-center px-[12px] py-[8px] gap-[9px] bg-[#1f1f1f8b] rounded-full">
              
              {/* Star Icon */}
              <div onClick={() => toggleFavourite(index)} className="cursor-pointer">
                {favouritedPosts[index] ? (
                  <IconStarFilled size={16} color='#fff' />
                ) : (
                  <IconStar size={16} stroke={2} color='#fff' />
                )}
              </div>

              {/* Heart Icon */}
              <div onClick={() => toggleLike(index)} className="cursor-pointer">
                {likedPosts[index] ? (
                  <IconHeartFilled size={16} color='#fff' />
                ) : (
                  <IconHeart size={16} stroke={2} color='#fff' />
                )}
              </div>

            </div>
            
            <img
              src={src}
              alt={`Random ${index}`}
              className="w-full h-auto max-h-[500px] object-cover aspect-auto rounded-xl break-inside-avoid card-body"
            />
            <div className="post_content w-full my-3 flex items-center justify-start gap-4">
              <div className="col-span-1 user_profile min-w-[40px] h-[40px] w-[40px] min-h-[40px] rounded-full bg-zinc-200 overflow-hidden flex items-center justify-center">
                {/* User profile icon or image */}
              </div>
              <div className="post_content leading-5 w-[calc(100%-50px)] tracking-none">
                <h2 className="text-base font-[500] text-[#1f1f1f] text-ellipsis overflow-hidden whitespace-nowrap">
                  Title
                </h2>
                <p className="text-[14px] text-[#2f2f2f] font-[430] text-ellipsis overflow-hidden whitespace-nowrap">
                  This is a description that might be too long to display fully.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="top_btn fixed z-10 w-[35px] h-[50px] right-[5vw] sm:right-[2vw]  bottom-4 md:bottom-6 sm:bottom- rounded-3xl bg-[#1f1f1f] flex items-center justify-center cursor-pointer" onClick={scrollToTop}>
          <IconChevronsUp stroke={2} color='#fff' size={23}/>
      </div>
    </div>
    </>
  );
};

export default Home;

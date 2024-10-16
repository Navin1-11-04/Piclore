import { useState, useEffect } from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";
import { Drawer, DrawerTrigger, DrawerContent,DrawerHeader,DrawerTitle, DrawerDescription } from '../components/ui/drawer.tsx'; // Assuming Drawer components are in a Drawer.js file
import { Skeleton } from '@/components/ui/skeleton.tsx';
import { IoClose } from "react-icons/io5";
const Home: React.FC = () => {
  const images: string[] = [
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

  // State to manage which post is favourited
  const [favouritedPosts, setFavouritedPosts] = useState<boolean[]>(Array(images.length).fill(false));

  // State to manage which post is clicked
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  // State for loading
  const [loading, setLoading] = useState(true);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulating a 3-second delay before data is loaded

    return () => clearTimeout(timer);
  }, []);

  // Toggle favourite (star icon)
  const toggleFavourite = (index: number): void => {
    setFavouritedPosts((prev) => {
      const newFavourites = [...prev];
      newFavourites[index] = !newFavourites[index];
      return newFavourites;
    });
  };

  const openDrawer = (index: number): void => {
    setSelectedPost(index);
  };

  return (
    <div className="home px-8 py-8 overflow-y-scroll w-full h-[calc(100vh_-100px)]">
      {loading ? (
        <Skeleton className="w-full h-[600px] rounded-lg mb-6" />
      ) : (
        <div className="posts masonry-grid columns-2 sm:columns-3 md:columns-4 lg:columns-6 gap-4 md:gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="post mb-6 bg-white overflow-hidden break-inside-avoid relative"
            >
              {/* Click image to open drawer */}
              <img
                src={src}
                alt={`Random ${index}`}
                onClick={() => openDrawer(index)}
                className="w-full h-auto max-h-[500px] object-cover aspect-auto rounded-xl break-inside-avoid card-body cursor-pointer"
              />

              <div className="post_icons absolute top-[7px] left-[7px] flex items-center justify-center px-[12px] py-[8px] gap-[9px] bg-neutral-800/70 rounded-full">
                {/* Star Icon */}
                <div onClick={() => toggleFavourite(index)} className="cursor-pointer text-white">
                  {favouritedPosts[index] ? <FaStar /> : <FaRegStar />}
                </div>
              </div>

              <div className="post_content w-full my-3 flex items-center justify-start gap-4">
                <div className="col-span-1 user_profile min-w-[40px] h-[40px] w-[40px] min-h-[40px] rounded-full bg-neutral-200 overflow-hidden flex items-center justify-center">
                </div>
                <div className="post_content leading-5 w-[calc(100%-50px)] tracking-none">
                  <h2 className="text-base font-medium text-[#1f1f1f] text-ellipsis overflow-hidden whitespace-nowrap">
                    Title
                  </h2>
                  <p className="text-sm text-[#2f2f2f]  text-ellipsis overflow-hidden whitespace-nowrap">
                    This is a description that might be too long to display fully.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedPost !== null && (
        <Drawer onOpenChange={(isOpen) => !isOpen && setSelectedPost(null)} open={selectedPost !== null}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Details<button onClick={() => setSelectedPost(null)} className="btn-close text-[15px] font-normal flex gap-[5px] hover:text-neutral-500">Close<IoClose/></button></DrawerTitle>
              <DrawerDescription>
                <img src={images[selectedPost]} alt={`Selected Post ${selectedPost}`} className="w-1/2 h-[70vh] rounded-md object-cover" />
                <p className="text-sm w-1/2">Description for the selected post. You can customize this section to show more details.</p>
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
};

export default Home;

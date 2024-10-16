import { AspectRatio } from "@/components/ui/aspect-ratio";

const Explore = () => {
  const categories = [
    {
      src: "https://images.unsplash.com/photo-1727638786395-6df4fc4a2048?q=80&w=1887&auto=format&fit=crop",
      alt: "Fashion & Beauty",
    },
    {
      src: "https://images.unsplash.com/photo-1728418580159-150e58d17c94?q=80&w=2071&auto=format&fit=crop",
      alt: "Animals",
    },
    {
      src: "https://images.unsplash.com/photo-1728440437305-076992503c1b?q=80&w=1932&auto=format&fit=crop",
      alt: "Architecture & Interiors",
    },
    {
      src: "https://images.unsplash.com/photo-1727907146879-3e4e93abf2d7?q=80&w=1932&auto=format&fit=crop",
      alt: "Food & Drink",
    },
    {
      src: "https://images.unsplash.com/photo-1728327510821-f2128b55f83f?q=80&w=1956&auto=format&fit=crop",
      alt: "Nature",
    },
    {
      src: "https://images.unsplash.com/photo-1727946227202-66ff968934c8?q=80&w=1887&auto=format&fit=crop",
      alt: "Travel",
    },
    {
      src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop",
      alt: "Technology",
    },
    {
      src: "https://images.unsplash.com/photo-1566932769119-7a1fb6d7ce23?q=80&w=2070&auto=format&fit=crop",
      alt: "Sports",
    },
    {
      src: "https://images.unsplash.com/photo-1459908676235-d5f02a50184b?q=80&w=2070&auto=format&fit=crop",
      alt: "Art",
    },
    {
      src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop",
      alt: "Music",
    }
  ];

  return (
    <div className="explore w-full h-[calc(100vh_-_100px)] px-8 py-8 overflow-y-scroll">
      <div className="explore_header w-fit text-neutral-800 mb-8 border-b-[2px] border-neutral-100">
        <h1 className="header text-3xl font-medium capitalize tracking-wide leading-none mb-3">
          Explore Your Creativity
        </h1>
        <p className="font-medium text-sm tracking-wide leading-none pb-6 text-neutral-700">
          Dive into a world of inspiration, ideas, and creativity curated just for you!
        </p>
      </div>

      <div className="categories w-full">
        <h2 className="font-medium text-xl mb-4">Explore Categories</h2>
        <div className="grid grid-cols-5 gap-8 mb-8 relative">
          {categories.slice(0, 10).map((category, index) => (
            <AspectRatio key={index} >
              <img
                src={category.src}
                alt={category.alt}
                className="w-full h-full object-cover rounded-xl"
              />
              <p className="text-[15px] font-normal capitalize absolute top-0 left-0 py-3 px-3 h-full w-full backdrop-blur-sm bg-neutral-800/75 rounded-xl text-white hover:backdrop-blur-0 cursor-pointer hover:bg-transparent">{category.alt}</p>
            </AspectRatio>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;

import React, { useState, KeyboardEvent } from 'react';
import { IoClose } from 'react-icons/io5';

interface SearchbarProps {
  toggleSearchbar: () => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ toggleSearchbar }) => {
  const [query, setQuery] = useState<string>('');

  const handleSearch = () => {
    if (query.trim()) {
      console.log('Searching for:', query);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="searchbar w-full bg-white/75 shadow-md absolute z-50 backdrop-blur-xl flex items-center justify-center px-4 h-[70px]">
      <input
        type="text"
        className="w-full px-4 py-2 border-none rounded-l-md focus:outline-none bg-transparent text-base font-normal"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={toggleSearchbar} className="text-2xl hover:text-neutral-500">
        <IoClose />
      </button>
    </div>
  );
};

export default Searchbar;

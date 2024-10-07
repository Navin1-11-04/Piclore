import React, { useState } from 'react';
import { PlaceholdersAndVanishInput } from './ui/Placeholders-and-vanish-input';

const ToolBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState(''); // Define searchTerm state
  const [suggestions] = useState([
    'Architectural',
    'Modern',
    'Nature',
    'Abstract Art',
    'Minimalist',
    'Vintage',
    'Photography',
    'Interior Design',
    'Urban Landscapes',
    'Typography',
    'Patterns',
    'Travel',
    'Landscapes',
    'Portraits',
    'Wildlife'
  ]);

  // Handle input changes
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with value:', searchTerm);
  };

  // Handle vanish animation complete
  const handleVanishComplete = () => {
    setIsOpen(false);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion); // Set clicked suggestion as the input value
  };

  return (
    <div className={`toolbar w-full flex flex-col items-center justify-center ${isOpen ? 'h-[auto]' : 'h-[0px]'}`}>
      <PlaceholdersAndVanishInput
        placeholders={['Search...', 'Type here...']}
        onChange={handleChange}
        onSubmit={handleSubmit}
        value={searchTerm} // Pass searchTerm to input field
        onVanishComplete={handleVanishComplete} 
      />

      <div className="tag_container flex gap-5 items-center justify-start overflow-x-scroll w-full px-[2.8vw] bg-white my-[10px]">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="tag bg-lime-200 min-w-fit py-[4px] px-[15px] text-xs rounded-full text-[#1f1f1f] font-medium cursor-pointer hover:bg-lime-300"
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolBar;

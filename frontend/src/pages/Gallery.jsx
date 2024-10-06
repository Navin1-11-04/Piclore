import React from 'react'

const Gallery = () => {
  return (
    <div className="gallery w-full min-h-screen bg-[#fffcfe] px-10 py-20 overflow-hidden">
      <div className="header w-full mb-6">
        <h1 className="text-3xl font-medium leading-none tracking-wide">Gallery</h1>
      </div>
      <div className="gallery-grid">
            <div class="grid-item" data-title="firstimage">Item 1</div>
            <div class="grid-item">Item 2</div>
            <div class="grid-item">Item 3</div>
            <div class="grid-item">Item 4</div>
            <div class="grid-item">Item 5</div>
            <div class="grid-item">Item 6</div>
            <div class="grid-item">Item 1</div>
            <div class="grid-item">Item 2</div>
            <div class="grid-item">Item 3</div>
            <div class="grid-item">Item 4</div>
            <div class="grid-item">Item 5</div>
            <div class="grid-item">Item 6</div>
      </div>    
    </div>
  )
}

export default Gallery

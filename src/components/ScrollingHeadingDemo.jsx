import React from 'react';
import CinematicScrollingHeading from './components/CinematicScrollingHeading';

// Demo component to showcase the scrolling heading
function ScrollingHeadingDemo() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Some content before */}
      <div className="h-screen bg-white flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">Scroll down to see the animated heading</h1>
      </div>
      
      {/* The scrolling heading */}
      <CinematicScrollingHeading />
      
      {/* Some content after */}
      <div className="h-screen bg-white flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">Content continues here</h1>
      </div>
    </div>
  );
}

export default ScrollingHeadingDemo;

"use client"

import { useEffect, useState } from "react";
import { ArrowCircleRightIcon, ArrowCircleUpIcon } from "@heroicons/react/outline";
const App = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <>
      

      {showButton && (
        <button onClick={scrollToTop} className="fixed bottom-10 right-9 mt-[5vh] w-12 h-12 text-lg rounded-full text-center border text-white border-red-600 lg:w-20 lg:h-20">
          <ArrowCircleUpIcon className="bg-red-600 rounded-full"/>
        </button>
      )}
      {/* &#8679; is used to create the upward arrow */}
    </>
  );
};

export default App;

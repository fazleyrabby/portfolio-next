import React, { useEffect, useState } from "react";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
  
    // Top: 0 takes us all the way back to the top of the page
    // Behavior: smooth keeps it smooth!
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      // Button is displayed after scrolling for 500 pixels
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
  
  //scroll-to-top classes: fixed, bottom:0, right:0
    return (
      <div className="fixed bottom-6 right-6">
        {isVisible && (
          <div onClick={scrollToTop} className="p-2 rounded-md bg-black cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 fill-white" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
</svg>
          </div>
        )}
      </div>
    );
  }
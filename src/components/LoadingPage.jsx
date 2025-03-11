import React, { useState, useEffect } from "react";
import LoadingPageMobile from "../components/LoadingPageMobile";
import LoadingPageDesktop from "../components/LoadingPageDesktop";

const LoadingPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <LoadingPageMobile /> : <LoadingPageDesktop />;
};

export default LoadingPage;

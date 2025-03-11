// LoadingPageMobile.jsx
import React, { useEffect } from "react";
import gsap from "gsap";

const LoadingPageMobile = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".black-page",
      { x: "-100%" },
      { x: "0%", duration: 1, ease: "power2.inOut" },
      "anim"
    );

    tl.fromTo(
      ".white-page",
      { x: "100%" },
      { x: "0%", duration: 1, ease: "power2.inOut" },
      "anim"
    );

    tl.to(".text", { opacity: 1, duration: 1, ease: "power2.inOut" });
  }, []);

  return (
    <div className="fixed inset-0 bg-[#3d0301b0] z-50 flex justify-center items-center">
      <div className="relative w-full h-full overflow-hidden">
        <div className="flex items-center justify-center">
          <i className="ri-shopping-bag-fill text-[35vw] mt-35 text-[#3d0301]"></i>
        </div>

        <div>
          <img
            src="./images/loading1.jpg"
            alt="Loading 1"
            className="absolute top-0 left-0 w-[75%] h-full black-page rounded-r-full"
          />
        </div>

        <div>
          <img
            src="./images/loading2.jpg"
            alt="Loading 2"
            className="absolute top-0 right-0 w-[75%] h-full white-page rounded-l-full"
          />
        </div>

        <div className="absolute text-6xl font-bold text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 text text-center">
          Best Seller
        </div>
      </div>
    </div>
  );
};

export default LoadingPageMobile;

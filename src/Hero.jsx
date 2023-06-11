import gpsLogo from "/logo.png";
import "./App.css";

import { useState, useEffect } from "react";
/*
import { IoMdBusiness } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";
import { BsWater } from "react-icons/bs";
import { RiGpsLine } from "react-icons/ri";*/

function Hero() {
  const [Active, setActive] = useState(false);
  
  /*
  const [scrollPositionY, setScrollPositionY] = useState(0);
  const getScrollPostionY = () => {
    setScrollPositionY(window.scrollY);
  };
  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", getScrollPostionY);
    };

    watchScroll();
    if (scrollPositionY > 250) {
      console.log("trigger!!");
      setActive(true);
    }
    if (scrollPositionY < 250) {
      console.log("trigger~~");
      //setActive(false)
    }
    return () => {
      window.removeEventListener("scroll", setScrollPositionY);
    };
  });
*/
  return (
    <div className="p-0 m-0 ">
      <div className="anime hero h-[10vh] bg-white sm:bg-opacity-0 relative shadow-2xl sm:min-h-screen z-50">
        <div className="hero-content flex flex-col lg:flex-row p-0">
          <div className="bg-white sm:absolute  h-full sm:w-2/5 flex sm:flex-col sm:left-0 z-50">
            <img
              src={gpsLogo}
              alt="gps.logo.png"
              className="w-48 sm:w-5/6 sm:my-auto mx-auto"
            />
          </div>
          <div className="hidden sm:block container-flex absolute left-1/2">
            <h1 className="sm:text-5xl font-bold w-2/3 text-center italic text-white capitalize  ">
              <span className="">
                ''productivo, garantizando de esta forma empeñamos al
                mejoramiento continuo de nuestros procesos y sistema''
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import React, { useState, useEffect } from "react";
import logo from "/logo.png";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  const closeSidebarOnScroll = () => {
    if (sidebar) {
      setSidebar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", closeSidebarOnScroll);
    return () => {
      window.removeEventListener("scroll", closeSidebarOnScroll);
    };
  }, [sidebar]);

  return (
    <div className="bg-black p-2 md:p-4 text-white h-[60px] md:h-[125px] md:w-full shadow-lg z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 md:gap-4">
          <img
            src={logo}
            alt="Logo"
            className="h-[30px] w-[41px] md:h-[60px] md:w-[82px] m-1 md:m-3"
          />
          <div>
            <h2 className="text-sm md:text-xl font-bold">RUDRA CONSTRUCTION</h2>
            <h4 className="text-xs md:text-sm">BUILDERS INC.</h4>
          </div>
        </div>
        <div className="mr-2 md:mr-4">
          {" "}
          {/* Icon is visible on both mobile and desktop */}
          <FaBars
            onClick={handleSidebar}
            className="text-2xl md:text-4xl cursor-pointer"
          />
        </div>
      </div>
      <Sidebar sidebar={sidebar} handleSidebar={handleSidebar} />
    </div>
  );
};

export default Navbar;

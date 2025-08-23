import React from "react";
import { motion } from "framer-motion";
import Logo from "@/assets/logo.png";
import Company from "@/assets/Company.png";
import Menu from "@/assets/menu.svg";
import Search from "@/assets/search.svg";
import mail from "@/assets/mail.svg";
import bell from "@/assets/bell.svg";
import profileFallback from "@/assets/profile.jpg";
import setting from "@/assets/setting.svg";

function Navbar({ toggleSidebar }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full z-50 bg-white px-4 py-3 border-b shadow-sm flex items-center justify-between"
    >
      {/* Left Side */}
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="md:hidden">
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <img src={Logo} alt="Company Logo" className="h-14 hidden md:block" />
        <img src={Company} alt="Company Name" className="h-14 hidden md:block" />
        <img src={Menu} alt="Menu Icon" className="h-5 hidden md:block" />

        <div className="flex items-center border rounded-md px-2 py-1 bg-gray-50">
          <img src={Search} alt="Search Icon" className="h-5 mr-2" />
          <input
            type="text"
            placeholder="Search here"
            className="outline-none bg-transparent text-sm"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        <img src={mail} alt="Mail Notifications" className="w-6 h-6 cursor-pointer" />
        <img src={bell} alt="Alerts" className="w-6 h-6 cursor-pointer" />

        <span className="text-sm text-gray-800 hidden sm:inline">
          {"Name"} {"data.department"}
        </span>

        <img
          src={profileFallback}
          alt="User Profile"
          className="w-8 h-8 rounded-md object-cover"
        />

        <img
          src={setting}
          alt="Settings"
          className="w-6 h-6 cursor-pointer"
        />
      </div>
    </motion.header>
  );
}

export default Navbar;

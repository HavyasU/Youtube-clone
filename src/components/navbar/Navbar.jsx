import React, { useContext, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "/applogo.png";
import havyas from "/havyas.jpg";
import MicIcon from "@mui/icons-material/Mic";
import Sidenav from "../sidenav/sidenav";
import { GlobalContext } from "../../context/context";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = ({ setCategory }) => {
  const { navOpen, setNavOpen, searchInput, setSearchInput } =
    useContext(GlobalContext);
  const navigate = useNavigate(0);
  return (
    <>
      <div
        onKeyDown={(e) =>
          e.key == "Enter" &&
          searchInput.toString().trim() != "" &&
          navigate(`/search/${searchInput}`)
        }
        className="flex w-full h-[4rem] bg-[#171717] fixed z-[99] justify-between items-center overflow-y-scroll"
      >
        <div className="max-sm:pl-0 max-sm:ml-1 max-sm:gap-0 max-sm:w-fit w-44 pl-3 h-full flex justify-center items-center gap-4 ">
          <div
            className="max-sm:text-[1.5rem] max-sm:w-[30px] max-sm:h-[30px] max-sm:mx-1 w-[40px] h-[40px] text-[1.8rem] rounded-full flex text-center justify-center items-center hover:bg-gray-700"
            onClick={() => setNavOpen(!navOpen)}
          >
            <MenuIcon fontSize={"inherit"} />
          </div>
          <NavLink to={"/"} className={"p-0"}>
            <img
              width={100}
              className="max-sm:w-[80px] max-sm:ml-0"
              src={logo}
              alt="logo"
            />
          </NavLink>
        </div>
        <div className="flex justify-center  items-center text-center gap-3">
          <div className="flex justify-center   h-[3rem] items-center text-center gap-3">
            <div className="max-md:w-[43vw] max-sm:h-[1.8rem] max-sm:text-[10px] max-lg:w-[25rem] flex w-[35rem] rounded-full justify-center h-[2.3rem] bg-gray-800 items-center">
              <input
                type="text"
                placeholder="Search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full h-full text-white max-sm:text-[15px]  rounded-full rounded-r-none bg-transparent text-lg py-2 px-2 outline-none font-bold  focus:border-2 border-blue-600 "
              />
              <div
                onClick={(e) => {
                  searchInput.toString().trim() != ""  && navigate(`/search/${searchInput}`);
                }}
                className="max-sm:w-[40px] w-[60px] max-sm:text-[20px] bg-gray-500 cursor-pointer min-h-full rounded-r-full flex text-center justify-center items-center hover:bg-gray-700"
              >
                <SearchIcon fontSize="inherit" />
              </div>
            </div>

            <div className="max-sm:hidden max-sm:h-[40px] w-[40px] text-[25px]  bg-gray-500 cursor-pointer h-[40px] rounded-full flex text-center justify-center items-center hover:bg-gray-700">
              <MicIcon fontSize="inherit" className="pt-1 object-cover" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="w-[45px] max-sm:hidden cursor-pointer h-[45px] rounded-full flex text-center justify-center items-center hover:bg-gray-700">
            <VideoCallIcon />
          </div>
          <div className="w-[45px]  max-sm:hidden  cursor-pointer h-[45px] rounded-full flex text-center justify-center items-center hover:bg-gray-700">
            <CircleNotificationsIcon />
          </div>
          <div className="max-sm:w-[28px] max-sm:mr-2 mr-4 max-sm:h-[28px] overflow-hidden w-[30px] text-[20px] border-2 bg-gray-500 cursor-pointer h-[30px] rounded-full flex text-center justify-center items-center hover:bg-gray-700">
            <a href="https://havyas.vercel.app">
              <img src={havyas} alt="" className="" />
            </a>
          </div>
        </div>
      </div>
      <Sidenav
        setCategory={setCategory}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
      />
    </>
  );
};

export default Navbar;

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import {
  AutoFixHigh,
  EmojiEvents,
  Javascript,
  Lightbulb,
  LiveTv,
  Movie,
  MusicNote,
  Newspaper,
  SportsEsports,
  Style,
  Terminal,
  Whatshot,
} from "@mui/icons-material";
const Sidenav = ({ navOpen, setCategory }) => {
  const navigate = useNavigate();
  const style =
    "max-sm:pl-3 max-sm:h-[2.5rem] max-sm:text-[12px] max-sm:w-[99%]  w-[95%] h-[2.9rem] gap-[7px] rounded-md  bg-[#35352d] flex justify-start items-center pl-3 cursor-pointer text-[19px] font-bold hover:bg-gray-600";
  const navItems = [
    {
      name: "Home",
      icon: <HomeIcon className="max-sm:text-inherit" />,
    },
    {
      name: "Trending",
      icon: <Whatshot className="max-sm:text-inherit" />,
    },
    {
      name: "Music",
      icon: <MusicNote className="max-sm:text-inherit" />,
    },
    {
      name: "Films",
      icon: <Movie className="max-sm:text-inherit" />,
    },
    {
      name: "Live",
      icon: <LiveTv className="max-sm:text-inherit" />,
    },
    {
      name: "Gaming",
      icon: <SportsEsports className="max-sm:text-inherit" />,
    },
    {
      name: "News",
      icon: <Newspaper className="max-sm:text-inherit" />,
    },
    {
      name: "Sports",
      icon: <EmojiEvents className="max-sm:text-inherit" />,
    },
    {
      name: "Learnings",
      icon: <Lightbulb className="max-sm:text-inherit" />,
    },
    {
      name: "React JS",
      icon: <Javascript className="max-sm:text-inherit" />,
    },
    {
      name: "Coding",
      icon: <Terminal className="max-sm:text-inherit" />,
    },
    {
      name: "Fashion",
      icon: <Style className="max-sm:text-inherit" />,
    },
    {
      name: "Beauty",
      icon: <AutoFixHigh className="max-sm:text-inherit" />,
    },
  ];

  return (
    <div
      className={`  bg-[#171718] h-full pb-16 p-3 z-[99] fixed top-14  overflow-hidden overflow-y-scroll scrollbar-small ${
        navOpen
          ? "max-sm:fixed max-sm:w-[10rem] w-[15rem]"
          : "max-sm:hidden w-[6rem] "
      }`}
    >
      <ul className="max-sm:text-lg flex flex-col w-[90%] py-2 justify-center items-center gap-[10px]">
        {navItems &&
          navItems.map((ele, ind) => {
            return (
              <li
                key={ind}
                className={`${style}`}
                onClick={() => {
                  navigate("/");
                  setCategory(
                    ele?.name === "Home"
                      ? "top kannada hindi malayalam Trending latest"
                      : ele?.name
                  );
                }}
              >
                {ele && ele.icon}
                {navOpen && ele?.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Sidenav;

import React, { useState } from "react";
import { useRecoilState } from "recoil";
import SideMenuState from "../atoms/SideMenu-atom";

import SignButton from "./SignButton";
// Svgs
import logo from "../Assets/logo.svg";
import arrowDown from "../Assets/icon-arrow-down.svg";
import arrowUp from "../Assets/icon-arrow-up.svg";
import toDoIcon from "../Assets/icon-todo.svg";
import calender from "../Assets/icon-calendar.svg";
import reminder from "../Assets/icon-reminders.svg";
import planning from "../Assets/icon-planning.svg";
import menuIcon from "../Assets/icon-menu.svg";
import SideMenu from "./SideMenu";

export const Navbar = () => {
  let [isFeatOpen, setIsFeatOpen] = useState(false);
  const [Featuers, setFeatures] = useState([
    {
      icon: toDoIcon,
      title: "Todo List",
    },
    {
      icon: calender,
      title: "Calender",
    },
    {
      icon: reminder,
      title: "Reminder",
    },
    {
      icon: planning,
      title: "Planning",
    },
  ]);

  let [isComOpen, setComOpen] = useState(false);
  let [company, setCompany] = useState(["History", "Our Team", "Blog"]);

  const [sideMenu, setSideMenu] = useRecoilState(SideMenuState);
  return (
    <header>
      <nav className="py-6 px-7 flex items-center justify-between">
        <div className="logo mr-16">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="links hidden md:flex gap-5">
          <div
            className="relative"
            onClick={() => {
              setIsFeatOpen((prev) => !prev);
            }}
          >
            <li className="list-none cursor-pointer text-secondary font-semibold active:text-black hover:text-black transition-all duration-200">
              Featuers
              <span className="inline-block ml-1">
                {isFeatOpen ? <img src={arrowUp} /> : <img src={arrowDown} />}
              </span>
            </li>

            {isFeatOpen && (
              <div className="absolute z-10 top-[45px] right-0 w-[160px] rounded-xl p-3 bg-white shadow-[0_0_30px_-10px_#8c8c8c]">
                {Featuers.map((item) => {
                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-2 p-2 text-secondary hover:text-black transition-all duration-200"
                    >
                      <img src={item.icon} alt="icon" />
                      <a href="#" className="">
                        {item.title}
                      </a>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div
            className="relative"
            onClick={() => {
              setComOpen((prev) => !prev);
            }}
          >
            <li className="list-none cursor-pointer font-semibold text-secondary hover:text-black transition-all duration-200">
              Company
              <span className="inline-block ml-1">
                {isComOpen ? (
                  <img src={arrowUp} alt="arrow" />
                ) : (
                  <img src={arrowDown} alt="Arrow" />
                )}
              </span>
            </li>
            {isComOpen && (
              <div className="absolute z-10 top-[45px] w-[120px] rounded-xl p-3 bg-white shadow-[0_0_30px_-10px_#8c8c8c]">
                {company.map((item) => {
                  return (
                    <div key={item} className="p-1">
                      <a
                        href="#"
                        className="text-secondary hover:text-black transition-all duration-200 p-2"
                      >
                        {item}
                      </a>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="text-secondary font-semibold cursor-pointer hover:text-black transition-all duration-200">
            <a href="#"> Careers</a>
          </div>
          <div className="text-secondary font-semibold cursor-pointer hover:text-black transition-all duration-200">
            <a href="#"> About </a>
          </div>
        </div>
        <div className="hidden md:block flex-1 text-right">
          <SignButton title="Login" />
          <SignButton title="Register" />
        </div>
        <div
          className="md:hidden cursor-pointer"
          onClick={() => {
            setSideMenu((prev) => !prev);
          }}
        >
          <img className="" src={menuIcon} alt="menu-icon" />
        </div>
      </nav>
      {sideMenu ? (
        <div className="fixed z-50 top-0 right-0 transition-all duration-300 h-[100vh] w-64 bg-white p-4 shadow-[10px_10px_10px_10px_rgba(0,0,0,0.3)]">
          <SideMenu />
        </div>
      ) : (
        <div className="fixed z-50 top-0 right-[-1000px] transition-all duration-300 h-[100vh] w-64 bg-white p-4 shadow-[10px_10px_10px_10px_rgba(0,0,0,0.3)]">
          <SideMenu />
        </div>
      )}
    </header>
  );
};

export default Navbar;

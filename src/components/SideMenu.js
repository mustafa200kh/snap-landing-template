import React, { useState } from "react";
import { useRecoilState } from "recoil";
import SideMenuState from "../atoms/SideMenu-atom";
// Icons
import closeMenu from "../Assets/icon-close-menu.svg";
import arrowDown from "../Assets/icon-arrow-down.svg";
import arrowUp from "../Assets/icon-arrow-up.svg";
import toDoIcon from "../Assets/icon-todo.svg";
import calender from "../Assets/icon-calendar.svg";
import reminder from "../Assets/icon-reminders.svg";
import planning from "../Assets/icon-planning.svg";
import SignButton from "./SignButton";

const SideMenu = () => {
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

  // to Contol the opening and closing of side menu
  const [sideMenu, setSideMenu] = useRecoilState(SideMenuState);
  return (
    <>
      <div
        className="block mb-10 relative"
        onClick={() => {
          setSideMenu((prev) => !prev);
        }}
      >
        <img
          className="object-contain absolute right-0 cursor-pointer"
          src={closeMenu}
          alt="close-btn"
        />
      </div>
      <div className="flex flex-col">
        <div
          className="p-3"
          onClick={() => {
            setIsFeatOpen((prev) => !prev);
          }}
        >
          <p className="text-secondary cursor-pointer">
            Featuers
            <span className="ml-1">
              {isFeatOpen ? (
                <img className="inline-block" src={arrowUp} alt="arrowup" />
              ) : (
                <img className="inline-block" src={arrowDown} alt="arrowdown" />
              )}
            </span>
          </p>
          {isFeatOpen && (
            <div className="ml-5 mt-5">
              {Featuers.map((item) => {
                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-2 p-2 text-secondary"
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
          className="p-3 cursor-pointer text-secondary"
          onClick={() => {
            setComOpen((prev) => !prev);
          }}
        >
          <p>
            Company
            <span className="ml-1">
              {isComOpen ? (
                <img className="inline-block" src={arrowUp} alt="arrowup" />
              ) : (
                <img className="inline-block" src={arrowDown} alt="arrowDown" />
              )}
            </span>
          </p>
          {isComOpen && (
            <div className="ml-5 mt-5">
              {company.map((item) => {
                return (
                  <div key={item} className="p-1">
                    <a href="#" className="text-secondary p-2">
                      {item}
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="p-3 cursor-pointer text-secondary">
          <a href="#"> Careers </a>
        </div>
        <div className="p-3 cursor-pointer text-secondary">
          <a href="#"> About </a>
        </div>
        <div className="">
          <div>
            <SignButton title="Login" />
          </div>
          <div>
            <SignButton title="Register" />
          </div>
        </div>
      </div>
    </>
  );
};
export default SideMenu;

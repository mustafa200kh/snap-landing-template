import React, { useState } from "react";
// Assets
import image from "../Assets/image-hero-desktop.png";
import audioP from "../Assets/client-audiophile.svg";
import dataBiz from "../Assets/client-databiz.svg";
import marker from "../Assets/client-maker.svg";
import meet from "../Assets/client-meet.svg";

const Landing = () => {
  const [client, setClient] = useState([audioP, dataBiz, marker, meet]);
  return (
    <div className="container mx-auto">
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between">
        <div className="md:basis-[60%]">
          <p className="mb-6 md:mb-10 font-bold mt-10 text-[35px] md:text-[50px] text-center md:text-left">
            Make <br className="hidden md:block" />
            remote work
          </p>
          <p className="text-secondary font-semibold text-center md:text-left mb-6">
            Get your team in sync, no matter your location.
            <br />
            Streamline processes, create team rituals, and
            <br />
            watch productivity soar.
          </p>
          <div className="text-center md:text-left mb-7">
            <button className="bg-black text-white py-2 px-4 md:py-3 md:px-6 rounded-xl border-[1px] border-solid border-black transition-all duration-200 hover:text-black hover:bg-white">
              Learn more
            </button>
          </div>
          <div className="flex items-center justify-around mb-5">
            {client.map((e) => {
              return (
                <div key={e} className="basis-[20%]">
                  <img className="max-w-full" src={e} alt="Client" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:basis-[30%]">
          <img className="max-w-full" src={image} alt="client-meeting" />
        </div>
      </div>
    </div>
  );
};

export default Landing;

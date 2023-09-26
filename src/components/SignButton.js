import React from "react";

const SignButton = (props) => {
  return (
    <>
      {props.title === "Register" ? (
        <div
          className={`inline-block cursor-pointer w-full md:w-fit px-6 py-2 text-secondary text-center font-medium bg-transparent hover:text-primary border-[2px] border-secondary hover:border-primary transition-all duration-200 rounded-2xl`}
        >
          <button className=""> {props.title} </button>
        </div>
      ) : (
        <div
          className={`inline-block cursor-pointer w-full md:w-fit px-6 py-2 text-secondary text-center font-medium bg-transparent hover:text-primary transition-all duration-200 rounded-2xl`}
        >
          <button className=""> {props.title} </button>
        </div>
      )}
    </>
  );
};
export default SignButton;

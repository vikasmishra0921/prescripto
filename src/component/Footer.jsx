import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="md:mx-10 ">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* -------Left Section----- */}
        <div>
          <img
            onClick={() => {
              navigate("/");
              scrollTo(0, 0);
            }}
            className="mb-5 w-40 cursor-pointer"
            src={assets.logo}
            alt=""
          />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
            dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit
            amet consectetur adipisicing elit
          </p>
        </div>

        {/* -------Center Section----- */}
        <div className="">
          <p className="text-xl font-medium  mb-5">Compony</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li> Privacy Policy</li>
          </ul>
        </div>

        {/* -------Right Section----- */}
        <div>
          <p className="text-xl font-medium  mb-5"> GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>greatstackdev@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* -------Copyright Text------ */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 @prescripto - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

// components/JobCard.js
import React from "react";
import Image from 'next/image';
import { IoHomeOutline, IoTimeOutline } from "react-icons/io5"; // Add necessary icons
import { HiOutlineCalendar, HiOutlineCurrencyRupee } from "react-icons/hi";
import logo from "../Images/logo.png"; // Adjust the path according to your project structure

const JobCard = () => {
  return (
    <div className="max-w-xl  mx-auto my-4 p-6 border border-gray-300 rounded-lg shadow-lg bg-yellow-500">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Graphic Design & Video Editing</h2>
          <div className="flex items-center space-x-4 mt-2 text-gray-600">
            <p>TechForce Services</p>
            <p className="text-blue-500 font-medium">Actively hiring</p>
          </div>
        </div>
        <div>
          <Image src={logo} alt="TechForce Service" width={80} height={80} className="rounded-full" />
        </div>
      </div>
      <div className="flex items-center space-x-6 text-gray-700 mb-4">
        <div className="flex items-center space-x-2">
          <IoHomeOutline className="w-5 h-5" />
          <span>Work from home</span>
        </div>
        <div className="flex items-center space-x-2">
          <HiOutlineCalendar className="w-5 h-5" />
          <span>3 Months</span>
        </div>
        <div className="flex items-center space-x-2">
          <HiOutlineCurrencyRupee className="w-5 h-5" />
          <span>₹ 6,000-10,000 /month</span>
        </div>
      </div>
      <div className="flex items-center space-x-2 text-green-500">
        <IoTimeOutline className="w-5 h-5" />
        <span>2 days ago</span>
      </div>
    </div>
  );
};

export default JobCard;
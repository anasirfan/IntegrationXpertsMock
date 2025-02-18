import React from 'react';
import { RiSearchLine, RiNotification3Line, RiArrowDownSLine } from 'react-icons/ri';
import demoAvatar from '../assets/demo-avatar.png';
import usaFlag from '../assets/usa-flag.png';

const Header = () => {
  return (
    <header className="bg-white py-4 px-6 flex items-center justify-between shadow-sm">
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold mr-12">Dashboard</h1>

      </div>

      <div className="flex items-center space-x-12">
        <div className="relative hidden md:block rounded-xl ">
          <RiSearchLine className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5D5FEF]" />
          <input
            type="text"
            placeholder="Search here..."
            className="pl-12 pr-8 py-2 w-96 bg-gray-200 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4 border-r pr-6">
            <img src={usaFlag} alt="USA" className="w-5 h-5 object-cover" />
            <span className="text-sm text-gray-600">Eng (US)</span>
            <RiArrowDownSLine className="w-5 h-5 text-gray-600" />
          </div>

          <button className="relative bg-[#FFFAF1] p-3 rounded-lg">
            <RiNotification3Line className="w-4 h-4 text-[#FFA412]" />
            <span className="absolute top-1 right-1 bg-red-500 text-white text-xs w-2 h-2 rounded-full flex items-center justify-center">

            </span>
          </button>

          <div className="flex items-center space-x-12">
            <div className='flex space-x-2'>
              <img
                src={demoAvatar}
                alt="Admin"
                className="w-10 h-10 rounded-2xl object-cover"
              />
              <div className="hidden sm:block">
                <p className="text-sm font-medium">Musfiq</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
            </div>
            <RiArrowDownSLine className="w-5 h-5 self-start text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

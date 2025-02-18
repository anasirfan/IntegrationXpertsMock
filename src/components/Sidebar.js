import React from 'react';
import {
   RiLogoutBoxLine, RiBarChartLine, RiShoppingCart2Line, RiFileList3Line,
  RiMessage2Line, RiSettings3Line, RiMenuFoldLine, RiMenuUnfoldLine, RiShoppingBagLine
} from 'react-icons/ri';
import { HiChartPie } from "react-icons/hi2";

import { useSidebar } from '../context/SidebarContext';

import logo from '../assets/logo.png';
import worldIcon from '../assets/world-icon.png';

const Sidebar = () => {
  const { isCollapsed, toggleSidebar } = useSidebar();

  const menuItems = [
    { name: 'Dashboard', icon: HiChartPie, active: true },
    { name: 'Leaderboard', icon: RiBarChartLine },
    { name: 'Order', icon: RiShoppingCart2Line },
    { name: 'Products', icon: RiFileList3Line },
    { name: 'Messages', icon: RiMessage2Line },
    { name: 'Settings', icon: RiSettings3Line },
    { name: 'Sign Out', icon: RiLogoutBoxLine },
  ];

  return (
    <div className={`fixed left-0 top-0 h-screen bg-white transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'
      } shadow-lg z-50`}>
      <div className="flex items-center justify-between p-6">
        {!isCollapsed && <img className='w-32 mx-auto' src={logo} alt="logo" />}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {isCollapsed ? (
            <RiMenuUnfoldLine className="w-6 h-6 text-gray-600" />
          ) : (
            <RiMenuFoldLine className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </div>

      <nav className={`mt-8 ${isCollapsed ? 'px-4' : 'px-8'
      }`}>
        {menuItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-4'
              } py-3 mb-2 rounded-xl ${item.active
                ? 'bg-primary text-white'
                : 'text-[#737791] hover:bg-gray-100'
              }`}
          >
            <item.icon className={`w-6 h-6 ${!isCollapsed && 'mr-3'}`} />
            {!isCollapsed && <span>{item.name}</span>}
          </a>
        ))}
      </nav>
    
    {!isCollapsed ? (
  <div className={`absolute mx-12 py-10 rounded-xl bottom-8 flex justify-center items-center space-y-4 flex-col bg-[#1559ED] left-0 right-0 px-4`}>
    <div className='flex flex-col items-center justify-center space-y-1 w-[70%] mx-auto'>
      <div className='rounded-xl p-2 bg-white'>
        <img src={worldIcon} alt="logo" className='w-5 text-[#1559ED] mx-auto' />
      </div>
      <p className='text-[10px] text-center text-white/80'>Get access to all features</p>
    </div>
    <button className="bg-white text-[#1559ED] px-2 py-2 rounded-lg text-sm w-[80%]">
      Get Pro
    </button>
  </div>
) : (
  <div className="absolute bottom-8 left-0 right-0 flex justify-center">
    <div className='rounded-xl p-2 bg-[#1559ED]'>
      <RiShoppingBagLine className='w-5 h-5 text-white' />
    </div>
  </div>
)}

    
    </div>
  );
};

export default Sidebar;

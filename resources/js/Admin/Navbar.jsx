import React from 'react';
import yaya from '../../Images/yaya.jpg';
import 'boxicons';

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between p-4 shadow-md bg-slate-900">
        <div className="flex items-center px-6">
          <box-icon name='search' color='gray'></box-icon>
          <input 
            type="text" 
            placeholder="Type in to search . ." 
            className="p-2 mx-5 text-white placeholder-gray-400 bg-transparent rounded-sm focus:outline-none focus:ring-0" 
          />
        </div>
    
        <div className="flex items-center space-x-4">
          <a href="#notifications" className="text-gray-600 hover:text-gray-900">
            <box-icon name='bell' color='gray' ></box-icon>
          </a>
          <a href="#profile" className="text-gray-600 hover:text-gray-900">
            <img src={yaya} alt="User Profile" className="w-10 h-10 rounded-full" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

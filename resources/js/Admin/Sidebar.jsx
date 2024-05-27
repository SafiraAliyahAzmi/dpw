import React from 'react';
import { Link } from 'react-router-dom';
import 'boxicons';

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between w-16 h-screen border-l-4 shadow-lg bg-slate-900 md:w-40 border-blue-950">
      <div>
        <div className="p-6 text-center bg-blue-950">
          <h1 className="hidden text-sm font-bold text-slate-300 font-playfairdisplay md:inline">RentWheels</h1>
        </div>
        <nav className="flex flex-col space-y-4 mt-7">
          <Link to="/home" className="flex justify-center py-2 text-slate-300 md:justify-start md:px-8 hover:bg-blue-950">
            <box-icon name='home' color='gray' ></box-icon>
            <span className="hidden md:inline">Home</span>
          </Link>
          <Link to="/car" className="flex justify-center py-2 text-slate-300 md:justify-start md:px-8 hover:bg-blue-950">
            <box-icon name='car' color='gray' ></box-icon>
            <span className="hidden md:inline">Car</span>
          </Link>
          <Link to="/booking" className="flex justify-center py-2 text-slate-300 md:justify-start md:px-8 hover:bg-blue-950">
            <box-icon name='user-check' color='gray' ></box-icon>
            <span className="hidden md:inline">Booking</span>
          </Link>
          <Link to="/list-car" className="flex justify-center py-2 text-slate-300 md:justify-start md:px-8 hover:bg-blue-950">
            <box-icon name='credit-card' color='gray' ></box-icon>
            <span className="hidden md:inline">Payment</span>
          </Link>
        </nav>
      </div>

      <div className="flex flex-col mt-4 space-y-4">
        <Link to="/settings" className="flex justify-center py-2 text-slate-300 md:justify-start md:px-4 hover:bg-blue-950">
          <box-icon name='cog' color='gray' ></box-icon>
          <span className="hidden md:inline">Settings</span>
        </Link>
        <Link to="/logout" className="flex justify-center py-2 text-slate-300 md:justify-start md:px-4 hover:bg-blue-950">
          <box-icon name='log-out' color='gray' ></box-icon>
          <span className="hidden md:inline">Log Out</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

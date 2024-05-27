import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { UilParagraph, UilTimes } from "@iconscout/react-unicons";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const setToggle = () => {
    setMenu(!menu);
  };

  return (
    <nav className="fixed flex justify-between py-6 max-2xl:px-12 max-lg:px-10 max-sm:px-8 px-16 z-40 bg-cod-950 w-screen">
      <span className="font-playfair tracking-widest text-2xl max-lg:text-xl italic text-cod-50 ">
        RentWheels
      </span>
      <ul
        className={`max-lg:fixed max-lg:justify-center max-md:left-10 max-md:right-10 max-sm:left-0 max-sm:right-0 max-lg:left-24 max-lg:right-24 max-lg:py-4 max-lg:l-0  max-lg:bg-cod-50 max-lg:text-cod-950 duration-300 flex text-lg gap-8 tracking-widest font-medium z-30 max-sm:text-sm max-sm:grid max-sm:grid-cols-3 max-sm:text-center sm:rounded-lg ${
          menu ? "max-lg:top-20" : "max-lg:-top-40"
        }`}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/cars">Cars</Link>
        </li>
        <li>
          <Link href="/cars">Booking</Link>
        </li>
        <li>
          <Link href="/cars">Blog</Link>
        </li>
        <li>
          <Link href="/cars">About Us</Link>
        </li>
        <li>
          <Link href="/cars">Contact</Link>
        </li>
      </ul>
      <UilParagraph
        className={`lg:hidden duration-300 cursor-pointer ${menu && "hidden"}`}
        onClick={setToggle}
      />
      <UilTimes
        className={`lg:hidden duration-300 cursor-pointer ${!menu && "hidden"}`}
        onClick={setToggle}
      />
    </nav>
  );
};

export default Navbar;

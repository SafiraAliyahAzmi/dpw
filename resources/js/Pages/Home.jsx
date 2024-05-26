import React from "react";
import Main from "@/Home/Main";
import Navbar from "@/Components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-cod-950 text-cod-50 font-urbanist">
      <Navbar />
      <Main />
      <div className="bg-blue-500 h-[700px] flex justify-center items-center">
        UNDER DEVELOPMENT
      </div>
    </div>
  );
};

export default Home;

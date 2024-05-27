import React from "react";
import Car from "../../img/hero-car.png";

const Main = () => {
  return (
    <main className="max-h-fit max-2xl:px-12 max-lg:px-10 max-sm:px-8 px-16 py-8">
      <div className="h-fit mt-16 mb-8 max-2xl:mt-14 relative rounded-3xl bg-cod-950 shadow-sm flex-col items-center justify-center flex border px-10 pb-4 pt-10">
        <div className="flex max-lg:flex-col justify-between gap-8">
          <h1 className="flex-1 max-sm:text-4xl max-md:text-5xl max-lg:text-6xl font-playfair tracking-widest text-8xl max-2xl:text-7xl max-sm:text-center">
            Your Road Trip Starts Here
          </h1>
          <div className="flex-1 flex flex-col gap-8 items-center">
            <p className="text-5xl max-sm:w-full max-sm:text-center max-2xl:text-4xl max-md:text-xl max-lg:text-2xl max-lg:w-1/2 max-lg:self-start max-sm:text-lg">
              Our cars are well-maintained and come with all the amenities you
              need for a comfortable ride.
            </p>
            <button className="bg-cod-50 max-sm:text-base text-cod-950 py-2 px-6 self-start hover:bg-slate-200 duration-300 text-lg max-sm:self-center rounded-lg 2xl:text-2xl font-medium tracking-wider">
              Book Your Rental Now!
            </button>
          </div>
        </div>
        <img src={Car} alt="" className="w-[900px] object-contain" />
      </div>
    </main>
  );
};

export default Main;

import React from "react";

export const NavBar = () => {
  return (
    <div className="w-full bg-black bg-opacity-60 text-white flex p-4 px-16 justify-between items-center fixed z-20">
      <p className="font-bold text-xl">Spotify</p>
      <div className="flex justify-evenly w-1/2 text-sm font-bold">
        <p className="cursor-pointer hover:text-green-500">Premium</p>
        <p className="cursor-pointer hover:text-green-500">Help</p>
        <p className="cursor-pointer hover:text-green-500">Download</p>
        <p>|</p>
        <p className="cursor-pointer hover:text-green-500">Sign up</p>
        <p className="cursor-pointer hover:text-green-500">Log In</p>
      </div>
    </div>
  );
};

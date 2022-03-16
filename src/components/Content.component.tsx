import React from "react";

export const Content = () => {
  return (
    <div className="flex justify-evenly p-14 bg w-fit m-auto">
      <div className="mr-8 w-1/2">
        <h1 className="font-bold text-3xl w-1/2 mb-4">What's on Spotify?</h1>
        <span>
          <h2 className="font-bold text-lg mb-2">Music</h2>
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque sit
            quibusdam voluptatibus? Maiores libero facere repellat cumque.
          </p>
        </span>
        <span>
          <h2 className="font-bold text-lg mb-2">Playlists</h2>
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque sit
            quibusdam voluptatibus?
          </p>
        </span>
        <span>
          <h2 className="font-bold text-lg mb-2">New Releases</h2>
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque sit
            quibusdam voluptatibus? Maiores libero facere repellat cumque.
          </p>
        </span>
      </div>
      <div className="max-w-md">
        <img
          src="https://images.unsplash.com/photo-1584679109597-c656b19974c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
          alt="content"
        />
      </div>
    </div>
  );
};

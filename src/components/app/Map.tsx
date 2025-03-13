"use client";

import Image from "next/image";
import { useState } from "react";
import { Header } from "../ui/header";

const frames = [
  { img: "/map-frames/1.png", name: "The Beginning", minted: true },
  { img: "/map-frames/2.png", name: "The Forest", minted: true },
  { img: "/map-frames/3.png", name: "The Mountain", minted: true },
  { img: "/map-frames/4.png", name: "The Valley", minted: true },
  { img: "/map-frames/5.png", name: "The End", minted: false },
];

export const Map = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  const nextFrame = () => {
    setCurrentFrame((prev) => (prev + 1) % frames.length);
  };

  const prevFrame = () => {
    setCurrentFrame((prev) => (prev - 1 + frames.length) % frames.length);
  };

  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      <main className="flex-1 relative overflow-hidden">
        <Image
          src={frames[currentFrame].img}
          alt="Map Frame"
          fill
          style={{ objectFit: "cover" }}
          priority
        />

        {currentFrame > 0 && (
          <button
            onClick={prevFrame}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary/40 hover:bg-primary/60 rounded-full p-4 transition-colors"
            aria-label="Previous frame"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        )}

        {currentFrame < frames.length - 1 && (
          <button
            onClick={nextFrame}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary/40 hover:bg-primary/60 rounded-full p-4 transition-colors"
            aria-label="Next frame"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        )}
      </main>

      <footer className="w-full bg-black/80 backdrop-blur-sm px-6 py-4 flex justify-between items-center shrink-0">
        <div className="text-white text-lg font-medium">
          {frames[currentFrame].name}
        </div>
        <button className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-lg transition-colors">
          Mint
        </button>
      </footer>
    </div>
  );
};

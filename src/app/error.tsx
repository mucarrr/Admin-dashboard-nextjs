"use client";
import React from "react";

export default function Error({error, reset}: {error: Error, reset: () => void}) {
  return <div className="flex justify-center items-center flex-col gap-4 p-4 min-h-screen">
    <div className="text-center text-red-500 font-bold ">
    <p>{error.message}</p>
    </div>
    <button onClick={reset} className=" cursor-pointer border text-red-500 border-red-500 py-1 px-2 rounded-md hover:bg-red-500 hover:text-white transition-colors w-fit mx-auto">Tekrar dene</button>
    
  </div>;
}

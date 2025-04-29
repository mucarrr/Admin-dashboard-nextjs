import React from "react";
import { FaSpinner } from "react-icons/fa";

export default function Loading({ designs }: { designs?: string }) {
  return (
    <div className={`flex justify-center items-center h-screen ${designs}`}>
      <FaSpinner className=" animate-spin text-blue-500 text-3xl"></FaSpinner>
    </div>
  );
}

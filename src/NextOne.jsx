import React from "react";
import New from "./new.jpeg";
import Map from "./Map.png";
import MapDescription from "./MapDescription.png";

export default function NextOne() {
  return (
    <div
      style={{
        backgroundImage: `url(${New})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className=" flex h-auto w-screen m-2 p-2">
        <img src={Map} alt="" />
        <img src={MapDescription} alt="" />
      </div>
    </div>
  );
}

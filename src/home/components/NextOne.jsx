import React from "react";
import New from "../../asset/new.jpeg";
import Map from "../../asset/Map.png";
import MapDescription from "../../asset/MapDescription.png";

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

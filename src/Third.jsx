import React from "react";
import New from "./new.jpeg";
import Ss1 from "./ss1.png";
import Ss2 from "./ss2.png";
import Ss3 from "./ss3.png";
import Ss4 from "./ss4.png";
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";

export default function Third() {
  return (
    <div
      style={{
        backgroundImage: `url(${New})`,
        backgroundSize: "cover",
        height: "100vh",
        color: "black", // Set text color to black
      }}
    >
      <h1 className="mt-5 text-3xl font-bold text-center">AMENITIES</h1>
      <div className="text-center pt-8">
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur. Vivamus id pretium vestibulum
          rhoncus egestas.
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur. Quis non congue tellus
          sagittis lorem nisl. Varius turpis in sit diam mauris diam. Enim vitae
          turpis in odio laoreet ullamcorper cursus tincidunt.{" "}
        </p>

        <div className="flex items-center justify-center mt-5">
          <button className="bg-orange-300">
            <LeftArrow />
          </button>
          <div className="mx-4">
            <img src={Ss1} alt="Gym & Exercise" />
            <p className="text-xs mt-1">Gym & Exercise</p>
          </div>
          <div className="mx-4">
            <img src={Ss2} alt="Swimming Pool" />
            <p className="text-xs mt-1">Swimming Pool</p>
          </div>
          <div className="mx-4">
            <img src={Ss3} alt="Kids Playing Area" />
            <p className="text-xs mt-1">Kids Playing Area</p>
          </div>
          <div className="mx-4">
            <img src={Ss4} alt="Jogging Park & Run Track" />
            <p className="text-xs mt-1">Jogging Park & Run Track</p>
          </div>
          <button className="bg-orange-300">
            <RightArrow />
          </button>
        </div>
      </div>
    </div>
  );
}

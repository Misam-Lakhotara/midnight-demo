import React from "react";
import NavBar from "./components/NavBar";
import Next from "./components/Next";
import Third from "./components/Third";
import NextOne from "./components/NextOne";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="content">
        <Next />
        <Third />
        <NextOne />
        <Gallery />
      </div>
    </>
  );
}

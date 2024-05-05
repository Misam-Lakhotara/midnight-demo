import React from "react";
import "./index.css";
import NavBar from "./NavBar";
import Next from "./Next";
import Third from "./Third";
import NextOne from "./NextOne";
import Gallery from "./Gallery";
// import Footer from "./Footer";

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="content">
        <Next />
        <Third />
        <NextOne />
        <Gallery />
      </div>
      {/* <Footer class="footer" /> */}
    </div>
  );
}

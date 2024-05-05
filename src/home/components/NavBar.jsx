import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-around flex-wrap items-center p-4">
        <h1>
          <span className="text-xl font-light">O</span>ne&Only
        </h1>
        <a href="./Next.jsx" className="nav-link hover:underline">
          <span className="text-xl font-light">O</span>verview
        </a>
        <a href="" className="nav-link hover:underline">
          Amenities
        </a>
        <a href="#" className="nav-link hover:underline">
          Connectivity
        </a>
        <a href="#" className="nav-link hover:underline">
          Gallery
        </a>
        <a href="#" className="nav-link hover:underline">
          Plans
        </a>
        <a href="#" className="nav-link hover:underline">
          Specification
        </a>
        <a href="#" className="nav-link hover:underline">
          About the developer
        </a>
      </nav>
      <div
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat  m-10 p-10 rounded-2xl"
        style={{
          backgroundImage:
            "url('https://www.swipedon.com/hubfs/reception-are-ideas-blog-webres.jpg')",
        }}
      >
        <div className="absolute ">
          <div className="  ">
            <button className="mx-2 px-4 py-2 bg-orange-300 hover:bg-orange-200 text-black">
              Enquiry Now
            </button>
            <button className="mx-2 px-4 py-2 bg-orange-300 hover:bg-orange-200 text-black">
              Download Brochure
            </button>
          </div>

          <div className="  text-center items-center justify-center mt-44">
            {" "}
            <p className=" text-white text-5xl">
              Your Journey to Luxury Begins Here
            </p>
            <p className="text-white ">
              Lorem ipsum dolor sit amet consectetur. Tristique diam ultricies
              at elit. Tincidunt diam turpis id magna fringilla
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

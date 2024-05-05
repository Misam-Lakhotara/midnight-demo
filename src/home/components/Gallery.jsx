import React from "react";
import NewFlower from "../../asset/NewFlower.jpg";
import Gallery1 from "../../asset/Gallery1.png";
import Gallery2 from "../../asset/Gallery2.png";
import Gallery3 from "../../asset/Gallery3.png";
import Gallery4 from "../../asset/Gallery4.png";
import Gallery5 from "../../asset/Gallery5.png";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import Plan from "../../asset/Plan.png";
import Specification1 from "../../asset/Specification1.png";
import Specification2 from "../../asset/Specification2.png";
import Specification3 from "../../asset/Specification3.png";
import About from "../../asset/About.png";
import Best from "../../asset/Best.png";
import Icon from "../../asset/Icon.png";

export default function NextOne() {
  return (
    <div
      style={{
        backgroundImage: `url(${NewFlower})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="items-center justify-center mx-96 flex flex-wrap">
        <h1 className="mt-5 text-3xl font-bold text-center">GALLERY</h1>
        <div className="text-center pt-8">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Vivamus id pretium
            vestibulum rhoncus egestas.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Quis non congue tellus
            sagittis lorem nisl. Varius turpis in sit diam mauris diam. Enim
            vitae turpis in odio laoreet ullamcorper cursus tincidunt.{" "}
          </p>
        </div>

        <div className=" flex space-x-5 items-center justify-center">
          <LeftArrow />
          <img src={Gallery1} alt="" />
          <img className=" space-y-8 " src={Gallery2} alt="" />
          <img src={Gallery3} alt="" />
          <img className=" space-y-16 " src={Gallery4} alt="" />
          <img src={Gallery5} alt="" />
          <RightArrow />
        </div>
      </div>
      <div className=" mt-10">
        <h1 className="mt-5 text-3xl font-bold text-center">UNIT PLANS</h1>
        <div className="text-center pt-8">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Vivamus id pretium
            vestibulum rhoncus egestas.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Quis non congue tellus
            sagittis lorem nisl. Varius turpis in sit diam mauris diam. Enim
            vitae turpis in odio laoreet ullamcorper cursus tincidunt.{" "}
          </p>
        </div>

        <div className=" flex justify-center text-center space-x-12 ">
          <LeftArrow />

          <img src={Plan} alt="2 BHK Floor Plan" />

          <img src={Plan} alt="" />

          <img src={Plan} alt="" />
          <RightArrow />
        </div>
      </div>
      <div className=" mt-10">
        <h1 className="mt-5 text-3xl font-bold text-center">SPECIFICATIONS</h1>
        <div className="text-center pt-8">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Vivamus id pretium
            vestibulum rhoncus egestas.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Quis non congue tellus
            sagittis lorem nisl. Varius turpis in sit diam mauris diam. Enim
            vitae turpis in odio laoreet ullamcorper cursus tincidunt.{" "}
          </p>
        </div>

        <div className=" flex justify-center text-center space-x-12 ">
          <img src={Specification1} alt="2 BHK Floor Plan" />
          <img src={Specification2} alt="" />
          <img src={Specification3} alt="" />
          <LeftArrow /> <RightArrow />
        </div>
      </div>
      <div className=" flex flex-row justify-end">
        <div>
          <h1 className="text-3xl font-bold mb-4 mt-5">ABOUT THE DEVELOPER</h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Vivamus id pretium
            vestibulum rhoncus egestas
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Quis non congue tellus
            sagittis lorem nisl. Varius turpis in sit diam mauris diam.
          </p>
          <p className="mb-4">
            Hac egestas faucibus tempus elit ipsum erat posuere. Arcu nunc
            tellus nibh tellus porta integer risus. Tortor nec eu id tristique
            scelerisque iaculis ultrices odio neque.{" "}
          </p>
          <p className="mb-4">
            Quis tristique nisi nibh ac nulla feugiat nulla sit.
          </p>
          <p className="mb-4">
            Enim vitae turpis in odio laoreet ullamcorper cursus tincidunt.
          </p>
        </div>
        <div className=" mt-7">
          <img src={Best} alt="" />
          <img src={About} alt="" />
        </div>
      </div>
      <div className=" bg-orange-200 mt-5 h-96 w-screen">
        <h1 className=" text-5xl">One&Only</h1>
        <div className=" flex flex-row justify-evenly mt-6">
          <div>
            <h1>SITE ADDRESS</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
              delectus!
            </p>
          </div>
          <div>
            <h1>CONTACT US</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              ratione?
            </p>
          </div>
          <div>
            <h1>MAHA RERA NO</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Officiis, quisquam.
            </p>
          </div>
          <div>
            <img src={Icon} alt="" />
          </div>
        </div>
        <div className=" mt-7">
          <h1>DISCLAIMER</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            deleniti beatae voluptates, expedita animi odio autem, sit alias
            eligendi debitis libero impedit perspiciatis modi sint accusamus
            recusandae exercitationem sed quaerat.
          </p>
        </div>
        <div className=" border-b border-black"></div>
        <div className=" flex justify-evenly">
          <h1>Privacy Policy</h1>
          <h1>© 2023 All Rights Reserved by xyz | Powered by Insomniacs</h1>
        </div>
      </div>
    </div>
  );
}

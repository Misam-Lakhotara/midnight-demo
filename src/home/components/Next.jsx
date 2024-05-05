import React from "react";
import Next1 from "../../asset/Next.jpg";

export default function Next() {
  return (
    <div className="flex mt-12 items-center justify-center mx-auto max-w-3xl space-x-12">
      <div>
        <img
          src={Next1}
          alt="My Image"
          className="rounded-lg shadow-lg"
          style={{ width: "1000px", height: "auto" }}
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">ABOUT US</h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur. Vivamus id pretium vestibulum
          rhoncus egestas
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur. Quis non congue tellus
          sagittis lorem nisl. Varius turpis in sit diam mauris diam.
        </p>
        <p className="mb-4">
          Hac egestas faucibus tempus elit ipsum erat posuere. Arcu nunc tellus
          nibh tellus porta integer risus. Tortor nec eu id tristique
          scelerisque iaculis ultrices odio neque.{" "}
        </p>
        <p className="mb-4">
          Quis tristique nisi nibh ac nulla feugiat nulla sit.
        </p>
        <p className="mb-4">
          Enim vitae turpis in odio laoreet ullamcorper cursus tincidunt.
        </p>
      </div>
    </div>
  );
}

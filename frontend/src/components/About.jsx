import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex items-center mt-32 justify-between my-20 mx-auto max-w-screen-lg gap-10 bg-white p-20">
      <div className="max-w-md">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-sky-800">
            Hi, I'm Racheal Onimisi
          </h1>
        </div>
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-sky-600">
            FullStack Developer
          </h1>
        </div>
        <div className="mb-6">
          <p className="text-sky-800">
            Hi, I'm Racheal Onimisi, a passionate and dedicated full-stack
            developer based in Nigeria. With a strong foundation in both
            front-end and back-end technologies, I strive to create efficient
            and user-friendly web applications.
          </p>
        </div>
        <div>
          <button className="bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            <Link to="/about">See more</Link>
          </button>
        </div>
      </div>
      <div>
        <img
          src="src/assets/avatar.jpg"
          alt="Avatar"
          className="w-full h-auto "
        />
      </div>
    </div>
  );
};

export default About;

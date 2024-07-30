import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar8.png";
import "./home.css";

const Home = () => {
  return (
    <main>
      <section className="container mx-auto my-4">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto p-4 gap-2 lg:gap-4 lg:w-3/4">
          <div className="text-gray-300 flex flex-col justify-center items-center md:items-start gap-4">
            <h3 className="text-2xl lg:text-3xl font-semibold ">
              <span className="text-custom-green font-bold mr-2">&#8212;</span>
              Hello{" "}
            </h3>
            <h1 className="text-3xl lg:text-4xl font-semibold ">
              I'm{" "}
              <span className="text-custom-green font-bold ">SANJAY PK</span>
            </h1>
            <h2 className="text-2xl lg:text-4xl font-semibold whitespace-nowrap">
              Fullstack{" "}
              <span className="text-custom-green font-bold">Developer</span>
            </h2>
            <p className="text-gray-400 text-justify my-4">
              As a Fullstack Developer, I specialize in creating dynamic and
              responsive web applications. My expertise spans both frontend and
              backend technologies, allowing me to build seamless and engaging
              user experiences. Explore my portfolio to see my work and how I
              can help bring your ideas to life.
            </p>
            <div className="grid grid-cols-2 gap-4 justify-around sm:w-3/4">
              <div>
                <Link className="primary-button ">Connect Me</Link>
              </div>
              <div>
              <Link className="secondary-button ">View Projects</Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-2 md:mt-0">
            <div className="px-3 rounded-md shadow-xl bg-gradient-to-r from-[#212429] to-[#2a2d30] card-image flex justify-center items-center">
              <img
                className="rounded-2xl w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                src={avatar}
                alt="avatar"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

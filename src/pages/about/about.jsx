import React from "react";
import "./about.css";
import avatar from "../../assets/avatar7.png";
const About = () => {
  return (
    <main>
      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto p-4 gap-2 lg:gap-4 lg:w-3/4">
          <div className="text-gray-300 flex flex-col justify-center  gap-4">
            <h2 className="text-2xl lg:text-3xl font-semibold text-start ">
              <span className="text-custom-green font-semibold mr-2">
                &#8212;
              </span>
              Who <span className="text-custom-green font-bold">I Am?</span>
            </h2>
            <p className="text-gray-400 text-justify my-2">
              Hi there! I’m a passionate MERN Stack Developer with hands-on
              experience in JavaScript and full-stack development. I love
              creating web apps using MongoDB, Express.js, React, and Node.js.
              After completing my MERN Full Stack course with Entri Elevate
              Coding, I’m excited to dive into new projects and collaborate with
              others. I’m known for being a fast learner and a supportive
              collaborator, always ready to tackle new challenges and contribute
              to exciting projects.
            </p>
            <div className="grid md:grid-cols-2 gap-4 justify-center md:justify-around sm:w-3/4">
              <div className="flex justify-center items-center animate-bounce">
                <a href="https://drive.google.com/file/d/1_gOxcRelZestEdt6zCa_6JxVqqsASOmo/view?usp=sharing" className="primary-button card-shadow">Download CV</a>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/sanjay-pk-93884a213/" className="social-icon card-shadow ">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/Sanjaypk986" className="social-icon card-shadow">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href='https://gitlab.com/sanjaypk986' className="social-icon card-shadow">
                  <i class="fa-brands fa-gitlab"></i>
                </a>
                <a href="https://www.instagram.com/s__n_j_a__y?igsh=MXNmZHFlMzN1emZrcA==" className="social-icon card-shadow">
                  <i class="fa-brands fa-instagram"></i>
                </a>
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

export default About;

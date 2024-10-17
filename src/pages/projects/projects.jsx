import React from "react";
import "./projects.css";
import project1 from "../../assets/project1.svg";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <main>
      <section className="projects container mx-auto text-gray-300">
        <h2 className="text-xl sm:text-3xl font-semibold text-center relative">
        <span className="absolute inset-x-0 bottom-0 h-1 bg-gray-700 rounded-full mx-auto w-1/4 transform translate-y-2"></span>
          <span className="text-custom-green font-semibold mr-2">&#8212;</span>
          Projects That{" "}
          <span className="text-custom-green font-bold">Define Me</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 my-2 md:grid-cols-3 mx-auto p-4 gap-2 md-w-full lg:gap-4 lg:w-4/5">
          
          <Link to={'https://film-flick-movie-app.vercel.app/'} className="my-2">
            <div className="card bg-base-100 skill-icon relative overflow-hidden">
              <div className="card-body">
                <h2 className="card-title">FilmFlick</h2>
                <p>
                  FilmFlick is a web app for released movies and adding reviews.
                </p>
              </div>
              <figure>
                <img src={project1} alt="projects" />
              </figure>
              <div className="slide-in-overlay">
                <div className="slide-in-content">
                  <h2 className="slide-in-title text-custom-green font-bold my-1">
                    Project Details
                  </h2>
                  <p className="my-1 text-start">
                    <strong className="text-custom-green font-bold">
                      Description:
                    </strong>{" "}
                    This is a movie app. It has an add review option..
                  </p>
                  <p className="my-1 text-start">
                    <strong className="text-custom-green font-bold">
                      Technology Used:
                    </strong>{" "}
                    MERN stack, JWT authentication, Tailwind CSS.
                  </p>
                  <p className="my-1 text-start">
                    <strong className="text-custom-green font-bold">
                      Features:
                    </strong>{" "}
                    Filtering by language and genre and searach option.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <div className="my-2">
            <div className="card bg-base-100 skill-icon relative overflow-hidden">
              <div className="card-body">
                <h2 className="card-title">Taskly</h2>
                <p>
                  Taskly is a web app for managing tasks and staying organized.
                </p>
              </div>
              <figure>
                <img src={project1} alt="projects" />
              </figure>
              <div className="slide-in-overlay">
                <div className="slide-in-content">
                  <h2 className="slide-in-title text-custom-green font-bold my-1">
                    Project Details
                  </h2>
                  <p className="my-1 text-start">
                    <strong className="text-custom-green font-bold">
                      Description:
                    </strong>{" "}
                    This is a to-do app for managing data. Only logged-in users
                    can view their todos.
                  </p>
                  <p className="my-1 text-start">
                    <strong className="text-custom-green font-bold">
                      Technology Used:
                    </strong>{" "}
                    MERN stack, JWT authentication, Tailwind CSS.
                  </p>
                  <p className="my-1 text-start">
                    <strong className="text-custom-green font-bold">
                      Features:
                    </strong>{" "}
                    Dark mode and light mode.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-2">
            <div className="card bg-base-100 skill-icon relative overflow-hidden">
              <div className="card-body">
                <h2 className="card-title">AquaDream</h2>
                <p className="card-description">
                  AquaDream is a web app for exploring rides, tariffs and
                  contact
                </p>
              </div>
              <figure>
                <img src={project1} alt="projects" />
              </figure>
              <div className="slide-in-overlay">
                <div className="slide-in-content">
                  <h2 className="slide-in-title text-custom-green font-bold my-1">
                    Project Details
                  </h2>
                  <p className="my-1 text-start">
                    <strong className="text-custom-green font-bold">
                      Description:
                    </strong>
                    <span className="text-custom-light-gray">
                      {" "}
                      This is a website for a water theme park featuring rides,
                      gallery, and tariff details.
                    </span>
                  </p>
                  <p className="my-1 text-start">
                    <strong className="text-custom-green font-bold">
                      Technology Used:
                    </strong>
                    <span className="text-custom-light-gray">
                      {" "}
                      Bootstrap, HTML, CSS.
                    </span>
                  </p>
                  <p className="my-1 text-start">
                    <strong className="text-custom-green font-bold">
                      Features:
                    </strong>
                    <span className="text-custom-light-gray">
                      {" "}
                      Interactive gallery and detailed tariff information.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Link to={'https://spicezy-food-order.vercel.app/'} className="my-2">
            <div className="card bg-base-100 skill-icon relative overflow-hidden">
              <div className="card-body">
                <h2 className="card-title">Spicezy</h2>
                <p className="card-description">
                Spicezy is a Food delivery web app with Restaurant and Admin panel sections.
                </p>
              </div>
              <figure>
                <img src={project1} alt="projects" />
              </figure>
              <div className="slide-in-overlay">
                <div className="slide-in-content">
                  <h2 className="slide-in-title text-custom-green font-bold my-1">
                    Project Details
                  </h2>
                  <p className="my-1 text-start">
                    <strong className="text-custom-green font-bold">
                      Description:
                    </strong>
                    <span className="text-custom-light-gray">
                      {" "}
                      Restaurants, food menus, orders, and payment options."
                    </span>
                  </p>
                  <p className="my-1 text-start">
                    <strong className="text-custom-green font-bold">
                      Technology Used:
                    </strong>
                    <span className="text-custom-light-gray">
                      {" "}
                      MERN Stack, Tailwind, Bcrypt, Redux, JWT
                    </span>
                  </p>
                  <p className="my-1 text-start">
                    <strong className="text-custom-green font-bold">
                      Features:
                    </strong>
                    <span className="text-custom-light-gray">
                      {" "}
                       Add items to the cart, place orders,
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Projects;

import React from "react";
import avatar from "../assets/avatar6.png";

const SkillsCard = () => {
  return (
    <div className="grid grid-cols-1 my-2 md:grid-cols-2 mx-auto p-4 gap-2 md-w-full lg:gap-4 lg:w-4/5">
      <div className="flex justify-center items-center my-2">
        <div className="px-3 rounded-md shadow-xl bg-gradient-to-r from-[#212429] to-[#2a2d30] card-image flex justify-center items-center">
          <img
            className="rounded-2xl w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 transition-transform duration-300 transform group-hover:scale-105"
            src={avatar}
            alt="avatar"
          />
        </div>
      </div>
      <div className="">
        <div className="my-2">
          <h3 className="text-lg text-start ">
            <span className="text-custom-green font-bold">&#8212; Frontend</span>
            <span className="text-custom-green font-semibold mr-2 my-3"></span>
            Technologies
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 my-2 p-4 gap-4">
            {[
              {
                src: "https://cdn4.iconfinder.com/data/icons/dellios_system_icons/png/html.png",
                alt: "html",
              },
              {
                src: "https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful-1/2048/5351_-_CSS3-256.png",
                alt: "css",
              },
              {
                src: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png",
                alt: "js",
              },
              {
                src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-64.png",
                alt: "react",
              },
              {
                src: "https://cdn.hashnode.com/res/hashnode/image/upload/v1632979765809/HTEigfQR-.png?auto=compress,format&format=webp",
                alt: "tailwind",
              },
              {
                src: "https://e7.pngegg.com/pngimages/439/345/png-clipart-bootstrap-logo-thumbnail-tech-companies.png",
                alt: "bootstrap",
              },
              {
                src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redux-icon.png",
                alt: "redux",
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png",
                alt: "vite",
              },
            ].map(({ src, alt }, index) => (
              <div key={index} className="my-2 group">
                <div className="px-3 py-1 rounded-md shadow-xl bg-gradient-to-r from-[#212429] to-[#2a2d30] card-shadow flex justify-center items-center">
                  <img
                    className="rounded-2xl max-w-16 max-h-16 transition-transform duration-300 transform group-hover:scale-110"
                    src={src}
                    alt={alt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="my-2">
          <h3 className="text-lg text-start ">
            <span className="text-custom-green font-bold">&#8212; Backend</span>
            <span className="text-custom-green font-semibold mr-2 my-3"></span>
            Technologies
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 my-2 p-4 gap-4">
            {[
              {
                src: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-256.png",
                alt: "node",
              },
              {
                src: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
                alt: "express",
              },
              {
                src: "https://miro.medium.com/v2/resize:fit:256/1*XR69xeq43LgKB0T_LjZqwQ.png",
                alt: "mongodb",
              },
              {
                src: "https://cdn0.iconfinder.com/data/icons/buno-api/32/api_calls_programming-10-256.png",
                alt: "api",
              },
            ].map(({ src, alt }, index) => (
              <div key={index} className="my-2 group">
                <div className="px-3 py-1 rounded-md shadow-xl bg-gradient-to-r from-[#212429] to-[#2a2d30] card-shadow flex justify-center items-center">
                  <img
                    className="rounded-2xl max-w-16 max-h-16 transition-transform duration-300 transform group-hover:scale-110"
                    src={src}
                    alt={alt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;

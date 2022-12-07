import React from "react";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import FallbackImage from "../FallbackMedia/images";

const InfoSection = () => {
  return (
    <div className="InfoSection dark:text-white">
      <div className="InfoSection__text text-center px-10">
        <h2 className="text-5xl text-teal-600 font-medium py-4">Pramodh</h2>
        <h3 className="text-2xl py-2">Frontend Engineer</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          I'm a frontend engineer based in Munich, Germany. I am passionate
          about building web apps and I'm currently working at{" "}
          <a href="https://pink.gg/" className="text-blue-500">
            Pink.gg
          </a>
          .
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          I'm looking for new opportunities. Hit me up if you have any suitable
          role.
        </p>
      </div>

      <div className="InfoSection__icons mt-4 text-4xl flex justify-center gap-16 md:gap-8">
        <a
          href="https://twitter.com/pramodh_kv"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillTwitterCircle className="text-twitter-blue" />
        </a>
        <a
          href="https://www.linkedin.com/in/pramodh-kempapura-viswanath-b1227835/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="text-linkedin" />
        </a>
        <a href="https://github.com/pramodhkv" target="_blank" rel="noreferrer">
          <AiFillGithub className="text-github" />
        </a>
      </div>

      <div className="InfoSection__profile-picture-wrapper my-10">
        <FallbackImage
          original={{
            src: "/images/profile-picture.webp",
            type: "image/webp",
          }}
          fallback={{
            src: "/images/profile-picture.png",
            type: "image/png",
          }}
          className="InfoSection__profile-picture rounded-full bg-gradient-to-b from-teal-500 w-80 h-80 overflow-hidden mx-auto"
          alt="Pramodh's profile picture"
          loading="lazy"
        />
      </div>

      <div className="InfoSection__experience text-center">
        <h3 className="text-3xl py-1">Experience</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          I have <span className="text-teal-500">10+</span> years of experience
          in Software development field. I have worked with React, Angular,
          ExtJS, Typescript, JavaScript, SASS, CSS, HTML, JSP, etc.
        </p>

        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          I have the experience of working with wide variety of domains like
          Healthcare, Automotives and the blockchain industry.
        </p>

        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          I have the experience of working with and leading teams of{" "}
          <span className="text-teal-500">5+</span> people.
        </p>
      </div>
    </div>
  );
};

export default InfoSection;

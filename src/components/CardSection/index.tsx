import React from "react";
import FallbackImage from "../FallbackMedia/images";

const CardSection = () => {
  return (
    <div className="CardSection flex flex-col lg:flex-row justify-center items-center gap-8 py-10 dark:text-white">
      <div className="text-center p-10 shadow-lg rounded-xl w-80 h-80 dark:bg-slate-900">
        <FallbackImage
          original={{
            src: "/images/design.png",
            type: "image/png",
          }}
          fallback={{
            src: "/images/design.png",
            type: "image/png",
          }}
          className="w-20 h-20 mx-auto my-4"
          loading="lazy"
        />
        <h1 className="text-lg font-medium">Designs</h1>
        <p className="text-gray-800 dark:text-white mt-4">
          Bring beautiful design prototypes to life
        </p>
      </div>

      <div className="text-center p-10 shadow-lg rounded-xl max-w-sm w-80 h-80 dark:bg-slate-900">
        <FallbackImage
          original={{
            src: "/images/code.png",
            type: "image/png",
          }}
          fallback={{
            src: "/images/code.png",
            type: "image/png",
          }}
          className="w-20 h-20 mx-auto my-4"
          loading="lazy"
        />
        <h1 className="text-lg font-medium">Code</h1>
        <p className="text-gray-800 dark:text-white mt-4">
          Emphasis on writing clean code & reusable components
        </p>
      </div>

      <div className="text-center p-10 shadow-lg rounded-xl max-w-sm w-80 h-80 dark:bg-slate-900">
        <FallbackImage
          original={{
            src: "/images/consulting.png",
            type: "image/png",
          }}
          fallback={{
            src: "/images/consulting.png",
            type: "image/png",
          }}
          className="w-20 h-20 mx-auto my-4"
          loading="lazy"
        />
        <h1 className="text-lg font-medium">Collaborate</h1>
        <p className="text-gray-800 dark:text-white mt-4">
          Collaborate with the team members to learn from each other
        </p>
      </div>
    </div>
  );
};

export default CardSection;

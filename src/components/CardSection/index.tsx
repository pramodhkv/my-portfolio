import React from "react";
import FallbackImage from "../FallbackMedia/images";
import { ICard, TImageSrc } from "../ProjectSection";

const CardSection = (props: ICard) => {
  const { title, imagesSrcList } = props;
  return (
    <div className="flex flex-col text-center justify-center items-center my-10">
      <h3 className="text-3xl py-1 dark:text-white">{title}</h3>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 py-10 dark:text-white">
        {imagesSrcList.map((imageSrc: TImageSrc, index) => (
          <div
            className="text-center p-10 shadow-lg rounded-xl w-80 h-80 dark:bg-slate-900"
            key={index}
          >
            <FallbackImage
              original={{
                src: imageSrc.src,
                type: imageSrc.type,
              }}
              fallback={{
                src: imageSrc.src,
                type: imageSrc.type,
              }}
              className="w-20 h-20 mx-auto my-4"
              loading="lazy"
              alt={imageSrc.alt}
            />
            <h1 className="text-lg font-medium">{imageSrc.description}</h1>
            {imageSrc.subtitle && (
              <p className="text-gray-800 dark:text-white mt-4">
                {imageSrc.subtitle}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;

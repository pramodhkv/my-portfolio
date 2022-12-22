import React from "react";
import FallbackImage from "../FallbackMedia/images";

export type TImageSrc = {
  src: string;
  type: string;
  description: string;
  subtitle?: string;
};

export interface ICard {
  title: string;
  imagesSrcList: TImageSrc[];
}

const ProjectSection = (props: ICard) => {
  const { title, imagesSrcList } = props;
  return (
    <div className="flex flex-col text-center justify-center items-center mt-10">
      <h3 className="text-3xl py-1 dark:text-white">{title}</h3>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 py-10 dark:text-white">
        {imagesSrcList.map((imageSrc: TImageSrc, index) => (
          <div className="text-center shadow-lg rounded-xl w-80 h-96 dark:bg-slate-900 flex flex-col justify-between">
            <FallbackImage
              original={{
                src: imageSrc.src,
                type: imageSrc.type,
              }}
              fallback={{
                src: imageSrc.src,
                type: imageSrc.type,
              }}
              className="rounded-xl mb-4 h-60 w-full"
              loading="lazy"
            />
            <h1 className="text-lg font-medium p-10">{imageSrc.description}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;

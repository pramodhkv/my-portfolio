import React from "react";

export type FallbackImageType = {
  src: string;
  type: string;
};

interface IFallbackImageProps {
  original: FallbackImageType;
  fallback: FallbackImageType;
  [key: string]: any;
}

const FallbackImage = (props: IFallbackImageProps) => {
  const { original, fallback, ...rest } = props;

  return (
    <picture>
      <source srcSet={original.src} type={original.type} />
      <source srcSet={fallback.src} type={fallback.type} />
      <img src={fallback.src} {...rest} />
    </picture>
  );
};

export default FallbackImage;

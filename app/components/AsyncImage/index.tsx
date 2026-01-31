/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AsyncImage = (
  {
    src,
    style,
    height,
    // alt,
    width,
  }: any, // responsive,
  // overflow,
  // disabled,
) => {
  return (
    <LazyLoadImage
      alt={"picture"}
      style={style}
      height={height}
      // scrollPosition={scrollPosition}
      src={src}
      width={width}
    />
    // <LazyLoadImage
    //   style={{
    //     display: "inline",
    //   }}
    //   height={height}
    //   resize
    //   offset={100}
    //   once
    //   debounce={300}
    //   scroll
    //   placeholder={
    //     <Image
    //       height={height}
    //       width={width}
    //       src={InfinityLoader}
    //       alt="loader"
    //     />
    //   }
    //   overflow={overflow}
    // >
    //   <LazyImage alt={"picture"} />
    // </LazyLoadImage>
  );
};

AsyncImage.defaultProps = {
  width: null,
  height: null,
  alt: "Image",
  responsive: false,
  overflow: false,
  disabled: false,
};

export default memo(
  AsyncImage,
  (prev, next) =>
    prev.src === next.src &&
    prev.width === next.width &&
    prev.height === next.height &&
    prev.disabled === next.disabled,
);

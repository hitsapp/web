import React, { useState } from "react";
import Image from "next/image";

export const WebsiteIcon = ({
  className,
  src,
  alt,
  size,
}: {
  className: string;
  src: string;
  alt: string;
  size: number;
}) => {
  const [imgFailure, setImgFailure] = useState(false);

  return (
    <>
      {!imgFailure ? (
        <Image
          className={`${className} rounded-full`}
          src={src}
          alt={alt}
          width={size}
          height={size}
          onError={() => setImgFailure(true)}
        />
      ) : (
        <div
          className={`${className} bg-secondary py-1 px-3 ml-3 text-sm rounded-full`}
        >
          {alt.charAt(1)}
        </div>
      )}
    </>
  );
};

export default WebsiteIcon;

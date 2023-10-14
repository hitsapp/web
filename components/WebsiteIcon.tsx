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
        <span>{new URL(alt).hostname.charAt(0).toUpperCase()}</span>
      )}
    </>
  );
};

export default WebsiteIcon;

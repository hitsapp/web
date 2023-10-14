import React from "react";
import { metadata } from "@/lib/helpers";
import clsx from "clsx";
import { WebsiteIcon } from "./WebsiteIcon";
import { Hit as HitType } from "@/types/hit";

export const Hit = ({ hit }: { hit: HitType & { i: number } }) => {
  const lbPlace = hit.i + 1;
  const { image, pathname } = metadata(hit.url);

  const labelClasses = clsx({
    "text-gold font-bold": lbPlace === 1,
    "text-silver font-bold": lbPlace === 2,
    "text-bronze font-bold": lbPlace === 3,
    "text-lightGray font-semibold": lbPlace > 3,
  });

  const iconMarginClasses = clsx({
    "ml-4 mr-2": lbPlace < 10,
    "ml-2 mr-2": lbPlace >= 10,
  });

  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <p className={labelClasses}>{lbPlace}</p>
        <WebsiteIcon
          className={iconMarginClasses}
          src={image}
          alt={hit.url}
          size={30}
        />
        <a href={hit.url} target="_blank" rel="noopener noreferrer">
          {pathname}
        </a>
      </div>

      <div>
        <p className="text-lightGray/80">
          <span className="text-white/80 font-semibold">
            {hit.hits.toLocaleString()}
          </span>{" "}
          hits
        </p>
      </div>
    </div>
  );
};

export default Hit;
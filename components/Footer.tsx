import React from "react";
import { Github } from "lucide-react";
import { GITHUB_URL, creators } from "@/lib/constants";

export const Footer = () => {
  return (
    <div className="m-10 flex flex-col items-center justify-center">
      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
        <Github />
      </a>

      <div>
        created by{" "}
        {creators.map((contributor, i) => (
          <span key={i}>
            <a
              className="font-bold text-purple-400 hover:text-white transition-all duration-300"
              href={contributor.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contributor.name}
            </a>
            {i < creators.length - 1 && " & "}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Footer;

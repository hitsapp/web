import React, { useRef } from "react";
import { Clipboard } from "lucide-react";
import { toast } from "react-hot-toast";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  copyable?: boolean;
}

export const Input = ({ className, copyable = false, ...props }: InputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value);
      
      toast("Copied to clipboard!", {
        icon: "📋",
        position: "bottom-right",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  return (
    <div className="flex items-center">
      <input
        ref={inputRef}
        className={`outline-none w-full py-3 border border-secondary bg-primary rounded-lg px-5 text-white ${className}`}
        {...props}
      />
      {copyable ? (
        <Clipboard
          size={20}
          onClick={handleCopy}
          className="text-lightGray hover:text-white transition-all duration-300 ml-2 cursor-pointer"
        />
      ) : null}
    </div>
  );
};
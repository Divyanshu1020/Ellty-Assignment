import React from "react";
import { Check } from "lucide-react";

interface ToggleButtonProps {
  label: string;
  checked: boolean;
  onClick: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ label, checked, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between py-3 px-4 rounded-lg transition-colors"
    >
      <span className="text-gray-900 text-[14px] leading-[130%] font-normal">
        {label}
      </span>
      <div
        className={`w-[25px] h-[25px] rounded-[6px] flex items-center justify-center border active:shadow-[-2px_-2px_2px_0px_#DCDDDE,2px_2px_2px_0px_#DCDDDE,-2px_2px_2px_0px_#DCDDDE,2px_-2px_2px_0px_#DCDDDE] ${
          checked ? "bg-[#5087F8] hover:bg-[#2469F6] border-none" : "border-[#CDCDCD] hover:border-[#BDBDBD] "
        }`}
      >
        {checked ? (
          <Check strokeWidth={1} color="#ffffff" className="w-6 h-6" />
        ) : (
          <Check
            strokeWidth={1}
            className="w-6 h-6 text-transparent hover:text-[#E3E3E3] active:text-[#878787] focus:text-black transition-colors"
          />
        )}
      </div>
    </button>
  );
};

export default ToggleButton;

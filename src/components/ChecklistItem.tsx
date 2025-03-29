import React from "react";
import { Check } from "lucide-react";

interface ChecklistItemProps {
  item: {
    id: number;
    label: string;
    checked: boolean;
  };
  toggleCheck: (id: number) => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ item, toggleCheck }) => {
  return (
    <button
      onClick={() => toggleCheck(item.id)}
      className="w-full flex items-center justify-between py-3 px-4 rounded-lg transition-colors"
    >
      <span className="text-gray-900 text-[14px] leading-[130%] font-normal align-middle">
        {item.label}
      </span>
      <div
        className={`w-[25px] h-[25px] rounded-[6px] flex items-center justify-center border ${
          item.checked
            ? "bg-[#5087F8] hover:bg-[#2469F6] border-none"
            : "border-[#CDCDCD] hover:border-[#BDBDBD]"
        }`}
      >
        {item.checked ? (
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

export default ChecklistItem;

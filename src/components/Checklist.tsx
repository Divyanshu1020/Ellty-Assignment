import React, { useEffect, useState } from "react";
import ChecklistItem from "./ChecklistItem";
import ToggleButton from "./ToggleButton";

interface ChecklistItemType {
  id: number;
  label: string;
  checked: boolean;
}

const Checklist: React.FC = () => {
  const [allPagesChecked, setAllPagesChecked] = useState(false);
  const [items, setItems] = useState<ChecklistItemType[]>([
    { id: 1, label: "Page 1", checked: false },
    { id: 2, label: "Page 2", checked: false },
    { id: 3, label: "Page 3", checked: false },
    { id: 4, label: "Page 4", checked: false },
  ]);

  useEffect(() => {
    const isAnyItemUnchecked = items.some((item) => !item.checked);
    setAllPagesChecked(!isAnyItemUnchecked);
  }, [items]);

  const toggleAllPages = () => {
    const newCheckedState = !allPagesChecked;
    setAllPagesChecked(newCheckedState);
    setItems(items.map((item) => ({ ...item, checked: newCheckedState })));
  };

  const toggleCheck = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div
        className="w-full max-w-[370px] bg-white p-6"
        style={{
          border: "1px solid #EEEEEE",
          boxShadow:
            "0px 0px 4px rgba(20, 20, 20, 0.1), 0px 8px 15px rgba(20, 20, 20, 0.12)",
          borderRadius: "6px",
        }}
      >
        <ToggleButton
          label="All pages"
          checked={allPagesChecked}
          onClick={toggleAllPages}
        />

        <div className="h-px bg-gray-200 my-2" />

        {items.map((item) => (
          <ChecklistItem key={item.id} item={item} toggleCheck={toggleCheck} />
        ))}

        <div className="h-px bg-gray-200 my-2" />

        <button className="mt-4 w-full bg-[#FFCE22] text-black py-3 px-4 rounded-[4px] font-normal hover:bg-[#FFD84D] transition-colors text-[14px] leading-[130%]">
          Done
        </button>
      </div>
    </div>
  );
};

export default Checklist;
/* Frame 8445888 */

// box-sizing: border-box;

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 10px 0px;

// position: absolute;
// width: 370px;
// height: 326px;
// left: 104px;
// top: 85px;

// background: #FFFFFF;
// /* list-item/gray-active

// Active menu items and lists items. Also cards backgrounds
// */
// border: 1px solid #EEEEEE;
// box-shadow: 0px 0px 4px rgba(20, 20, 20, 0.1), 0px 8px 15px rgba(20, 20, 20, 0.12);
// border-radius: 6px;

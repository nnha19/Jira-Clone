import { IoIosArrowDropdown } from "react-icons/io";

import Typography from "../Typography";
import { useState } from "react";

interface IProps {
  children: React.ReactNode;
  menuStyle?: string;
  menuItems: { label: string; value: string }[];
}

const Menu = ({ children, menuStyle, menuItems }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className={`bg-primary-light rounded p-2 flex items-center ${menuStyle}`}
      >
        <Typography className="mr-2">{children}</Typography>
        <IoIosArrowDropdown className="text-lg" />
      </button>
      {isOpen && (
        <ul className="absolute left-0 bg-black p-4 rounded w-24">
          {menuItems.map((menuItem) => {
            return <div>{menuItem.label}</div>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Menu;

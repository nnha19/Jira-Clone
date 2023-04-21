import { RiArrowDropDownLine } from "react-icons/ri";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const NavBtn = ({ children, ...btnProps }: IProps) => {
  return (
    <div className="h-full mr-1 flex items-center">
      <button
        {...btnProps}
        className="p-1 hover:text-primary rounded text-sm flex items-center hover:bg-primary-light"
      >
        <span>{children}</span>
        <RiArrowDropDownLine className="text-2xl" />
      </button>
    </div>
  );
};
export default NavBtn;

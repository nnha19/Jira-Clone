import { IoMdNotifications } from "react-icons/io";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";

import TextField from "../../Form/TextField";
import Button from "../../UI/Button";
import NavBtn from "./NavBtn";
import Avatar from "../Avatar";

const Appbar = () => {
  return (
    <nav className=" items-center px-4 shadow-lg flex h-14">
      <div className="mr-4">Jira Software</div>
      <div className="h-full flex items-center">
        <NavBtn>Your Work</NavBtn>
        <NavBtn>Projects</NavBtn>
        <NavBtn>Filters</NavBtn>
        <NavBtn>Dashboards</NavBtn>
        <NavBtn>Teams</NavBtn>
        <NavBtn>Apps</NavBtn>
        <div>
          <Button btnStyle="py-1">Create</Button>
        </div>
      </div>

      <div className="ml-auto flex items-center">
        <div>
          <TextField
            inputStyle="p-1 text-xs"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="ml-2 cursor-pointer hover:bg-primary-light p-2 rounded-full">
          <IoMdNotifications className="text-2xl" />
        </div>
        <div className="ml-2 cursor-pointer hover:bg-primary-light p-2 rounded-full">
          <BsFillQuestionSquareFill className="text-2xl" />
        </div>
        <div className="ml-2 cursor-pointer hover:bg-primary-light p-2 rounded-full">
          <CiSettings className="text-2xl" />
        </div>
        <Avatar />
      </div>
    </nav>
  );
};

export default Appbar;

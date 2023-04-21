import Button from "../../UI/Button";
import NavBtn from "./NavBtn";

const Appbar = () => {
  return (
    <nav className="h-12 items-center px-4 shadow-lg flex">
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
    </nav>
  );
};

export default Appbar;

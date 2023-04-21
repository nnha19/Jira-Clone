import TextField from "../../Form/TextField";
import Button from "../../UI/Button";

interface IProps {
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Auth = ({ handleSubmit }: IProps) => {
  return (
    <div className="h-screen flex items-center">
      <div className="p-4 w-96 m-auto shadow-lg shadow-gray-500">
        <h4 className="text-2xl text-center">Atlassian</h4>
        <p className="text-center">Login to continue</p>
        <form>
          <TextField type="text" placeholder="Enter your email" />
          <TextField type="password" placeholder="Enter your password" />
          <Button onClick={handleSubmit}>Continue</Button>
        </form>
      </div>
    </div>
  );
};

export default Auth;

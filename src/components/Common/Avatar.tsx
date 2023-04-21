import { RxAvatar } from "react-icons/rx";

interface IProps {
  name: string;
}

const Avatar = ({ name }: IProps) => {
  return (
    <div className="flex items-center">
      <RxAvatar className="text-2xl mr-2" />
      <span>{name}</span>
    </div>
  );
};

export default Avatar;

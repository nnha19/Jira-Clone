interface IProps {
  type: string;
  placeholder: string;
}

const TextField = ({ type, placeholder }: IProps) => {
  return (
    <input
      type={type}
      className="border-2 border-gray p-2 rounded w-full my-2"
      placeholder={placeholder}
    />
  );
};

export default TextField;

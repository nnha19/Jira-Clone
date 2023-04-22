interface IProps {
  type: string;
  placeholder: string;
  inputStyle?: string;
}

const TextField = ({ type, placeholder, inputStyle }: IProps) => {
  return (
    <input
      type={type}
      className={`border-2 border-gray p-2 rounded w-full my-2 ${inputStyle}`}
      placeholder={placeholder}
    />
  );
};

export default TextField;

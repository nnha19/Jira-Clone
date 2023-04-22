interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  btnStyle?: string;
}

const Button = ({ children, btnStyle, ...btnProps }: IProps) => {
  return (
    <button
      type="button"
      className={`w-full bg-primary p-2 rounded text-white ${btnStyle} font-normal`}
      {...btnProps}
    >
      {children}
    </button>
  );
};

export default Button;

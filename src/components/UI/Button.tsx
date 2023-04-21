interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...btnProps }: IProps) => {
  return (
    <button
      type="button"
      className="w-full bg-primary-dark p-2 text-white"
      {...btnProps}
    >
      {children}
    </button>
  );
};

export default Button;

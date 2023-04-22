interface IProps {
  variant?: "mainHeader" | "header" | "caption";
  children: React.ReactNode;
  className?: string;
}

const defaultStyling = {
  mainHeader: "text-2xl font-bold",
  header: "text-lg font-semibold",
  caption: "text-[14px] text-textPrimary",
};

const Typography = ({ variant = "caption", children, className }: IProps) => {
  return (
    <p className={`${defaultStyling[variant]} ${className}`}>{children}</p>
  );
};

export default Typography;

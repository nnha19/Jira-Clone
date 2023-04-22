import Typography from "../Typography";

interface IProps {
  title: string | JSX.Element;
}

const ModelTitle = ({ title }: IProps) => {
  return (
    <div className="bg-white p-4 border-b-2 border-primaryDivider flex justify-between">
      <Typography variant="header">{title}</Typography>; X
    </div>
  );
};

export default ModelTitle;

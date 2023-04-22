interface IProps {
  show: boolean;
  onClick?: () => void;
}

const Backdrop = ({ show, onClick }: IProps) => {
  if (!show) return null;

  return (
    <div
      onClick={onClick}
      className="fixed top-0 left-0 h-screen w-screen bg-backdropColor"
    />
  );
};

export default Backdrop;

import Auth from "../../components/Common/Auth/Auth";

const LoginPage = () => {
  const handleSubmit = () => {
    console.log("Login");
  };

  return <Auth handleSubmit={handleSubmit} />;
};

export default LoginPage;

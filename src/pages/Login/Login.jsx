import { useState } from "react";
import { UserAuth } from "../../context/AuthContent";
import { useNavigate } from "react-router-dom";
import Form from "../../components/form/Form";

const Login = () => {
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleAction = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <Form 
      title="Sign In"
      setEmail={setEmail}
      setPassword={setPassword}
      handleAction={(e) => handleAction(e)}
      register={false}
    />
  );
};

export default Login;

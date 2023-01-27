import { useState } from "react";
import { useAuthState, useAuthDispatch } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import Form from "../../components/form/Form";

const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useAuthDispatch();
  const { user } = useAuthState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAction = async (e) => {
    e.preventDefault();
    try {
      signIn(email, password);
      console.log(user);
      navigate("/");
    } catch (error) {
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

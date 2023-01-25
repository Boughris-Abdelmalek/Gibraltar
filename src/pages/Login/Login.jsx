import { useState } from "react";
import { useAuthState, useAuthDispatch } from "../../context/Context";
import { signIn } from "../../context/Actions";
import { useNavigate } from "react-router-dom";
import Form from "../../components/form/Form";

const Login = () => {
  const navigate = useNavigate();
  const authDispatch = useAuthDispatch();
  const authState = useAuthState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAction = async (e) => {
    e.preventDefault();
    try {
      signIn(authDispatch, { email, password });
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

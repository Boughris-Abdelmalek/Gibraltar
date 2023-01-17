import Form from "../../components/form/Form";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContent";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const handleAction = async (e) => {
    if (password !== passwordConfirm) {
      setError("Password do not match");
    }
    await signUp(email, password).catch((err) =>
      console.log(JSON.stringify(err))
    );
    navigate("/");
  };
  
  return (
    <Form
      title="Sign In"
      setEmail={setEmail}
      setPassword={setPassword}
      handleAction={handleAction}
    />
  );
};

export default Login;

import { useState } from "react";
import { useAuthState, useAuthDispatch } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import Form from "../../components/form/Form";

const Register = () => {
  const navigate = useNavigate();
  const authDispatch = useAuthDispatch();
  const { createUser } = useAuthState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const handleAction = async (e) => {
    e.preventDefault();

    if (password !== passwordCheck) {
        console.log("Password didn't match");
    }

    try {
      createUser(authDispatch, { email, password });
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Form 
      title="Sign Up"
      setEmail={setEmail}
      setPassword={setPassword}
      handleAction={(e) => handleAction(e)}
      register
    />
  );
};

export default Register;

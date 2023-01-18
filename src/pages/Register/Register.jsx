import { useState } from "react";
import { UserAuth } from "../../context/AuthContent";
import { useNavigate } from "react-router-dom";
import Form from "../../components/form/Form";

const Register = () => {
  const navigate = useNavigate();
  const { createUser } = UserAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [error, setError] = useState("");

  const handleAction = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== passwordCheck) {
        console.log("Password didn't match");
    }

    try {
      await createUser(email, password);
      navigate("/login");
    } catch (error) {
      setError(error.message);
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

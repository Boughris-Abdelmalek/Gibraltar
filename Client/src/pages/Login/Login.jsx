import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Form from "../../components/form/Form";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isPending } = useLogin({ email, password });

  return (
    <Form
      title="Sign In"
      setEmail={setEmail}
      setPassword={setPassword}
      handleAction={login}
      register={false}
    />
  );
};

export default Login;

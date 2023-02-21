import { useState } from "react";
import { useRegister } from "../../hooks/useRegister";
import Form from "../../components/form/Form";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useRegister({ email, password });

  return (
    <Form
      title="Sign Up"
      setEmail={setEmail}
      setPassword={setPassword}
      handleAction={register}
      register={true}
    />
  );
};

export default Register;

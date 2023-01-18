import { useState, useEffect, useRef } from "react";
import { useAuth } from "../../context/AuthContent";
import { auth } from "../../../firebase-config";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  /* 
  const handleAction = async () => {
    if (password !== passwordConfirm) {
      setError("Password do not match");
    }
    await signUp(email, password).catch((err) =>
      console.log(JSON.stringify(err))
    );
    navigate("/");
  }; */

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const userCredential = await login(
        emailRef.current.value,
        passwordRef.current.value
      );
      const user = userCredential.user;
      //navigate("/home");
      console.log(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" ref={emailRef} required />
      <input type="password" ref={passwordRef} required />
      <button type="submit">Sign in</button>
    </form>
  );
};

export default Login;

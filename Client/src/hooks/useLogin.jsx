import { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// I am creating a hook to manage the login
export const useLogin = ({ email, password }) => {
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false); //This is for future loader
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    setError(null);
    setIsPending(true);

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      if (!response) {
        throw new Error("Could not login");
      }

      const user = response.user;
      setIsPending(false);

      navigate("/");

      dispatch({
        type: "LOGIN",
        payload: user,
      });
    } catch (error) {
      console.log(error);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { login, error, isPending };
};

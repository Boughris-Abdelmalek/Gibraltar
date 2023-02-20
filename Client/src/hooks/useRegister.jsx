import { useState, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// I am creating a hook to manage the login
export const useRegister = ({ email, password }) => {
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false); //This is for future loader
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    setError(null);
    setIsPending(true);

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);

      if (!response) {
        throw new Error("Could not login");
      }

      const user = response.user;
      setIsPending(false);

      navigate("/login");

      dispatch({
        type: "REGISTER",
        payload: user,
      });
    } catch (error) {
      console.log(error);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { register, error, isPending };
};

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase-config";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      dispatch({
        type: "LOGOUT",
      });
      console.log("user logged out");
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return { logout };
};

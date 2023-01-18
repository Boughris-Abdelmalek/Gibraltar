import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { AuthContextProvider } from "./context/AuthContent";
import Register from "./pages/Register/Register";

const App = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </AuthContextProvider>
  );
};

export default App;

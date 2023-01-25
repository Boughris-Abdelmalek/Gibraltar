import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/Context";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CategoryProduct from "./pages/CategoryProducts/CategoryProduct";
import ProductPage from "./pages/ProductPage/ProductPage";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/category/:productsCategory" element={<CategoryProduct />}/>
        <Route path="/products/:product" element={<ProductPage />}/>
      </Routes>
    </AuthProvider>
  );
};

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Form from "./components/form/Form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Form title="Sign up" />,
  },
  {
    path: "/register",
    element: <Form />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/HomePage/HomePage";
import SignUpForm from "../Pages/SignUp/SignUpForm";
import LoginForm from "../Pages/Login/LoginForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/sign-up',
    element:<SignUpForm/>
  },
  {
    path: '/login',
    element:<LoginForm/>
  }
]);

export default router;

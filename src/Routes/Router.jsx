import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/HomePage/HomePage";
import SignUpForm from "../Pages/SignUp/SignUpForm";
import LoginForm from "../Pages/Login/LoginForm";
import DashboardLayout from "../Layout/DashboardLayout";
import AddBlog from "../Pages/Dashboard/Author/AddBlog";
import EditBlog from "../Pages/Dashboard/Author/EditBlog";
import UpdateBlogData from "../Pages/Dashboard/Author/UpdateBlogData";

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
    path: "/sign-up",
    element: <SignUpForm />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard/add-blog",
        element: <AddBlog />,
      },
      {
        path: "/dashboard/edit-blog",
        element: <EditBlog />,
      },
      {
        path: "/dashboard/editBlogData/:id",
        element: <UpdateBlogData />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/editBlogData/${params.id}`),

        // loader:()=>fetch(`${import.meta.env.VITE_API_URL}`)
      },
    ],
  },
]);

export default router;

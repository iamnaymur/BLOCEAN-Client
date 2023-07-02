import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
// import axios from "axios";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  // used axios secure with react query here.
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading && !!user && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      // * using axiosSecure here below

      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      // console.log("is admin response", res);
      return res.data.admin;

      //* worked without axiosSecure
      // const res = await axios.get(`${import.meta.env.VITE_API_URL}/users/admin/${user?.email}`);
      // return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;

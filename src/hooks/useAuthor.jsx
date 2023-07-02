import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAuthor = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: isAuthor, isLoading: isAuthorLoading } = useQuery({
    queryKey: ["isAuthor", user?.email],
    enabled: !loading && !!user && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/author/${user?.email}`);
      return res.data.author;
    },
  });
  return [isAuthor, isAuthorLoading];
};

export default useAuthor;

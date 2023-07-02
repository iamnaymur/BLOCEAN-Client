import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useReader = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: isReader, isLoading: isReaderLoading } = useQuery({
    queryKey: ["isReader", user?.email],
    enabled: !loading && !!user && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/reader/${user?.email}`);
      return res.data.author;
    },
  });
  return [isReader, isReaderLoading];
};

export default useReader;

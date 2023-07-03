import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const EditBlog = () => {
  const { user } = useAuth();

  // * here can be an array [] with the blogsData

  const {
    data: blogsData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["blogs", user?.email],
    queryFn: async () => {
      if (user && user?.email) {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/blogs/${user?.email}`
        );
        return response.data;
      }
      return null;
    },
  });

  const handleDelete = (blogId) => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/authorDeleteBlog/${blogId}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          toast.success("Deleted blog");
          refetch();
        }
      });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogsData?.map((blog) => (
            <tr key={blog._id}>
              <th>1</th>
              <td>{blog?.title}</td>
              <td>{blog?.category}</td>
              <td>
                <>
                  <button>
                    <Link to={`/dashboard/editBlogData/${blog?._id}`} className="btn btn-md me-2 hover:bg-green-500">
                      <FaEdit /> Edit
                    </Link>
                  </button>

                  <button
                    onClick={() => handleDelete(blog?._id)}
                    className="btn btn-md hover:bg-red-500"
                  >
                    <FaTrash /> Delete
                  </button>
                </>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditBlog;

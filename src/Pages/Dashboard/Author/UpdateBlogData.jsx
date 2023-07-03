import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

const UpdateBlogData = () => {
  const blogData = useLoaderData();
  console.log(blogData);
  const { user } = useAuth();
  //   console.log();
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data) => {
    fetch(`${import.meta.env.VITE_API_URL}/newBlogData/${blogData._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center h-screen font-displayOne">
      <div className="card w-full max-w-4xl shadow-2xl flex justify-center  bg-base-100">
        <h1 className="text-3xl font-semibold  mt-5 text-center">
          Update Your Blog data here.
        </h1>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
              defaultValue={blogData?.title}
              type="text"
              placeholder="Title"
              {...register("title", { required: true, maxLength: 80 })}
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
              type="text"
              id="image"
              defaultValue={blogData?.image}
              placeholder="Image"
              {...register("image", { required: true })}
            />

            <textarea
              className="shadow h-96 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
              type="text"
              placeholder="Blog details"
              defaultValue={blogData?.details}
              {...register("details", { required: true })}
            />

            <label className="label">
              <p className="label-text font-semibold ">Author Information</p>
            </label>

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              type="text"
              defaultValue={user.displayName}
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              type="email"
              defaultValue={user?.email}
            />

            <div className="flex mt-5 gap-5">
              <label className="label">
                <p className="label-text font-semibold ">Select Category</p>
              </label>
              <select
                className="border-2 bg-gray-200"
                defaultValue={blogData?.category}
                {...register("category", { required: true })}
              >
                <option value="">Select</option>
                <option value="technology">technology</option>
                <option value="fashion">fashion</option>
                <option value="travel">travel</option>
                <option value="health">health</option>
                <option value="finance">finance</option>
                <option value="movies">movies</option>
              </select>
            </div>

            <input
              className="btn  btn-wide mt-4  text-white  btn-warning "
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlogData;

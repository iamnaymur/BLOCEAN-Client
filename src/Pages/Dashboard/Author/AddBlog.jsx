import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import axios from "axios";
import { addBlogs } from "../../../UserApi/addBlogs";
import { toast } from "react-hot-toast";

const AddBlog = () => {
  //   const [imageLink, setImageLink] = useState();
  //   console.log(imageLink);
  //   const handleImageChange = (image) => {
  //     setImageLink(image);
  //   };
  const { user } = useAuth();
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    const author = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    };
    const blogData = { ...data, author };

    addBlogs(blogData)
      .then((data) => {
        console.log(data);
        toast.success("Blog Added Successfully");
        reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-center items-center h-screen font-displayOne">
      <div className="card w-full max-w-4xl shadow-2xl flex justify-center  bg-base-100">
        <h1 className="text-3xl font-semibold  mt-5 text-center">
          Add blog here
        </h1>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
              type="text"
              placeholder="Title"
              {...register("title", { required: true, maxLength: 80 })}
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
              type="text"
              id="image"
              placeholder="Image"
              {...register("image", { required: true })}
            />

            {/* <input
              onChange={(event) => handleImageChange(event.target.files[0])}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
              type="file"
              name="image"
              id="image"
              accept="image/*"
              {...register("image", { required: true })}
            /> */}
            <textarea
              className="shadow h-96 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
              type="text"
              placeholder="Blog details"
              {...register("details", { required: true })}
            />

            <label className="label">
              <p className="label-text font-semibold ">Author Information</p>
            </label>

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Name"
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email"
            />

            <div className="flex mt-5 gap-5">
              <label className="label">
                <p className="label-text font-semibold ">Select Category</p>
              </label>
              <select
                className=" border-2 bg-gray-200"
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
              className="btn  btn-wide mt-4  text-white  btn-primary "
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;

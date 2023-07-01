import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { useAuth } from "../../hooks/useAuth";

const SignUpForm = () => {
    const { signUp } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signUp(data?.email, data?.password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        updateData(user, data.name, data.photo);
        const saveUser = {
          name: data.name,
          email: data.email,
          photo: data.photo,
          role: "user",
        };

        // ${import.meta.env.VITE_API_URL}
        fetch(`${import.meta.env.VITE_API_URL}/users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              reset();
              toast.success("User account created successfully");
              navigate(from, { replace: true });
            }
          });
      })

      .catch((error) => {
        toast.error(error.message);
      });

    const updateData = (user, name, photo) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => {
          console.log("updated profile successfully");
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    console.log(errors);
  };

  return (
    <div className="flex pt-20 justify-center items-center h-screen font-displayOne">
      <div className="card  w-full max-w-lg shadow-2xl flex justify-center  bg-base-100">
        <h1 className="text-3xl font-semibold font-displayTwo mt-5 text-center">
          Register here
        </h1>
        <div className="card-body">
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control ">
              <label className="label">
                <p className="label-text font-semibold">Name</p>
              </label>
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: true, maxLength: 120 })}
                className="input input-bordered w-full "
              />
              {errors.name && (
                <span className="text-red-600">Name is required!</span>
              )}
            </div>
            <div className="form-control ">
              <label className="label">
                <p className="label-text font-semibold">Email</p>
              </label>
              <input
                type="text"
                placeholder="Email"
                required
                {...register("email", {
                  required: true,
                  maxLength: 120,
                  pattern: /^\S+@\S+$/i,
                })}
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <p className="label-text font-semibold">Password</p>
              </label>
              <input
                type="text"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /^(?=.*[!@#$%^&*()\-_=+{};:,<.>]{1,})(?=.*[A-Z]{1,}).{6,}$/,
                })}
                className="input input-bordered w-full"
                required
              />

              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters.</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one uppercase and one special character.
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <p className="label-text font-semibold">Confirm Password</p>
              </label>
              <input
                type="text"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: true,
                  pattern: /^(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[A-Z]).{6,}$/,
                })}
                className="input input-bordered w-full "
              />
              {errors.confirmPassword?.type === "pattern" && (
                <p className="text-red-600">
                  The passwords do not match, please try again.
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <p className="label-text font-semibold">Photo URL</p>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                {...register("photo", { required: true })}
                className="input input-bordered w-full "
              />
              <span className="mt-5">
                <small>
                  You already got an account?{" "}
                  <Link to="/login" className="text-blue-700 underline bold">
                    Login here
                  </Link>
                </small>
              </span>
            </div>

            <input
              className="btn btn-sm mt-4  text-white  btn-primary border-0 px-5"
              type="submit"
              value="Register"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;

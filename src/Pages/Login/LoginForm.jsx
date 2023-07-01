import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

const LoginForm = () => {
  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data?.email, data?.password).then((userCredentials) => {
      const user = userCredentials.user;
      reset();
      toast.success(`Signed is successfully as ${user?.displayName}`);
      navigate(from, { replace: true });
    });
    console.log(data);
  };

  return (
    <div className="flex pt-20 justify-center items-center h-screen font-displayOne">
      <div className="card  w-full max-w-lg shadow-2xl flex justify-center  bg-base-100">
        <h1 className="text-3xl font-semibold font-displayTwo mt-5 text-center">
          Login here
        </h1>
        <div className="card-body">
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
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
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: true,
                })}
                className="input input-bordered w-full"
                required
              />
              <input
                onClick={() => setShowPassword(!showPassword)}
                type="checkbox"
                className="toggle mt-5 toggle-xs"
              />
              <span className="mt-5">
                <small>
                  You are new in BLOCEAN?
                  <Link to="/sign-up" className="text-blue-700 underline bold">
                    Register here
                  </Link>
                </small>
              </span>
            </div>

            <input
              className="btn btn-sm mt-4  text-white  btn-primary border-0 px-5"
              type="submit"
              value="Login"
            />

            <button
            //   onClick={handleGoogleLogin}
              type="button"
              className="flex w-full mx-auto justify-center items-center  border-sky-500 border py-2 rounded-lg  border-rounded cursor-pointer"
            >
              <FaGoogle className="w-32 h-12 text-blue-500" />

              <p className="text-xl font-semibold">Continue with Google</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

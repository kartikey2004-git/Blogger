import { useState } from "react";
import authService from "@/appwrite/auth_services";
import Input from "@/components/input";
import { login } from "@/store/authslice";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Aurora from "./ui/Aurora";

export default function SignupForm() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Aurora
        colorStops={["#A4FF00", "#65E6FF", "#00FF80", "#FF00A8"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <div className="flex justify-center rounded-3xl items-center h-screen cursor-pointer">
        <div className="bg-black p-16 border rounded-2xl shadow-lg w-full max-w-md text-white">
          <h2 className="text-2xl font-semibold mb-3">Welcome to Blogger</h2>
          <br />
          <p className="mb-8">
            Already have an account?
            <Link to="/login" className="text-white ml-2">
              Sign In
            </Link>
          </p>

          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

          <form onSubmit={handleSubmit(create)} className="space-y-4">
            <div className="flex"></div>

            <Input
              type="email"
              placeholder="Email Address"
              className="p-3 text-black border placeholder-gray-400 rounded-lg w-full focus:outline-none focus:ring focus:ring-blue-500"
              aria-label="Email address"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />

            <Input
              type="password"
              placeholder="Password"
              className="p-3  text-white border placeholder-gray-400 rounded-lg w-full focus:outline-none focus:ring focus:ring-blue-500"
              aria-label="Password"
              {...register("password", {
                required: true,
              })}
            />

            <button
              type="submit"
              className="bg-gray-50 text-black mt-10 font-semibold  py-3 px-6 rounded-lg w-full transition-colors focus:outline-none focus:ring focus:ring-blue-500"
            >
              Sign up &rarr;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

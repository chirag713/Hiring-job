"use client";

import { Loginuser } from '@/services/userservice';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const SigninForm = () => {

  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email === "") {
      toast.warning("E-mail is required", {
        position: "top-center",
      });
      return;
    }
    if (formData.password === "") {
      toast.warning("Password is required", {
        position: "top-center",
      });
      return;
    }
    try {
      const result = await Loginuser(formData);
      toast.success("Successfully Logged in ", {
        position: "top-center",
      });
      console.log(result);
      router.push("/");
    } catch (error) {
      console.log(error);
      if (error.response.data.message === "Email not found") {
        toast.warning("Email not found", {
          position: "top-center",
        });
        router.push("/Usersignup");
        return;
      }
      if (error.response.data.message === "Password not matched") {
        toast.warning("Password not matched", {
          position: "top-center",
        });
        setFormData({
          ...formData,
          password: "",
        });
        return;
      }

      toast.warning("Error has occurred, Please try again !!", {
        position: "top-center",
      });
    }
  };

  const gotousersignup=()=>{
    router.push("/Usersignup");
  }

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign In</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <span onClick={gotousersignup} className="font-medium cursor-pointer text-blue-600 hover:text-blue-500"> sign up if you don't have an account</span>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-white p-8 rounded-lg shadow-md">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
              <div className="absolute inset-y-0 pt-5 text-3xl right-0 pr-3 flex items-center  leading-5">
                {showPassword ? (
                  <AiFillEyeInvisible className="text-gray-600 cursor-pointer" onClick={togglePasswordVisibility} />
                ) : (
                  <AiFillEye className="text-gray-600 cursor-pointer" onClick={togglePasswordVisibility} />
                )}
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SigninForm;

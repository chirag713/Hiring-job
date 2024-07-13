"use client";

import { Signupuser } from "@/services/userservice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const SignupForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        about: "",
        street: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
    });

    const [confirmpassword, Setconfirmpassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleconfirmpassword = (e) => {
        const { value } = e.target;
        Setconfirmpassword(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.name === "") {
            toast.warning("Name is required", {
                position: "top-center",
            });
            return;
        }
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
        if (formData.about === "") {
            toast.warning("About is required", {
                position: "top-center",
            });
            return;
        }
        if (formData.country === "") {
            toast.warning("Country is required", {
                position: "top-center",
            });
            return;
        }
        if (formData.state === "") {
            toast.warning("State is required", {
                position: "top-center",
            });
            return;
        }
        if (formData.city === "") {
            toast.warning("City is required", {
                position: "top-center",
            });
            return;
        }
        if (formData.street === "") {
            toast.warning("Street is required", {
                position: "top-center",
            });
            return;
        }
        if (formData.pincode === "") {
            toast.warning("Pin Code is required", {
                position: "top-center",
            });
            return;
        }

        if (formData.password != confirmpassword) {
            toast.warning("Password not matched", {
                position: "top-center",
            });
            return;
        }

        try {
            const result = await Signupuser(formData);
            toast.success("Successfully signed in ", {
                position: "top-center",
            });
            router.push("/");
        } catch (error) {
            console.log(error);
            if (error.response.data.message == "Email already exists") {
                toast.warning("Email already registered", {
                    position: "top-center",
                });
                router.push("/Userlogin");
                return;
            }

            toast.warning("Error has occurred, Please try again !!", {
                position: "top-center",
            });
        }
    };

    const gotologinuser = () => {
        router.push("/Userlogin");
    }

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(prevState => !prevState);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or
                        <span onClick={gotologinuser} className="font-medium cursor-pointer text-blue-600 hover:text-blue-500"> log in if you already have an account</span>
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-white p-8 rounded-lg shadow-md">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">
                                Email
                            </label>
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
                            <label htmlFor="password" className="block text-gray-700">
                                Password
                            </label>
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
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pt-5 text-3xl leading-5">
                                {showPassword ? (
                                    <AiFillEyeInvisible className="text-gray-600 cursor-pointer" onClick={togglePasswordVisibility} />
                                ) : (
                                    <AiFillEye className="text-gray-600 cursor-pointer" onClick={togglePasswordVisibility} />
                                )}
                            </div>
                        </div>

                        <div className="mb-4 relative">
                            <label htmlFor="confirmpassword" className="block text-gray-700">
                                Confirm Password
                            </label>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmpassword"
                                name="confirmpassword"
                                placeholder="Confirm your password"
                                value={confirmpassword}
                                onChange={handleconfirmpassword}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                required
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pt-5 text-3xl leading-5">
                                {showConfirmPassword ? (
                                    <AiFillEyeInvisible className="text-gray-600 cursor-pointer" onClick={toggleConfirmPasswordVisibility} />
                                ) : (
                                    <AiFillEye className="text-gray-600 cursor-pointer" onClick={toggleConfirmPasswordVisibility} />
                                )}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="about" className="block text-gray-700">
                                About
                            </label>
                            <textarea
                                id="about"
                                name="about"
                                placeholder="Tell us about yourself"
                                value={formData.about}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="country" className="block text-gray-700">
                                Country
                            </label>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                placeholder="Enter your country"
                                value={formData.country}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="state" className="block text-gray-700">
                                State
                            </label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                placeholder="Enter your state"
                                value={formData.state}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="city" className="block text-gray-700">
                                City
                            </label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                placeholder="Enter your city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="street" className="block text-gray-700">
                                Street
                            </label>
                            <input
                                type="text"
                                id="street"
                                name="street"
                                placeholder="Enter your street"
                                value={formData.street}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="pincode" className="block text-gray-700">
                                Pincode
                            </label>
                            <input
                                type="number"
                                id="pincode"
                                name="pincode"
                                placeholder="Enter your pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;

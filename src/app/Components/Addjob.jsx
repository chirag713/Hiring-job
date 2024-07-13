"use client";

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
// import { createJob } from '@/services/jobservice'; // Make sure to create a job service to handle the API call

const JobForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        address: null, // Initially set to null or empty object
        worktype: '',
        Timeperiod: '',
        Salary: '',
        StartingDate: '',
        Applyby: '',
        About: '',
        Skillsrequired: [], // Array to store skills required
        Whocanapply: [], // Array to store who can apply
        Perks: [], // Array to store perks
    });

    const [workTypeOptions, setWorkTypeOptions] = useState([]);

    useEffect(() => {
        // Simulating fetching options from an API or some source
        setWorkTypeOptions(["Online Work", "Online Internship", "Offline Internship", "Learning", "Offline Work"]);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'worktype') {
            if (value === 'Online Work' || value === 'Online Internship') {
                // Clear address fields if worktype is Work from Home
                setFormData((prevData) => ({
                    ...prevData,
                    worktype: value,
                    address: null, // Clear address when Work from Home is selected
                }));
            } else {
                // Set other fields normally
                setFormData({
                    ...formData,
                    [name]: value,
                });
            }
        } else if (name.includes('address.')) {
            const addressField = name.split('.')[1];
            setFormData((prevData) => ({
                ...prevData,
                address: {
                    ...prevData.address,
                    [addressField]: value,
                }
            }));
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleAddItem = (fieldName) => {
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: [...prevData[fieldName], ''] // Add a new empty string for a new item (skills or who can apply)
        }));
    };

    const handleRemoveItem = (fieldName, index) => {
        const newItems = [...formData[fieldName]];
        newItems.splice(index, 1);
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: newItems,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        // Add validation here
        // try {
        // //   const result = await createJob(formData);
        //   toast.success("Job successfully created", {
        //     position: "top-center",
        //   });
        //   router.push("/");
        // } catch (error) {
        //   console.log(error);
        //   toast.warning("Error has occurred, please try again", {
        //     position: "top-center",
        //   });
        // }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create Job</h2>
                </div>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-white p-8 rounded-lg shadow-md">
                    <div className="rounded-md shadow-sm -space-y-px">

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Job Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter job name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="worktype" className="block text-gray-700">Work Type</label>
                            <select
                                id="worktype"
                                name="worktype"
                                value={formData.worktype}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                required
                            >
                                <option value="" disabled>Select work type</option>
                                {workTypeOptions.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>

                        {formData.worktype !== 'Online Work' && formData.worktype !== 'Online Internship' && formData.worktype !== '' && (
                            <>
                                <div className="mb-4">
                                    <label htmlFor="street" className="block text-gray-700">Street</label>
                                    <input
                                        type="text"
                                        id="street"
                                        name="address.street"
                                        placeholder="Enter street"
                                        value={formData.address?.street || ''}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="city" className="block text-gray-700">City</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="address.city"
                                        placeholder="Enter city"
                                        value={formData.address?.city || ''}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="state" className="block text-gray-700">State</label>
                                    <input
                                        type="text"
                                        id="state"
                                        name="address.state"
                                        placeholder="Enter state"
                                        value={formData.address?.state || ''}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="country" className="block text-gray-700">Country</label>
                                    <input
                                        type="text"
                                        id="country"
                                        name="address.country"
                                        placeholder="Enter country"
                                        value={formData.address?.country || ''}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="pincode" className="block text-gray-700">Pincode</label>
                                    <input
                                        type="text"
                                        id="pincode"
                                        name="address.pincode"
                                        placeholder="Enter pincode"
                                        value={formData.address?.pincode || ''}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                            </>
                        )}

                        <div className="mb-4">
                            <label htmlFor="Timeperiod" className="block text-gray-700">Time Period</label>
                            <input
                                type="number"
                                id="Timeperiod"
                                name="Timeperiod"
                                placeholder="Enter time period in months"
                                value={formData.Timeperiod}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Salary" className="block text-gray-700">Salary</label>
                            <input
                                type="text"
                                id="Salary"
                                name="Salary"
                                placeholder="Enter salary"
                                value={formData.Salary}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="StartingDate" className="block text-gray-700">Starting Date</label>
                            <input
                                type="text"
                                id="StartingDate"
                                name="StartingDate"
                                placeholder="Enter starting date"
                                value={formData.StartingDate}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Applyby" className="block text-gray-700">Apply By</label>
                            <input
                                type="date"
                                id="Applyby"
                                name="Applyby"
                                placeholder="Enter apply by date"
                                value={formData.Applyby}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="About" className="block text-gray-700">About</label>
                            <textarea
                                id="About"
                                name="About"
                                placeholder="Enter job description"
                                value={formData.About}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                required
                            ></textarea>
                        </div>

                        {/* Skills Required Section */}
                        <div className="mb-4">
                            <label className="block text-gray-700">Skills Required</label>
                            {formData.Skillsrequired.map((skill, index) => (
                                <div key={index} className="flex m-2 items-center">
                                    <input
                                        type="text"
                                        placeholder={`Skill ${index + 1}`}
                                        value={skill}
                                        onChange={(e) => {
                                            const newSkills = [...formData.Skillsrequired];
                                            newSkills[index] = e.target.value;
                                            setFormData({ ...formData, Skillsrequired: newSkills });
                                        }}
                                        className="w-full px-4 py-2 mr-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveItem('Skillsrequired', index)}
                                        className="px-3 py-2 text-white bg-red-500 rounded-lg"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={() => handleAddItem('Skillsrequired')}
                                className="mt-2 px-3 py-2 text-white bg-blue-500 rounded-lg"
                            >
                                Add Skill
                            </button>
                        </div>

                        {/* Who Can Apply Section */}
                        <div className="mb-4">
                            <label className="block text-gray-700">Who Can Apply?</label>
                            {formData.Whocanapply.map((who, index) => (
                                <div key={index} className="flex m-2  items-center">
                                    <input
                                        type="text"
                                        placeholder={`Who can apply ${index + 1}`}
                                        value={who}
                                        onChange={(e) => {
                                            const newWhoCanApply = [...formData.Whocanapply];
                                            newWhoCanApply[index] = e.target.value;
                                            setFormData({ ...formData, Whocanapply: newWhoCanApply });
                                        }}
                                        className="w-full px-4 py-2 mr-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveItem('Whocanapply', index)}
                                        className="px-3 py-2 text-white bg-red-500 rounded-lg"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={() => handleAddItem('Whocanapply')}
                                className="mt-2 px-3 py-2 text-white bg-blue-500 rounded-lg"
                            >
                                Add Who Can Apply
                            </button>
                        </div>
                           {/* Perks Section */}
                           <div className="mb-4">
                            <label className="block text-gray-700">Perks</label>
                            {formData.Perks.map((perk, index) => (
                                <div key={index} className="flex m-2 items-center">
                                    <input
                                        type="text"
                                        placeholder={`Perk ${index + 1}`}
                                        value={perk}
                                        onChange={(e) => {
                                            const newPerks = [...formData.Perks];
                                            newPerks[index] = e.target.value;
                                            setFormData({ ...formData, Perks: newPerks });
                                        }}
                                        className="w-full px-4 py-2 mr-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveItem('Perks', index)}
                                        className="px-3 py-2 text-white bg-red-500 rounded-lg"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={() => handleAddItem('Perks')}
                                className="mt-2 px-3 py-2 text-white bg-blue-500 rounded-lg"
                            >
                                Add Perk
                            </button>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="w-full mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                Create Job
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobForm;
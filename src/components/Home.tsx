import React, { useState } from 'react';
import Login from './Login';
import StudentDash from './StudentDash';

interface SignUpFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const SignUpForm: React.FC = () => {
    const [formData, setFormData] = useState<SignUpFormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFacilitatorClick = () => {
        setShowSignUp(true);
    };

    const handleStudentClick = () => {
        setShowSignUp(true);
    };
    const handleTeamLeadClick = () => {
        setShowLogin(true);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // You can perform form submission logic here
        console.log('Form data submitted:', formData);
    };

    if (showLogin) {
        return <Login />; // Render the Login component
    }
    return (
        <>
            <div className={`min-h-screen flex items-center justify-center grid ${showSignUp ? 'grid-cols-2' : 'grid-cols-1'}`}>
                <div className={`bg-blue-200 h-full ${showSignUp ? 'w-full' : 'w-full'}`}>
                    <h1 className={`text-3xl font-semibold text-center mt-60 ${showSignUp ? 'text-2xl' : ''}`}>
                        Welcome to Request handling web<br />Join us as
                    </h1>
                    <div className="flex grid grid-cols-3 gap-8 m-4">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            onClick={handleStudentClick}
                        >
                            Student
                        </button>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            onClick={handleFacilitatorClick}
                        >
                            Facilitator
                        </button>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleTeamLeadClick}
                        >
                            Team Lead
                        </button>
                    </div>
                </div>
                {showSignUp && (
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  w-3/4 ml-10 justify-center">
                        {/* Sign-up form content (unchanged) */}
                        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
                        <form onSubmit={handleSubmit} >
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                                    First Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                    Last Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Sign Up
                                </button>

                            </div>
                            <p>
                                Already have an account?{' '}
                                <a
                                    className="text-blue-500 hover:underline cursor-pointer"
                                    href="./Login" // Replace with your login route or link
                                >
                                    Login
                                </a>
                            </p>
                        </form>

                    </div>
                )}
            </div>
        </>
    );
};

export default SignUpForm;

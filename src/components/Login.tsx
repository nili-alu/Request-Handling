import React, { useState } from 'react';

interface LoginFormData {
    email: string;
    password: string;
}

const LoginForm: React.FC = () => {
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: '',
    });

    const [passwordValidation, setPasswordValidation] = useState<{
        isLengthValid: boolean;
        hasUppercase: boolean;
        hasLowercase: boolean;
        hasNumber: boolean;
    }>({
        isLengthValid: false,
        hasUppercase: false,
        hasLowercase: false,
        hasNumber: false,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        validatePassword(value);
    };

    const validatePassword = (password: string) => {
        const isLengthValid = password.length >= 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);

        setPasswordValidation({
            isLengthValid,
            hasUppercase,
            hasLowercase,
            hasNumber,
        });
    };

    const handleSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ): void => {
        e.preventDefault();
        // You can perform login logic here
        console.log('Login form submitted:', formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
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
                        <div className="relative">
                            <input
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${passwordValidation.isLengthValid &&
                                    passwordValidation.hasUppercase &&
                                    passwordValidation.hasLowercase &&
                                    passwordValidation.hasNumber
                                    ? 'border-green-500'
                                    : 'border-red-500'
                                    }`}
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            {passwordValidation.isLengthValid &&
                                passwordValidation.hasUppercase &&
                                passwordValidation.hasLowercase &&
                                passwordValidation.hasNumber ? (
                                <span className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2">
                                    <span className="text-green-500">&#10003;</span>
                                </span>
                            ) : (
                                <span className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2">
                                    <span className="text-red-500">&#10006;</span>
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="text-sm text-gray-700 mb-2">
                        Password Requirements:
                    </div>
                    <ul className="list-disc list-inside mb-4 ml-4 text-gray-700">
                        <li
                            className={
                                passwordValidation.isLengthValid
                                    ? 'text-green-500'
                                    : 'text-red-500'
                            }
                        >
                            At least 8 characters
                        </li>
                        <li
                            className={
                                passwordValidation.hasUppercase
                                    ? 'text-green-500'
                                    : 'text-red-500'
                            }
                        >
                            At least one uppercase letter
                        </li>
                        <li
                            className={
                                passwordValidation.hasLowercase
                                    ? 'text-green-500'
                                    : 'text-red-500'
                            }
                        >
                            At least one lowercase letter
                        </li>
                        <li
                            className={
                                passwordValidation.hasNumber
                                    ? 'text-green-500'
                                    : 'text-red-500'
                            }
                        >
                            At least one number
                        </li>
                    </ul>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            disabled={
                                !(
                                    passwordValidation.isLengthValid &&
                                    passwordValidation.hasUppercase &&
                                    passwordValidation.hasLowercase &&
                                    passwordValidation.hasNumber
                                )
                            }
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;

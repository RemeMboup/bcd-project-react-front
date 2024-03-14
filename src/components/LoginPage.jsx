import React, { useState } from 'react';
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigateTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login', {
        email,
        password
      });
      console.log(response.data);
      setIsLoggedIn(true);
      navigateTo('/test')
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-20 h-20 mr-2" src="data:image/jpeg;base64,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"/>
                     
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email"  value={email}
                                  onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" value={password}
                                  onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <button onClick={handleSubmit} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link to={`/addClient`} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default LoginPage;
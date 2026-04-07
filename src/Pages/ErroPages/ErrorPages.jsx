import React from "react";
import {  useNavigate } from "react-router";

const ErrorPages = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center
     min-h-screen bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-4">
         Oops! Page not found.
        </p>

        <p className="mt-4 text-gray-500">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring transition-colors"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPages;

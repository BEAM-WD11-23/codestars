import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-2xl text-gray-600">Page Not Found</p>
      <p className="mt-2 text-gray-500">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default PageNotFound;
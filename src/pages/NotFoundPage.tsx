// 404.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import UploadBtn from '../components/ui/buttons/UploadBtn';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600">The page you are looking for might have been removed or is temporarily unavailable.</p>
        <Link to="/">
            <UploadBtn className="mt-6 h-10">Go Back Home</UploadBtn>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

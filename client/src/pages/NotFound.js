import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  // Optional: Change document title
  useEffect(() => {
    document.title = "Page Not Found | Movie App";
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="text-center max-w-md">
        {/* Error Icon/Image */}
        <div className="text-8xl font-bold text-gray-300 mb-4">404</div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Oops! Page Not Found
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Home Button */}
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg 
                    hover:bg-blue-700 transition-colors shadow-md"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}

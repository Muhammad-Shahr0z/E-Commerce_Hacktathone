// src/app/404.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 bg-gray-100 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
        404 - Page Not Found
      </h1>
      <p className="mt-4 text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
      >
        Go to Home Page
      </Link>
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-700 py-4">
        Page Under Construction
      </h1>
    </div>
  );
}

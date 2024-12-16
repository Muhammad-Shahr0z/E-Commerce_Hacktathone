

import Link from "next/link";
import { FiHome } from "react-icons/fi";

export default function Custom404() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center bg-white px-4 py-12">
        <h1 className="text-6xl font-bold text-[#2A254B] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-500 mb-8 text-center max-w-md">
          The page you are looking for does not exist or has been moved. Let's
          get you back on track.
        </p>

        <Link href="/" passHref>
          <button className="flex items-center bg-[#2A254B] text-white px-6 py-3 rounded-md hover:bg-[#24203E] transition">
            <FiHome className="mr-2" size={20} />
            Go Back to Home
          </button>
        </Link>
      </div>

    </div>
  );
}

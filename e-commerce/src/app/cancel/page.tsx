

export default function CancelPage() {
    return (
      <div className="flex items-center justify-center my-10">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Canceled</h1>
          <p className="text-gray-600 mb-6">
            Your payment has been canceled. If this was a mistake, you can try again.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Go to Home
            </a>
            <a
              href="/carts"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Try Again
            </a>
          </div>
        </div>
      </div>
    );
  }
  


  
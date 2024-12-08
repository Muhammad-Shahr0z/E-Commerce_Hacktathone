const UnderConstruction = () => {
    return (
      <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-100 px-4 text-center">
        <div className="max-w-[600px] bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2A254B] mb-6 clashDisplay">
            Page Under Construction
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-4 satoshi">
            Due to time constraints, this page could not be designed.
          </p>
          <p className="text-md text-gray-500 satoshi">
            Please check back later. We appreciate your understanding!
          </p>
        </div>
      </div>
    );
  };
  
  export default UnderConstruction;
  
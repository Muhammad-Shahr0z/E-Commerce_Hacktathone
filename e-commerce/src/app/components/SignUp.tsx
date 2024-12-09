const SignUp = () => {
  return (
    <main className="max-w-[1280px] mx-auto bg-[#F9F9F9] h-auto xl:h-[481px] mt-10 flex justify-center items-center w-full px-4 xl:px-20">
      <div className="w-full max-w-[1273px] h-auto flex flex-col bg-[#FFFFFF] justify-center items-center p-0 md:p-12">
        {/* div 01 */}
        <div className=" max-w-[571px] sm:w-full w-[315px] text-[#2A254B] flex flex-col gap-4 text-center">
          <p className="clashDisplay font-[400] sm:text-[36px] text-[20px] md:text-[36px] leading-tight">
            Join the club and get the benefits
          </p>
          <p className="satoshi font-[400] tracking-tight text-[14px] md:text-[16px] xxs:text-[12px]">
            Signup for our newsletter exclusive offers on new ranges, sales, pop
            up stores, and more.
          </p>
        </div>

        {/* div 02 */}
        <div className="w-full max-w-[472px] flex flex-nowrap justify-center items-center mt-8 md:mb-0 mb-6">
          <input
            type="text"
            className="w-[70%] md:w-[354px] h-[48px] md:h-[56px] outline-none bg-[#F9F9F9] pl-4 md:pl-8 text-[14px]"
            placeholder="your@email.com"
          />
          <button className="w-[30%] md:w-[118px] h-[48px] md:h-[56px] text-[#FFFFFF] satoshi font-[400] bg-[#2A254B]">
            Sign up
          </button>
        </div>
      </div>
    </main>
  );
};

export default SignUp;

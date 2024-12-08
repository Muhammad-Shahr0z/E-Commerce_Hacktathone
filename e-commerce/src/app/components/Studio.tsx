import Image from "next/image";

const Studio = () => {
  return (
    <main className="w-full mx-auto flex flex-col xl:flex-row items-center xl:h-[603px] h-auto pt-10 xl:py-0">
      <div className="xl:w-1/2 w-full flex flex-col justify-center gap-y-12 px-6 xl:px-12 mb-0 xl:mb-0">
        <div className="w-full max-w-[536px] flex flex-col gap-6">
          <p className="text-[20px] md:text-[24px] leading-8 clashDisplay">
            From a studio in London to a global brand with over 400 outlets
          </p>
          <p className="satoshi font-[400] text-[#505977] sm:text-[14px] md:text-[16px]">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="satoshi font-[400] text-[#505977] sm:text-[14px] md:text-[16px] ">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe, and design. Our Chelsea boutique became the hotbed
            for the London interior design community.
          </p>
        </div>

        <button className="md:w-[150px] w-full h-[48px] md:h-[56px] bg-[#F9F9F9] text-[#2A254B] font-[400] text-[1rem] leading-6 satoshi tracking-wider hover:bg-[#4a393978] mb-8">
          Get in touch
        </button>
      </div>

      {/* Image Div */}
      <div className="xl:w-1/2 w-full xl:px-0">
        <Image
          src="/studio/studio.png"
          alt="studio"
          height={603}
          width={720}
          className="w-full h-auto object-cover"
        />
      </div>
    </main>
  );
};

export default Studio;

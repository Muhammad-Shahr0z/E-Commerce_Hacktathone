import Image from "next/image";
import Link from "next/link";
interface Props {
  Heading: string;
}

const NewCeramic = (props: Props) => {
  console.log(props.Heading);

  return (
    <main
      className="flex flex-col items-center justify-center gap-y-2 px-5 md:px-0 h-fit xl:px-0"
      id="ceramic"
    >
      <h1 className="clashDisplay md:text-[2rem] text-[20px]  font-[400px] self-start md:self-center xl:self-start mb-3 md:mt-10 lg:mt-0">
        {props.Heading}
      </h1>
      {/* // Images Div */}
      <div className="grid grid-cols-2 xl:grid-cols-4 md:grid-cols-3 xl:gap-x-5  gap-5">
        {/* card 01 */}
        <Link href="/itemDetails">
          <div className="xl:w-[305px]  w-full lg:w-[310px] md:w-[220px] h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col">
            <Image
              src="/newcomics/1.png"
              height={375}
              width={305}
              alt="CHAIR"
              className="md:w-full h-auto transition-transform duration-300 ease-in-out hover:scale-95"
            ></Image>
            <div>
              <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
                The Dandy chair
              </p>
              <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
                £250
              </p>
            </div>
          </div>
        </Link>
        {/* card 02 */}
        <Link href="/itemDetails">
          <div className="xl:w-[305px] w-full lg:w-[310px]  md:w-[220px]   h-fit xl:h-[462px]] bg-white gap-[24px] flex flex-col">
            <Image
              src="/newcomics/3.png"
              height={375}
              width={305}
              alt="CHAIR"
              className="md:w-auto h-auto transition-transform duration-300 ease-in-out hover:scale-95"
            ></Image>
            <div>
              <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
                Rustic Vase Set
              </p>
              <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
                £155
              </p>
            </div>
          </div>
        </Link>

        {/* card 03 */}
        <Link href="/itemDetails">
          <div className="xl:w-[305px] w-full lg:w-[310px]  md:w-[220px]   h-fit xl:h-[462px]] bg-white gap-[24px] flex flex-col">
            <Image
              src="/newcomics/2.png"
              height={375}
              width={305}
              alt="CHAIR"
              className="md:w-auto h-auto transition-transform duration-300 ease-in-out hover:scale-95"
            ></Image>
            <div>
              <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
                The Silky Vase
              </p>
              <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
                £125
              </p>
            </div>
          </div>
        </Link>
        {/* card 04 */}
        <div className="xl:w-[305px] w-full lg:w-[310px]  md:w-[220px]  h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col">
          <Image
            src="/newcomics/4.png"
            height={375}
            width={305}
            alt="CHAIR"
            className="md:w-auto h-auto transition-transform duration-300 ease-in-out hover:scale-95"
          ></Image>
          <div>
            <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
              The Lucy Lamp
            </p>
            <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
              £399
            </p>
          </div>
        </div>

        {/* visible only medium screen  */}
        {/* card 05 */}
        <Link href="/itemDetails">
          <div className="xl:w-[305px] w-full lg:w-[310px]  md:w-[220px]  h-fit xl:h-[462px] bg-white gap-[24px] xl:hidden flex-col hidden md:flex">
            <Image
              src="/newcomics/5.png"
              height={375}
              width={305}
              alt="CHAIR"
              className="md:w-auto h-auto transition-transform duration-300 ease-in-out hover:scale-95"
            ></Image>
            <div>
              <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
                The Lucy Lamp
              </p>
              <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
                £399
              </p>
            </div>
          </div>
        </Link>

        {/* visible only medium screen  */}
        {/* card 06 */}
        <Link href="/itemDetails">
          <div className="xl:w-[305px] w-full lg:w-[310px]  md:w-[220px]  bg-white gap-[24px] xl:hidden flex-col hidden md:flex">
            <Image
              src="/newcomics/6.png"
              height={375}
              width={305}
              alt="CHAIR"
              className="md:w-auto h-auto transition-transform duration-300 ease-in-out hover:scale-95"
            ></Image>
            <div>
              <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
                The Lucy Lamp
              </p>
              <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
                £399
              </p>
            </div>
          </div>
        </Link>
      </div>
      <button className="md:w-[170px] w-full h-[56px] bg-[#F9F9F9] text-[#2A254B] font-[400] text-[1rem] leading-6 satoshi tracking-wider hover:bg-[#4a393978] mt-4">
        View collection
      </button>
    </main>
  );
};

export default NewCeramic;

import Image from "next/image";
import "./home.css";

const SectionTwo = () => {
  return (
    <div className="sec-two flex my-6 gap-4 items-center">
      <div className="img-container flex-1">
        <Image
          src="/car3.png"
          alt="car-range-rover"
          width={700}
          height={500}
          className="object-contain"
        />
      </div>
      <div className="container flex-1">
        <div className=" mb-5 ">
          <span className="text-gray-400 text-[15px] pb-2">
            Best Services !
          </span>
          <h1 className="text-[22px] font-bold text-start relative w-[70%]">
            Feel The Best Experience With Our Rentel Deals.
          </h1>
        </div>
        <div className="boxs flex flex-col items-start mt-[30px] gap-3">
          <div className="box flex gap-4 items-start">
            <div className="img">
              <Image
                src="/tagged.png"
                width={30}
                height={30}
                alt="Location Your car"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <span className="text-[19px] font-bold ">
                Best Prices Guarated
              </span>
              <p className="text-gray-400 text-[13px]">
                Find Lower Prices , We will Refund you 100% of the prices that
                you have Bayed
              </p>
            </div>
          </div>
          <div className="box flex gap-4 items-start">
            <div className="img">
              <Image
                src="/gear.png"
                width={30}
                height={30}
                alt="Location Your car"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <span className="text-[19px] font-bold ">Support 24/7</span>
              <p className="text-gray-400 text-[13px]">
                24/7 Customer Support, We support all customers
              </p>
            </div>
          </div>
          <div className="box flex gap-4 items-start">
            <div className="img">
              <Image
                src="/your-location.png"
                width={30}
                height={30}
                alt="Location Your car"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <span className="text-[19px] font-bold ">
                Deals With Every Budget.
              </span>
              <p className="text-gray-400 text-[13px]">
                Incridable prices with our customers , cars and hotel properties
                flites and all packages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;

import Image from "next/image";

const Steps = () => {
  return (
    <div className="steps py-8 my-8">
      <div className="container flex flex-col items-center justify-center gap-2">
        <span className="text-gray-400 text-[13px]">How It Work !</span>
        <h1 className="text-[22px] font-bold mb-5 text-center">
          Car-X Follwing Three Working Steps{" "}
        </h1>
        <div className="boxs flex gap-2 items-center xl:flex-row lg:flex-row md:flex-row flex-col">
          <div className="box flex flex-col gap-3 items-center justify-center">
            <div className="img">
              <Image
                src="/your-location.png"
                width={60}
                height={60}
                alt="Location Your car"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <span className="text-[19px] font-bold ">Chose a Location</span>
              <p className="text-gray-400 text-[13px]">
                See three Poupuler Hotels , Descounted Prices
              </p>
            </div>
          </div>
          <div className="box flex flex-col gap-3 items-center justify-center">
            <div className="img s-card">
              <Image
                src="/clapperboard.png"
                width={60}
                height={60}
                alt="Location Your car"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <span className="text-[19px] font-bold ">Pick Up Date</span>
              <p className="text-gray-400 text-[13px]">
                Pick to Chose and we will select three Hotels for you
              </p>
            </div>
          </div>
          <div className="box flex flex-col gap-3 items-center justify-center">
            <div className="img">
              <Image
                src="/reservation.png"
                width={60}
                height={60}
                alt="Location Your car"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <span className="text-[19px] font-bold ">Book Your Car</span>
              <p className="text-gray-400 text-[13px]">
                Chose Your Hotel after booking the car
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;

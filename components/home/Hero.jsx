import Image from "next/image";
import "./home.css";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="hero min-h-[100vh] relative">
      <div className="container flex gap-4 items-center justify-between flex-row py-10">
        <div className="flex-1">
          <h1 className="font-bold text-[34px] relative">
            Looking to save More In your Rental Car ?
          </h1>
          <p className="text-gray-500 py-4 pr-3">
            Descover Car-X Rentail Options in Egypt Select From a Range Of Car
            Options and Local spicial .
          </p>
          <div className="btns flex items-center gap-4 flex-col xl:flex-row md:flex-row">
            <div className="flex items-center gap-2 justify-between p-3 ">
              <Image
                src="/google-play.png"
                width={36}
                height={36}
                alt="apple"
                className="object-contain"
              />
              <div className="flex flex-col ">
                <span className="text-gray-500  text-[13px]">Get it From</span>
                <span className="text-[17px] font-bold">Google Play</span>
              </div>
            </div>
            <div className="flex items-center gap-2 justify-between p-3">
              <Image
                src="/apple-logo.png"
                width={36}
                height={36}
                alt="google"
              />
              <div className="flex flex-col">
                <span className="text-gray-500 text-[13px] ">
                  Download On The
                </span>
                <span className="text-[17px] font-bold">Apple Store</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-img relative flex-1">
          <Image
            src="/car.png"
            width={450}
            height={270}
            sizes="large"
            alt="car new"
            className="object-contain relative z-[2]"
          />
          <div className="card-orange absolute"></div>
          <div className="card-white absolute p-3">
            <div className="flex items-center gap-2">
              <Image
                src="/your-location.png"
                alt="location"
                width={20}
                height={20}
              />
              <span>Chose Location </span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/your-location.png"
                alt="location"
                width={20}
                height={20}
              />
              <span>Pick-Up Date</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/your-location.png"
                alt="location"
                width={20}
                height={20}
              />
              <span>Return Date</span>
            </div>
            <Link href="#Page" className="btn-blue">
              Get Start
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

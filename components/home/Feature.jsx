import Image from "next/image";
import "./home.css";
import {
  UilTagAlt,
  UilUsdCircle,
  UilCreditCard,
  UilAward,
  UilCommentQuestion,
  UilCarSideview,
} from "@iconscout/react-unicons";
const Feature = () => {
  return (
    <div className="feauter">
      <div className="container flex items-center gap-2">
        <div className="box flex-1 flex box-line-1 items-center  basis-[25%] flex-row xl:flex-col xl:gap-6 gap-1">
          <div className="small-box  flex flex-col  relative items-start justify-between xl:gap-4 gap-1">
            <UilTagAlt size="43" color="#fd6934" />
            <p className="font-semibold py-1">Complitive Prices</p>

            <img src="/line.png" alt="arrow" className="arrow-line absolute" />
          </div>
          <div className="small-box flex flex-col items-start relative justify-between xl:gap-4 gap-1">
            <UilUsdCircle size="43" color="#fd6934" />
            <p className="font-semibold py-1">Easer Rent On your Budget</p>
            <img src="/line.png" alt="arrow" className="arrow-line absolute" />
          </div>
          <div className="small-box flex flex-col relative items-start justify-between xl:gap-4 gap-1">
            <UilCreditCard size="43" color="#fd6934" />
            <p className="font-semibold py-1">Most Flexbel Payment</p>

            <img src="/line.png" alt="arrow" className="arrow-line absolute" />
          </div>
        </div>
        <div className="box flex-1 basis-[50%]">
          <Image
            style={{
              boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
              borderRadius: "50%",
              border: "1px solid var(--orange)",
              backgroundColor: "#eeeeee96",
            }}
            src="/5d7f51a-removebg-preview.png"
            alt="car model 2025"
            width={900}
            height={600}
            className="object-contain"
          />
        </div>
        <div className="box flex-1 flex items-center box-line-2  basis-[25%] flex-row xl:flex-col xl:gap-6 gap-1">
          <div className="small-box relative  flex flex-col  items-end justify-between xl:gap-4 gap-1">
            <UilAward size="43" color="#fd6934" />
            <p className="font-semibold py-1">The Best Expended</p>
            <img src="/line.png" alt="arrow" className="arrow-line absolute" />
          </div>
          <div className="small-box relative flex flex-col items-end justify-between xl:gap-4 gap-1">
            <UilCommentQuestion size="43" color="#fd6934" />
            <p className="font-semibold py-1">Raseded Assestent 24/7</p>
            <img src="/line.png" alt="arrow" className="arrow-line absolute" />
          </div>
          <div className="small-box relative flex flex-col items-end justify-between xl:gap-4 gap-1">
            <UilCarSideview size="43" color="#fd6934" />
            <p className="font-semibold py-1">Your Choise Of Mechen</p>
            <img src="/line.png" alt="arrow" className="arrow-line absolute" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

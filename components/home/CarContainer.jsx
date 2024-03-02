"use server";
import { ThreeDCardDemo } from "../animation/card3d";
import { catchData } from "@/utils";
const CarContainer = async () => {
  const data = await catchData(8);
  return (
    <div className="car-container">
      <div className="container flex items-center justify-center my-4 pb-4">
        <div className="car-heading flex flex-col gap-3 items-center">
          <span className="text-gray-400 text-[15px] pb-2">
            Best Services !
          </span>
          <h1 className="text-[29px] font-bold text-center relative w-[63%]">
            Explore Our Top Deal From Top - Rated Dealer !
          </h1>
        </div>
      </div>
      <div className="container">
        <ThreeDCardDemo data={data} />
      </div>
    </div>
  );
};

export default CarContainer;

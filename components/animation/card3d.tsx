"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  UilHeart,
  UilStreering,
  UilTachometerFast,
  UilPump,
} from "@iconscout/react-unicons";
import { CardBody, CardContainer, CardItem } from "./3d-card";

export function ThreeDCardDemo({ data }) {
  const [like, setLike] = useState(false);

  return (
    <div className="car-items">
      {data
        ? data.map((item, index) => {
            return (
              <CardContainer className="inter-var" key={index}>
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white capitalize"
                  >
                    {`${item.make}  ${item.model}`}
                  </CardItem>
                  <CardItem
                    as="div"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 flex items-center justify-between"
                  >
                    {like ? (
                      <UilHeart
                        size="43"
                        color="#eb1b1b"
                        className="cursor-pointer"
                        onClick={() => {
                          setLike(false);
                        }}
                      />
                    ) : (
                      <UilHeart
                        size="43"
                        color="#d7cac9"
                        className="cursor-pointer"
                        onClick={() => {
                          setLike(true);
                        }}
                      />
                    )}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={`/${index}.jpg`}
                      width="1000"
                      height={200}
                      className="h-60 w-full select-none object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex px-2 items-center justify-between py-3">
                    <span>3000 Gas</span>
                    <span className="uppercase">{item.class}</span>
                  </div>
                  <div className="flex justify-between items-center px-3 py-4 my-2 gap-2 border-b-[1px] border-gray-300 ">
                    <div className="flex items-center gap-2  ">
                      <UilStreering size="28" color="#d7cac9" />
                      <span>{item.combination_mpg * 30}K</span>
                    </div>
                    <div className="flex items-center gap-2  ">
                      <UilPump size="28" color="#d7cac9" />
                      <span>{item.drive}</span>
                    </div>
                    <div className="flex items-center gap-2  ">
                      <UilTachometerFast size="28" color="#d7cac9" />
                      <span>{item.combination_mpg * 2} m/s</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center my-2">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      More Details ⇛
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            );
          })
        : null}
    </div>
  );
}

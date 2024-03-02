"use client";

import "./style.css";
import { Accessories } from "@/constant/data";
import Link from "next/link";

const page = () => {
  return (
    <div className=" container " style={{ minHeight: "700px" }}>
      <div className="heading my-4">Accessories ◎</div>
      <div className="acc-container">
        {Accessories
          ? Accessories.map((item, index) => {
              return (
                <div className="product-card" key={index}>
                  <div className="image-container">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="details">
                    <h2>{item.name}</h2>
                    <p className="description">{item.details}</p>
                    <p className="size">
                      Size: <span>{item.size}</span>
                    </p>
                    <p className="price">${item.price}</p>
                    <div className="btn-container">
                      <Link href="#" rel="noreferrer">
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default page;

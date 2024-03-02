"use client";
import Link from "next/link";
import { links } from "@/constant/data";
import styles from "./header.module.css";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={styles.header}>
      {isOpen ? (
        <div className="fixed menu z-50 backdrop-blur-sm bg-black/30 top-0 left-0 w-full h-full  flex flex-col gap-[24px] justify-center">
          <div
            className={`${styles.closebtn} absolute top-[30px]`}
            onClick={() => {
              setOpen(false);
            }}
          >
            X
          </div>
          <div
            className={`flex items-center gap-[20px] flex-col font-bold text-white`}
          >
            {links.map((link, index) => (
              <Link
                href={link.url}
                key={index}
                onClick={(e) => {
                  e.target.parentNode.children.classList.remove("active");
                  e.target.classList.add("active");
                }}
              >
                <span className={styles.span}>{link.name}</span>
              </Link>
            ))}
          </div>
          <div
            className={`${styles.btns} flex items-center justify-center gap-[20px] capitalize`}
          >
            <button className="" style={{ color: "white" }}>
              Sign Up
            </button>
            <button>Sign In</button>
          </div>
        </div>
      ) : null}
      <div className="container flex items-center gap-[15px] py-3 justify-between">
        <div className={`${styles.logo} basis-[30%]`}>
          <Link href="/">
            <h1 className=" relative">
              Car-X
              <span className="p2 text-orange-600 font-bold pl-[-10px] absolute">
                .
              </span>
            </h1>
          </Link>
        </div>
        <div
          className={`xl:flex items-center gap-[20px] hidden ${styles.links} basis-[40%] flex-1`}
        >
          {links.map((link, index) => (
            <Link href={link.url} key={index}>
              <span className={styles.span}>{link.name}</span>
            </Link>
          ))}
        </div>
        <div
          className={` xl:basis-[20%] xl:flex hidden ${styles.btns} flex items-center gap-[20px] capitalize`}
        >
          <button>Sign Up</button>
          <button>Sign In</button>
        </div>
        <div className="xl:hidden visible z-30">
          <Image
            src="/menu.svg"
            alt="menu icon"
            width={20}
            height={20}
            className="cursor-pointer z-[900]"
            onClick={() => setOpen(!isOpen)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

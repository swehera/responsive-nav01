"use client";
import { motion } from "framer-motion";
import { RiMenu3Line } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  //   const menuBarFunction = () => {
  //     console.log(isOpen);
  //   };
  console.log(isOpen);

  return (
    <nav>
      <div className=" flex justify-between py-3 px-4 text-white bg-slate-800">
        <Link href={"/"} className=" text-2xl font-bold">
          Logo
        </Link>
        <div className=" hidden md:flex">
          <Link href={"/"} className=" mx-2">
            Home
          </Link>
          <Link href={"/about"} className=" mx-2">
            About
          </Link>
          <Link href={"/blog"} className=" mx-2">
            Blog
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <p className=" text-3xl ">X</p>
            ) : (
              <RiMenu3Line className=" text-3xl font-bold" />
            )}
          </button>
        </div>
      </div>
      {isOpen ? (
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            // ease: "easeIn",
            duration: 1,
          }}
          className=" md:hidden bg-slate-400 h-screen w-screen fixed top-15 left-0 z-20"
        >
          <ul className=" flex flex-col items-center">
            <li className=" my-1">
              <Link href={"/"} onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className=" my-1">
              <Link href={"/about"}>About</Link>
            </li>
            <li className=" my-1">
              <Link href={"/blog"}>Blog</Link>
            </li>
          </ul>
        </motion.div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;

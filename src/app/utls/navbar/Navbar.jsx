'use client'
import Link from "next/link";
import ActiveNavLink from "../ActiveLink/ActiveNavLink";
import { useState } from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
import nav from "./nav.module.css";
import Image from "next/image";
import { GetUser, removeCookie } from "../cookie/Cookie";

const Navbar = () => {
  const [navState, setNavState] = useState(false)
  let [user, setUser] = GetUser()
  const logOut = () => {
    removeCookie('accessToken')
    setUser({})
  }
  const navLinks = [
    {
      to: "/",
      title: "Home",
      id: 1,
    },
    {
      to: "/apps",
      title: "Apps",
      id: 3,
    },
    {
      to: "/games",
      title: "Games",
      id: 4,
    },
    {
      to: "/blog",
      title: "Blog",
      id: 6,
    },
    {
      to: "/contact",
      title: "Contact",
      id: 5,
    },

  ];
  const toggleNav = () => setNavState(!navState)

  return (
    <>
      <nav className="h-16 w-full bg-white fixed top-0 flex justify-between items-center px-4 md:px-10 shadow z-[111]">
        <div className="flex gap-10  w-auto items-center justify-center">
          <span className="font-semibold text-black text-xl md:text-2xl select-none cursor-pointer">
            <Link href={"/"}>
              <Image alt="Tooltip logo" width={96} height={40} src={'/logo.png'} className="h-10 w-24 bg-white "></Image>
            </Link>
          </span>
          <span className=" md:flex gap-4 hidden">
            {navLinks.map((ele) => (
              <ActiveNavLink to={ele.to} key={ele.id}>
                {ele.title}
              </ActiveNavLink>
            ))}
            <Link href={'/search'} click={toggleNav} key={200}>
             🔍 
            </Link>
          </span>
        </div>
        <div className=" gap-2 hidden md:flex">
          {user?.email ? <div className="flex items-center gap-2"> <ActiveNavLink to={"/dashboard"}>Dashboard</ActiveNavLink> <button className="bg-gray-100 text-black px-3 py-1 rounded" onClick={logOut}>Log Out</button></div> : <> <ActiveNavLink to={"/login"}>Login</ActiveNavLink>
            <ActiveNavLink to={"/register"}>Register</ActiveNavLink></>}


        </div>
        {/* Navbar toggler for small screen -- below  */}
        <div
          onClick={toggleNav}
          className={`h-10 w-10 cursor-pointer rounded  flex gap-[3px] bg-gray-100 p-1 items-center justify-center flex-col md:hidden fixed right-6 top-2 active:scale-90 duration-100 z-50`}
        >
          <div
            className={`h-[6px] bg-black w-full duration-200 rounded-[2px] ${navState ? nav.active : nav.default
              }`}
          ></div>
          <div
            className={`h-[6px] bg-black w-full duration-200 rounded-[2px] ${navState ? nav.base : nav.baseDefault
              }`}
          ></div>
          <div
            className={`h-[6px] bg-black w-full duration-200 rounded-[2px] ${navState ? nav.active2 : nav.default2
              }`}
          ></div>
        </div>

      </nav >
      <div className="h-16 w-full bg-white"></div>
      {/* //Small Screen  sidebar -- below */}
      <div
        onClick={() => setNavState(!navState)}
        title="nav-links"
        className={`min-h-screen w-full bg-gray-400/50 fixed top-16 z-[110] ${navState ? "block" : "invisible pointer-events-none"
          }`}
      >
        <div
          onClick={(e) => e.preventDefault()}
          className={`fixed top-16 duration-200  w-full overflow-y-scroll sm:w-80 bg-white h-screen flex flex-col gap-3 p-3 text-center ${navState ? "right-0" : "-right-full sm:-right-80"
            }`}
        >
          {navLinks.map((ele) => (
            <ActiveLink to={ele.to} click={toggleNav} key={ele.id}>
              {ele.title}
            </ActiveLink>
          ))}
          <ActiveLink to={'/search'} click={toggleNav} key={200}>
            🔍  Search
          </ActiveLink>
          <div
            className={` flex gap-2 flex-col`}
          >
            {user?.email ? <> <ActiveLink to={"/dashboard"}>Dashboard</ActiveLink> <button className="bg-gray-100 text-black px-3 py-2 rounded font-semibold shadow-inner" onClick={logOut}>Log Out</button></> : <> <ActiveLink to={"/login"}>Login</ActiveLink>
              <ActiveLink to={"/register"}>Register</ActiveLink></>}
          </div>
        </div>
      </div>
    </>
  );
};


export default Navbar;

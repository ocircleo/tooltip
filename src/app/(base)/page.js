import Search from "@/app/utls/searchbar/Search";
import More from "./More";
import App from "../utls/app/App";
import { Suspense } from "react";

let apps = [...new Array(24).keys()];
export default function Home() { 
  return (
    <div   className=" min-h-screen h-full rounded flex items-center flex-col">
      <h1 className="text-xl text-center font-semibold ">
        Welcome to Tooltip Store <br />{" "}
        <span className="text-sm font-semibold text-gray-600">
          {" "}
          An website for Hosting files and Software
        </span>
      </h1>
      <Suspense>
      <Search text={""}></Search>
      </Suspense>
      <div className="w-full md:w-5/6 px-2 h-auto">
        <h2 className="text-lg py-3">Popular apps & games</h2>
        <div className="px-3 sm:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 ">
          {apps.map((ele) => (
            <App key={ele}></App>
          ))}
        </div>
      </div>
      <More></More>
      {/* <Loading></Loading>

      <span className="text-red-500 font-semibold">
        Page under construction
      </span>

      <ul>
        <li className="text-lg pt-12">Pages:</li>
        <li>
          <Link
            href={"/login"}
            className="text-md font-semibold underline text-blue-500"
          >
            login
          </Link>
        </li>
        <li>
          <Link
            href={"/register"}
            className="text-md font-semibold underline text-blue-500"
          >
            register
          </Link>
        </li>
        <li>
          <Link
            href={"/dashboard"}
            className="text-md font-semibold underline text-blue-500"
          >
            Dashboard
          </Link>
        </li>
      </ul> */}
    </div>
  );
}

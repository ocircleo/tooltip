import Link from "next/link";
import React from "react";

const Detail = ({ params }) => {
  let appName = params.name;
  return (
    <div className="w-full p-2 md:w-4/5 mx-auto">
      <h1 className="text-2xl font-semibold capitalize">{appName}</h1>
      <p className="text-sm text-gray-500 font-semibold">
        More versions: <Link href={"/"}></Link>, Windows
      </p>
      <button className="bg-indigo-400 text-white font-semibold px-5 py-2 mt-8 active:scale-105 duration-100">
        Download
      </button>
      <p className="text-sm capitalize text-gray-500">
        (for windows), version: 1.0.1.0
      </p>
      <h2 className="text-xl py-3">About app</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        voluptates provident obcaecati illum, sit, et quibusdam quaerat deserunt
        earum veritatis repellendus id dignissimos qui similique, consequatur
        totam? Magnam, at fuga. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Rerum voluptates provident obcaecati illum, sit, et
        quibusdam quaerat deserunt earum veritatis repellendus id dignissimos
        qui similique, consequatur totam? Magnam, at fuga.
      </p>
    </div>
  );
};

export default Detail;

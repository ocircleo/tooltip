import Link from "next/link";
import React, { Suspense } from "react";
import ErrorPage from "./error";

const Detail = async ({ params }) => {
  let appName = params.name;
  let res, result;
  res = await fetch(`http://localhost:5000/get/app-detail/${appName}`);
  result = await res.json();
  let { name, icon, description, os, version, organization,org_url,file_url } =
    await result?.result;
  if (result.error) return <Suspense><ErrorPage></ErrorPage></Suspense> ;
  return (
    <div className='w-full bg-white min-h-screen'>
    <div className="w-full p-2 md:w-4/6 mx-auto">
        <div className='flex flex-col md:flex-row justify-between'>
            <div className='flex gap-5 items-center '>
                <img src={icon} alt="icon" className='h-28 w-28 rounded bg-gray-200' />
                <div >
                    <h1 className="text-2xl font-semibold capitalize">{name}</h1>
                    <Link href={org_url} target='_blank' className='text-green-600 font-semibold'>{organization}</Link>
                    <div className='flex gap-2 items-center text-gray-600'>
                        <p>4.5 ⭐</p> <p className='text-green-600'>|</p> <p>1k downloads</p>

                    </div>

                </div>

            </div>
            <div className='flex flex-col'>
                <Link href={file_url} target='_blank' className="bg-indigo-400 text-white font-semibold px-5 py-2 mt-8 active:scale-105 duration-100 text-center">
                    Download
                </Link>
                <p className="text-sm capitalize text-gray-500 pt-1">
                    for <span className='text-black font-semibold'>{os}</span>, version: {version}
                </p>

            </div>

        </div>
        <h2 className="text-xl py-3">About app</h2>
        <p>
            {description}
        </p>
    </div>
</div>
  );
};

export default Detail;

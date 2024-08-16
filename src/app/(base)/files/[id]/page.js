import React from "react";
import Link from "next/link";

const page = async ({ params }) => {
  let id = params.id;
  let res = await fetch(`https://tooltip-backend.vercel.app/get/file-detail/${id}`, {
    cache: "no-cache",
  });
  let result = await res.json();
  let { url, publish_date, size, state, type } = result?.result;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center py-4">Download File</h2>
      <h3 className="text-2xl font-semibold text-red-500 text-center">
        {state != "published"
          ? "File not published or still being processed by the server"
          : ""}
      </h3>

      <div className="px-2 flex gap-2 items-center justify-center flex-col">
        <div className="bg-gray-100 flex  gap-4 py-2 px-5 rounded w-full md:w-auto flex-wrap">
          <p>
            Size: {size > 1024 ? (size / 1024).toFixed(2) + "MB" : size + " KB"}
          </p>{" "}
          <span className="text-blue-500">|</span>
          <p>Type: {type}</p> <span className="text-blue-500">|</span>
          <p>Publish Date: {publish_date.split("T")[0]}</p>
        </div>
        <Link className="bg-blue-500 text-white font-semibold rounded px-4 py-1 text-xl my-2" href={url} target="_blank" download={url}>Download</Link>
      <p className="text-gray-400">Description not available</p>
      </div>
    </div>
  );
};

export default page;

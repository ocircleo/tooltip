"use client";
import { useSearchParams } from "next/navigation";
import Search from "@/app/utls/searchbar/Search";
import Link from "next/link";
import { Suspense } from "react";
const SearchPage = () => {
  const params = useSearchParams();
  let text = params.get("text");
  return (
    <div className="w-full px-3 py-1 lg:w-5/6 mx-auto">
      <p className="text-sm font-semibold text-gray-600  border-s-2 ps-2 italic">
        <Link href={"/"}>home</Link> /{" "}
        <Link className="text-indigo-300" href={"/search"}>
          search
        </Link>
      </p>
        <Search text={text}></Search>
      <p className="text-gray-600 text-sm">
        Results for: &quot; <i> {text} &quot;</i>
      </p>
    </div>
  );
};
const page = () => {
  return (
    <Suspense>
      <SearchPage></SearchPage>
    </Suspense>
  );
};
export default page;

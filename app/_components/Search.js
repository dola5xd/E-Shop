"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Search() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  function handelSearch(e) {
    e.preventDefault();
    console.log("search: ", search);
    router.replace(`/search?query=${search}`);
  }

  return (
    <form className="relative w-1/3" onSubmit={(e) => handelSearch(e)}>
      <input
        type="text"
        placeholder="Search for products..."
        className="bg-primary-darkWhite px-7 rounded-3xl text-[1.2rem] pl-10 py-2 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Image
        src="/assets/Svg/search-icon.svg"
        width="20"
        height="20"
        alt="search-icon"
        className="absolute top-1/2 -translate-y-1/2 left-3 cursor-pointer"
        onClick={handelSearch}
      />
    </form>
  );
}

export default Search;

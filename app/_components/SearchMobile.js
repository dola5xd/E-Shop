"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchMobile() {
  const router = useRouter();
  const [showInput, setShowInput] = useState(false);
  const [search, setSearch] = useState("");

  function handelSearch(e) {
    e.preventDefault();
    router.replace(`/search?query=${search}`);
    setShowInput(false);
  }

  return (
    <form className="lg:hidden" onSubmit={(e) => handelSearch(e)}>
      {" "}
      <Image
        src="/assets/Svg/search-icon.svg"
        width="25"
        height="25"
        alt="search-icon"
        className="cursor-pointer"
        onClick={() => setShowInput((pre) => !pre)}
      />
      {showInput && (
        <>
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-primary-darkWhite absolute translate-y-10 left-1/2 -translate-x-1/2 px-7 rounded-3xl text-lg pl-10 py-2 w-[75%] z-40"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Image
            src="/assets/Svg/search-icon.svg"
            width="25"
            height="25"
            alt="search-icon"
            className="absolute top-[15%] translate-y-3 translate-x-full left-5 cursor-pointer z-40"
            onClick={handelSearch}
          />
        </>
      )}
    </form>
  );
}

export default SearchMobile;

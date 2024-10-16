"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signOutAction } from "../_lib/actions";

function Account({ fullname }) {
  const session = useSession();

  const [openMenu, setMenu] = useState(false);

  if (!session.data || !fullname)
    return (
      <Link href="/login">
        <Image
          src={"/assets/Svg/Profile.svg"}
          alt="profile-icon"
          width="25"
          height="25"
        />
      </Link>
    );

  const { image } = session.data?.user;

  return (
    <div className=" relative">
      <button
        className="flex flex-col items-center gap-1 "
        onClick={() => setMenu((prev) => !prev)}
      >
        <Image
          src={image}
          alt="profile-icon"
          width="35"
          height="35"
          className="rounded-full"
        />
        <span className="font-bold text-sm">
          {fullname?.split(" ").at(0) || fullname}
        </span>
      </button>
      {openMenu && (
        <ul className="bg-black/60 text-white text-base font-bold left-0 md:left-1/2 -translate-x-1/2 absolute z-10 py-4 px-4 flex flex-col rounded gap-3 [&>li>a]:duration-500 [&>li>button]:duration-500 hover:[&>li>a]:text-black/80 hover:[&>li>button]:text-black/80">
          <li onClick={() => setMenu(false)}>
            <Link href="/account">Account</Link>
          </li>
          <li>
            <button
              onClick={async () => {
                await signOutAction();
                setMenu(false);
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Account;

import Link from "next/link";
import { Integralcf } from "../layout";
import Mark from "../_components/Mark";

function page() {
  return (
    <div
      className={`py-20 px-10 flex flex-col items-center gap-4 md:gap-7 ${Integralcf.className}`}
    >
      <span>
        <Mark />
      </span>
      <h1 className="text-2xl md:text-4xl font-bold">
        Thank you for your pruchere!
      </h1>
      <p className="text-base text-balance md:text-3xl font-bold">
        See more{" "}
        <Link href="/collection" className="underline">
          products
        </Link>{" "}
        and have fun with us!
      </p>
    </div>
  );
}

export default page;

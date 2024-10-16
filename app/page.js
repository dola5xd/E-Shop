import Image from "next/image";
import { Suspense } from "react";
import { Integralcf } from "./layout";
import Skeleton from "react-loading-skeleton";
import herpImage from "@/public/assets/Images/homeBanner.png";
import Star from "./_components/Star";
import BrandsLine from "./_components/BrandsLine";
import NewArrival from "./_components/NewArrival";
import TopSelling from "./_components/TopSelling";
import SliderComponent from "./_components/SliderComponent";
import Link from "next/link";
import CollectionCatogry from "./_components/CollectionCatogry";
import { getRating } from "./_lib/OurApis";

async function page() {
  const ratings = await getRating();
  return (
    <main>
      <section className="flex items-center justify-between bg-primary-darkWhite h-full pt-10 sm:pt-0 sm:px-20 overflow-x-hidden flex-col sm:flex-row">
        <div className="flex flex-col items-start gap-7 flex-1 pl-3 sm:pl-0">
          <h1
            className={`${Integralcf.className} text-2xl sm:text-5xl text-balance `}
          >
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-primary-Black text-opacity-60 font-normal text-balance text-sm sm:text-base">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link
            href="/collection"
            className="w-full flex items-center justify-center sm:block"
          >
            <button className="bg-primary-Black py-3 px-20 text-primary-White font-bold rounded-full relative hover:bg-primary-darkWhite hover:text-primary-Black duration-500 border border-primary-Black  ">
              Shop Now
            </button>
          </Link>

          <div className=" flex gap-y-3 sm:gap-7 items-center justify-center sm:justify-normal w-full flex-wrap sm:flex-nowrap [&>span]:w-1/2 [&>span]:border-r-2 [&>span]:border-r-primary-Black [&>span]:border-opacity-10 [&>span:nth-child(3)]:border-0 [&>span:nth-child(2)]:border-r-0 sm:[&>span:nth-child(2)]:border-r-2 [&>span]:pl-3 [&>span]:px-0 sm:[&>span]:pr-5 [&>span>h3]:text-2xl sm:[&>span>h3]:text-5xl [&>span>h3]:font-bold [&>span>p]:text-sm sm:[&>span>p]:text-lg sm:[&>span>p]:text-nowrap">
            <span>
              <h3>200+</h3>
              <p>International Brands</p>
            </span>
            <span>
              <h3>2,000+</h3>
              <p>High-Quality Products</p>
            </span>
            <span>
              <h3>30,000+</h3>
              <p>Happy Customers</p>
            </span>
          </div>
        </div>
        <div className="relative">
          <Star className="absolute right-0 top-0 sm:top-[15%] scale-75 sm:scale-100" />
          <Image
            src={herpImage}
            placeholder="blur"
            className="object-cover"
            alt="Men and woman with amazing clothes from our store"
          />
          <Star className="absolute bottom-[40%] scale-50 sm:scale-100" />
        </div>
      </section>
      <BrandsLine />
      <section className="py-20 sm:py-32 sm:my-10 sm:px-20 flex flex-col gap-7 border-b-2 border-primary-darkWhite">
        <h1
          className={`${Integralcf.className} text-center text-3xl sm:text-5xl  `}
        >
          NEW
          <span> ARRIVALS</span>
        </h1>
        <Suspense
          fallback={
            <Skeleton
              count={4}
              containerClassName="flex gap-7 flex-col md:flex-row items-center"
              className="min-h-[260px] rounded-xl"
            />
          }
        >
          <NewArrival />
        </Suspense>
      </section>
      <section className="py-20 sm:py-32 sm:my-10 sm:px-20 flex flex-col gap-7 border-b-2 border-primary-darkWhite">
        <h1
          className={`${Integralcf.className} text-center text-3xl sm:text-5xl `}
        >
          top
          <span> selling</span>
        </h1>
        <Suspense
          fallback={
            <Skeleton
              count={4}
              containerClassName="w-full h-full flex gap-7"
              className="min-h-[260px] rounded-xl"
            />
          }
        >
          <TopSelling />
        </Suspense>
      </section>
      <CollectionCatogry />
      <section className="slider-container overflow-x-hidden py-20 sm:py-32 ">
        <h1
          className={`text-3xl sm:text-5xl font-bold ${Integralcf.className} mb-20 pl-5 sm:pl-20`}
        >
          OUR HAPPY CUSTOMERS
        </h1>
        <Suspense
          fallback={
            <Skeleton
              count={3}
              containerClassName="flex gap-7 flex-col md:flex-row items-center"
              className="min-h-[200px]"
            />
          }
        >
          <SliderComponent ratings={ratings} />
        </Suspense>
      </section>
    </main>
  );
}

export default page;

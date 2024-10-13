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
import { auth } from "./_lib/Auth";

async function page() {
  const ratings = await getRating();
  const session = await auth();
  return (
    <>
      <main>
        <section className="flex items-center just  ify-between bg-primary-darkWhite h-full px-20 overflow-x-hidden">
          <div className="flex flex-col items-start gap-7 flex-1">
            <h1 className={`${Integralcf.className} text-5xl text-balance `}>
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-primary-Black text-opacity-60 font-normal text-balance text-[16px] leading-[22px]">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            {session ? (
              <Link href="/collection">
                <button className="bg-primary-Black py-3 px-20 text-primary-White font-bold rounded-full relative hover:bg-primary-darkWhite hover:text-primary-Black duration-500 border border-primary-Black  ">
                  Shop Now
                </button>
              </Link>
            ) : (
              <Link href="/login">
                <button className="bg-primary-Black py-3 px-20 text-primary-White font-bold rounded-full relative hover:bg-primary-darkWhite hover:text-primary-Black duration-500 border border-primary-Black  ">
                  Login and Shop Now
                </button>
              </Link>
            )}
            <div className=" flex gap-7 items-center [&>span]:border-r-2 [&>span]:border-r-primary-Black [&>span]:border-opacity-10 [&>span:nth-child(3)]:border-0 [&>span]:pr-5 [&>span>h3]:text-[3rem] [&>span>h3]:font-bold [&>span>p]:text-[1.2rem]">
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
            <Star className="absolute right-0 top-[15%]" />
            <Image
              src={herpImage}
              placeholder="blur"
              className="object-cover"
              alt="Men and woman with amazing clothes from our store"
            />
            <Star className="absolute bottom-[40%] " />
          </div>
        </section>
        <BrandsLine />
        <section className="py-32 my-10 px-20 flex flex-col gap-7 border-b-2 border-primary-darkWhite">
          <h1 className={`${Integralcf.className} text-center text-5xl  `}>
            NEW
            <span className="before-line">ARRIVALS</span>
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
            <NewArrival />
          </Suspense>
        </section>
        <section className="py-32 my-10 px-20 flex flex-col gap-7 border-b-2 border-primary-darkWhite">
          <h1 className={`${Integralcf.className} text-center text-5xl  `}>
            top
            <span className="before-line">selling</span>
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
        <section className="slider-container overflow-x-hidden py-32 ">
          <h1
            className={`text-5xl font-bold ${Integralcf.className} mb-20 pl-20`}
          >
            OUR HAPPY CUSTOMERS
          </h1>
          <Suspense
            fallback={
              <Skeleton
                count={3}
                containerClassName="flex gap-7 items-center"
                className="min-h-[200px]"
              />
            }
          >
            <SliderComponent ratings={ratings} />
          </Suspense>
        </section>
      </main>
    </>
  );
}

export default page;

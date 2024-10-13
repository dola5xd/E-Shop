import Image from "next/image";
import { Integralcf } from "../layout";
import Link from "next/link";

function CollectionCatogry() {
  return (
    <section className="py-32 my-10 px-20 border-b-2 border-primary-darkWhite">
      <div className="bg-primary-darkWhite rounded-lg py-7 px-20  flex flex-col gap-7">
        <h1 className={`${Integralcf.className} text-center text-5xl py-4`}>
          BROWSE BY dress STYLE
        </h1>
        <div className="flex flex-col gap-5 ">
          <div className="flex items-center gap-10 [&>a>div]:h-[290px] ">
            <Link href="/collection?style=casual" className="w-[410px]">
              <div className="relative w-[410px] cursor-pointer hover:scale-105 duration-500">
                <Image
                  src="/assets/Images/casual-bg.png"
                  fill
                  alt="casual men"
                  className="object-cover object-right rounded-lg"
                />
                <h1 className="text-primary-Black relative text-4xl font-bold py-7 px-10">
                  Casual
                </h1>
              </div>
            </Link>
            <Link href="/collection?style=formal" className="flex-1">
              <div className="relative cursor-pointer hover:scale-105 duration-500">
                <Image
                  src="/assets/Images/formal-bg.png"
                  fill
                  alt="formal men"
                  className="object-cover object-right rounded-lg"
                />
                <h1 className="text-primary-Black relative text-4xl font-bold py-7 px-10">
                  Formal
                </h1>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-10 [&>a>div]:h-[290px]">
            <Link href="/collection?style=party" className="flex-1">
              <div className="relative cursor-pointer hover:scale-105 duration-500">
                <Image
                  src="/assets/Images/party-bg.png"
                  fill
                  alt="girl with wonderful dress"
                  className="object-cover object-right rounded-lg"
                />
                <h1 className="text-primary-Black relative text-4xl font-bold py-7 px-10">
                  Party
                </h1>
              </div>{" "}
            </Link>
            <Link href="/collection?style=gym" className="w-[410px]">
              <div className="relative cursor-pointer hover:scale-105 duration-500">
                <Image
                  src="/assets/Images/gym-bg.png"
                  fill
                  alt="gym guy with muscles"
                  className="object-cover object-right rounded-lg"
                />
                <h1 className="text-primary-Black relative text-4xl font-bold py-7 px-10">
                  Gym
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CollectionCatogry;

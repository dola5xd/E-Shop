import Image from "next/image";
import versace from "@/public/assets/Images/versace-brand.png";
import zara from "@/public/assets/Images/zara-brand.png";
import gucci from "@/public/assets/Images/Gucci-brand.png";
import prada from "@/public/assets/Images/prada.png";
import calvin from "@/public/assets/Images/calvin-brand.png";

function BrandsLine() {
  return (
    <div className="w-full bg-primary-Black flex justify-center gap-7 sm:justify-between items-center flex-wrap px-5 py-10 sm:gap-10 sm:py-10 sm:px-20 pointer-events-none">
      <div className="w-[117px] sm:w-[166px] relative h-[24px] sm:h-[35px]">
        <Image src={versace} alt="versace logo" fill />
      </div>
      <div className="w-[64px] sm:w-[97px] relative h-[27px] sm:h-[35px]">
        <Image src={zara} fill alt="zara logo" />
      </div>
      <div className="w-[109px] sm:w-[156px] relative h-[26px] sm:h-[35px]">
        <Image src={gucci} fill alt="gucci logo" />
      </div>
      <div className="w-[127px] sm:w-[194px] relative h-[21px] sm:h-[35px]">
        <Image src={prada} fill alt="prada logo" />
      </div>
      <div className="w-[135px] sm:w-[208px] relative h-[22px] sm:h-[35px]">
        <Image src={calvin} fill alt="calvin logo" />
      </div>
    </div>
  );
}

export default BrandsLine;

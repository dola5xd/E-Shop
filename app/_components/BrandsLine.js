import Image from "next/image";
import versace from "@/public/assets/Images/versace-brand.png";
import zara from "@/public/assets/Images/zara-brand.png";
import gucci from "@/public/assets/Images/Gucci-brand.png";
import prada from "@/public/assets/Images/prada.png";
import calvin from "@/public/assets/Images/calvin-brand.png";

function BrandsLine() {
  return (
    <div className="w-full bg-primary-Black flex justify-center gap-7 xl:justify-between items-center flex-wrap px-5 py-10 xl:gap-10 xl:py-10 xl:px-20 pointer-events-none">
      <div className="w-[117px] xl:w-[166px] relative h-[24px] xl:h-[35px]">
        <Image src={versace} alt="versace logo" fill />
      </div>
      <div className="w-[64px] xl:w-[97px] relative h-[27px] xl:h-[35px]">
        <Image src={zara} fill alt="zara logo" />
      </div>
      <div className="w-[109px] xl:w-[156px] relative h-[26px] xl:h-[35px]">
        <Image src={gucci} fill alt="gucci logo" />
      </div>
      <div className="w-[127px] xl:w-[194px] relative h-[21px] xl:h-[35px]">
        <Image src={prada} fill alt="prada logo" />
      </div>
      <div className="w-[135px] xl:w-[208px] relative h-[22px] xl:h-[35px]">
        <Image src={calvin} fill alt="calvin logo" />
      </div>
    </div>
  );
}

export default BrandsLine;

import Image from "next/image";
import versace from "../../public/assets/images/versace-brand.png";
import zara from "../../public/assets/images/zara-brand.png";
import gucci from "../../public/assets/images/Gucci-brand.png";
import prada from "../../public/assets/images/prada.png";
import calvin from "../../public/assets/images/calvin-brand.png";

function BrandsLine() {
  return (
    <div className="w-full bg-primary-Black flex justify-between items-center gap-10 py-10 px-20 pointer-events-none">
      <div className="w-[166px] relative h-[35px]">
        <Image src={versace} alt="versace logo" fill />
      </div>
      <div className="w-[97px] relative h-[35px]">
        <Image src={zara} fill alt="zara logo" />
      </div>
      <div className="w-[156px] relative h-[35px]">
        <Image src={gucci} fill alt="gucci logo" />
      </div>
      <div className="w-[194px] relative h-[35px]">
        <Image src={prada} fill alt="prada logo" />
      </div>
      <div className="w-[208px] relative h-[35px]">
        <Image src={calvin} fill alt="calvin logo" />
      </div>
    </div>
  );
}

export default BrandsLine;

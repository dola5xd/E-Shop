import Image from "next/image";


function BrandsLine() {
  return (
    <div className="w-full bg-primary-Black flex justify-between items-center gap-10 py-10 px-20 pointer-events-none">
      <div className="w-[166px] relative h-[35px]">
        <Image src="../../public/assets/images/versace-brand.png" alt="versace logo" fill />
      </div>
      <div className="w-[97px] relative h-[35px]">
        <Image src="../../public/assets/images/zara-brand.png" fill alt="zara logo" />
      </div>
      <div className="w-[156px] relative h-[35px]">
        <Image src="../../public/assets/images/Gucci-brand.png" fill alt="gucci logo" />
      </div>
      <div className="w-[194px] relative h-[35px]">
        <Image src="../../public/assets/images/prada-brand.png" fill alt="prada logo" />
      </div>
      <div className="w-[208px] relative h-[35px]">
        <Image src="../../public/assets/images/calvin-brand.png" fill alt="calvin logo" />
      </div>
    </div>
  );
}

export default BrandsLine;

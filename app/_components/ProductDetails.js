import StarContainer from "@/app/_components/StarContainer";
import AddToCart from "@/app/_components/AddToCart";
import Image from "next/image";
import { Integralcf } from "@/app/layout";
import { auth } from "../_lib/Auth";

async function ProductDetails({ data }) {
  const session = await auth();
  const { title, description, price, images, rating, inStock, colors } = data;

  const colorsCodes = colors.split(",");

  return (
    <div className="flex flex-col xl:xflex-row xl:xgap-20 h-full xl:xjustify-between">
      <div className="relative xl:xflex-1 w-full aspect-square xl:xh-[700px] rounded-lg">
        <Image
          src={images}
          alt={description}
          fill
          className="object-cover object-center rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-4 xl:xgap-7 flex-1 py-10">
        <h1 className={`${Integralcf.className} text-2xl xl:xtext-4xl`}>
          {title}
        </h1>
        <StarContainer rating={rating} showRating={true} />
        <h3 className="font-bold text-3xl">$ {price}</h3>
        <p className="text-primary-Black/60 text-sm xl:xtext-base">
          {description}
        </p>
        <hr className="h-[2px] w-full bg-primary-darkWhite" />
        <div className="flex items-center gap-4">
          <h3 className="text-lg">Colors: </h3>
          {colorsCodes.map((code, i) => (
            <span
              key={i}
              className="h-[25px] w-[25px] rounded-full border border-black/60"
              style={{ backgroundColor: code }}
            ></span>
          ))}
        </div>
        <hr className="h-[2px] w-full bg-primary-darkWhite" />
        <AddToCart isLogedIn={session === null ? false : true} data={data} />
      </div>
    </div>
  );
}

export default ProductDetails;

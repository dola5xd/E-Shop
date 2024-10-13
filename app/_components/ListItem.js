import Image from "next/image";
import StarContainer from "./StarContainer";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";

function ListItem({ product }) {
  if (!product)
    return (
      <Skeleton
        count={4}
        containerClassName="w-full h-full flex gap-7"
        className="min-h-[260px] rounded-xl"
      />
    );
  const { title, Description, rating, price, images, id } = product;

  return (
    <div className="flex flex-col gap-7 w-[275px] h-[calc(275px_*_1.5)] text-start">
      <div className="relative w-full h-[275px] bg-primary-gray rounded-lg  duration-500 hover:[&>a>img]:scale-105 cursor-pointer">
        <Link href={`/product/${id}`}>
          <Image
            src={images}
            fill
            alt={String(Description)}
            className="object-cover object-center rounded-lg duration-500"
          />
        </Link>
      </div>
      <div className="text-primary-Black ">
        <h1 className="font-bold text-lg text-wrap">{title}</h1>
        <StarContainer rating={rating} />
        <span className="font-bold text-2xl">${price}</span>
      </div>
    </div>
  );
}

export default ListItem;

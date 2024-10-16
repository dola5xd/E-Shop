import ProductDetails from "@/app/_components/ProductDetails";
import SimilarProducts from "@/app/_components/SimilarProducts";
import { getProuduct } from "@/app/_lib/OurApis";
import { Integralcf } from "@/app/layout";
import Link from "next/link";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

export const revalidate = 0;

export async function generateMetadata({ params }) {
  const [data] = await getProuduct(params.id);

  const { title: productTitle } = data;
  return { title: productTitle };
}

const arrow = (
  <svg
    width="12"
    height="7"
    viewBox="0 0 12 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="-rotate-90"
  >
    <path
      d="M11.5306 1.53063L6.53063 6.53063C6.46095 6.60055 6.37816 6.65602 6.28699 6.69388C6.19583 6.73173 6.09809 6.75122 5.99938 6.75122C5.90067 6.75122 5.80293 6.73173 5.71176 6.69388C5.6206 6.65602 5.53781 6.60055 5.46813 6.53063L0.468128 1.53063C0.327232 1.38973 0.248077 1.19864 0.248077 0.999378C0.248077 0.80012 0.327232 0.609024 0.468128 0.468128C0.609025 0.327231 0.800121 0.248077 0.999378 0.248077C1.19864 0.248077 1.38973 0.327231 1.53063 0.468128L6 4.9375L10.4694 0.467503C10.6103 0.326607 10.8014 0.247452 11.0006 0.247452C11.1999 0.247452 11.391 0.326607 11.5319 0.467503C11.6728 0.608399 11.7519 0.799496 11.7519 0.998753C11.7519 1.19801 11.6728 1.38911 11.5319 1.53L11.5306 1.53063Z"
      fill="black"
    />
  </svg>
);

function CategoryType(category) {
  const categoryType = category.includes("Sneakers", 0)
    ? "Sneakers"
    : category.includes("Shorts", 0)
    ? "Shorts"
    : category.includes("Bottoms", 0)
    ? "Bottoms"
    : category.includes("Blouses", 0)
    ? "Blouses"
    : category.includes("Jackets", 0)
    ? "Jackets"
    : category.includes("Coats", 0)
    ? "Coats"
    : category.includes("Polo Shirts", 0)
    ? "Polo Shirts"
    : category.includes("T-Shirts", 0)
    ? "T-Shirts"
    : category.includes("Skirts", 0)
    ? "Skirts"
    : category.includes("Dresses", 0)
    ? "Dresses"
    : category.includes("Hoodies", 0)
    ? "Hoodies"
    : category.includes("Pants", 0)
    ? "Bottoms"
    : category.includes("Jeans", 0)
    ? "Bottoms"
    : category.includes("Shirts", 0)
    ? "Shirts"
    : "";
  return categoryType;
}

function productType(category) {
  const type =
    category.includes("Men's Clothing", 0) ||
    category.includes("Men's Clothes", 0)
      ? "Men"
      : "Women";
  return type;
}

async function page({ params }) {
  const [data] = await getProuduct(params.id);
  const type = productType(data.category);
  const categoryType = CategoryType(data.category);

  return (
    <div className="py-10 px-5 md:px-20 flex flex-col gap-7">
      <ul className="flex items-center gap-3 ">
        <li className="text-black/60">
          <Link href="/">Home</Link>
        </li>
        <span>{arrow}</span>
        <li className="text-black/60">
          <Link href="/collection">Shop</Link>
        </li>
        <span>{arrow}</span>
        <li className="text-black/60">
          <Link href={`/collection?Type=${type}`}>{type}</Link>
        </li>
        <span>{arrow}</span>
        <li className="text-black cursor-default">{categoryType}</li>
      </ul>
      <ProductDetails data={data} />
      <div className="flex flex-col items-center py-10 md:py-20 gap-3 md:gap-10">
        <h1 className={`${Integralcf.className} text-xl md:text-4xl`}>
          You might also like
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
          <SimilarProducts categoryType={categoryType} title={data.title} />
        </Suspense>
      </div>
    </div>
  );
}

export default page;

import Link from "next/link";
import { getByCatogry, getTopProuducts } from "../_lib/OurApis";
import ListItem from "./ListItem";

export const revalidate = 0;

async function SimilarProducts({ categoryType, title }) {
  const Products = await getByCatogry(categoryType, title);

  return (
    <>
      <div className=" flex flex-wrap items-center justify-center gap-7 lg:px-10 lg:py-10">
        {Products.map((product) => (
          <ListItem key={product.id} product={product} />
        ))}
      </div>
      <button className="bg-primary-Black py-3 px-20 text-primary-White font-bold rounded-full relative hover:bg-primary-darkWhite hover:text-primary-Black duration-500 border border-primary-Black my-7">
        <Link href="/collection">View All</Link>
      </button>{" "}
    </>
  );
}

export default SimilarProducts;

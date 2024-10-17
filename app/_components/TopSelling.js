import ListItem from "./ListItem";
import { getTopProuducts } from "../_lib/OurApis";
import Link from "next/link";

async function TopSelling() {
  const Products = await getTopProuducts();

  return (
    <div className=" flex flex-wrap items-center justify-center gap-7 px-10 py-10">
      <div className="flex items-center gap-7 flex-wrap justify-center">
        {Products.map((product) => (
          <ListItem key={product.id} product={product} />
        ))}{" "}
      </div>

      <Link href="/collection">
        <button className="bg-primary-Black py-3 px-20 text-primary-White font-bold rounded-full relative hover:bg-primary-darkWhite hover:text-primary-Black duration-500 border border-primary-Black my-7">
          View All
        </button>
      </Link>
    </div>
  );
}

export default TopSelling;

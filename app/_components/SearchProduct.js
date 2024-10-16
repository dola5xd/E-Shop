import Link from "next/link";
import { getAllProducts } from "../_lib/OurApis";
import ListItem from "./ListItem";

async function SearchProduct({ name }) {
  const data = await getAllProducts();

  const filterProduct = data.filter((item) =>
    item.title.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <div className="py-10 md:px-20 flex gap-7 flex-wrap items-center justify-center">
      {filterProduct.length !== 0 ? (
        filterProduct.map((product) => (
          <ListItem product={product} key={product.id} />
        ))
      ) : (
        <p className="font-bold text-lg md:text-2xl md:py-10 md:px-5 text-black/60">
          Sorry! you search for product not found on our{" "}
          <Link href="/collection" className="underline">
            collection
          </Link>
          .
        </p>
      )}
    </div>
  );
}

export default SearchProduct;

import Link from "next/link";
import SearchProduct from "../_components/SearchProduct";

function page({ searchParams }) {
  const { query } = searchParams;

  return (
    <div className="px-10 py-10 lg:py-20">
      <h1 className="font-bold text-2xl lg:text-4xl ">
        The Search for "{query}"
      </h1>
      {query !== "" ? (
        <SearchProduct name={query} />
      ) : (
        <p className="font-bold text-sm lg:text-2xl lg:py-10 text-center text-black/60">
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

export default page;

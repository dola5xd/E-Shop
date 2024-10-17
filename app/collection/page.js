import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import AllItems from "../_components/AllItems";
import { getAllProducts } from "../_lib/OurApis";

export const revalidate = 0;

export const metadata = {
  title: "See our Collection !",
};

async function page() {
  const products = await getAllProducts();

  return (
    <div className="flex text-center w-full border-b-2 border-primary-darkWhite py-5 lg:py-10 ">
      <Suspense
        fallback={
          <Skeleton
            count={4}
            containerClassName="w-full h-full flex flex-col lg:flex-row gap-7"
            className="min-h-[260px] aspect-square rounded-xl"
          />
        }
      >
        <AllItems products={products} />
      </Suspense>
    </div>
  );
}

export default page;

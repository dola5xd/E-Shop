import { getByType } from "@/app/_lib/OurApis";
import ListItem from "./ListItem";

async function CatogryItems({ params }) {
  const type =
    params.catogry === "Men"
      ? "Men's Clothes"
      : params.catogry === "Women"
      ? "Women's Clothes"
      : null;

  const data = await getByType(type);
  return (
    <div className=" flex flex-wrap items-center justify-center gap-7 px-10 py-10">
      {data.map((product) => (
        <ListItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default CatogryItems;

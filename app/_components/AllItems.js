"use client";
import { useSearchParams } from "next/navigation";
import ListItem from "./ListItem";

function productType(type) {
  const name =
    type === "Men"
      ? "Men's Clothes"
      : type === "Women"
      ? "Women's Clothes"
      : type === "accessories"
      ? "Accessories"
      : "Sneakers";

  return name;
}

function getProductFilterd(products) {
  let filterProducts = products;

  const searchparams = useSearchParams();

  const sort = searchparams.get("Sort") || "popular";
  const style = searchparams.get("style") || "all";
  const type = searchparams.get("Type") || "all";
  const price = searchparams.get("price")?.split("|") || "all";

  filterProducts =
    price !== "all"
      ? products.filter(
          (product) =>
            product.price >= Number(price?.at(0)) &&
            product.price <= Number(price?.at(1))
        )
      : products;

  if (sort === "newest")
    filterProducts = filterProducts.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
  else if (sort === "rating")
    filterProducts = filterProducts.sort((a, b) => b.rating - a.rating);
  else filterProducts = filterProducts;

  if (type !== "all") {
    if (style === "formal")
      filterProducts = filterProducts.filter(
        (product) =>
          product.category.includes(productType(type)) &&
          product.category.includes("Formal")
      );
    else if (type !== "all" && style === "casual")
      filterProducts = filterProducts.filter(
        (product) =>
          product.category.includes(productType(type)) &&
          product.category.includes("Casual Wear")
      );
    else if (type !== "all" && style === "gym")
      filterProducts = filterProducts.filter(
        (product) =>
          product.category.includes(productType(type)) &&
          (product.category.includes("Sporty Style") ||
            product.category.includes("Sports"))
      );
    else if (type !== "all" && style === "party")
      filterProducts = filterProducts.filter(
        (product) =>
          product.category.includes(productType(type)) &&
          (product.category.includes("Dresses") ||
            product.category.includes("Skirts"))
      );
    else
      filterProducts = filterProducts.filter((product) =>
        product.category.includes(productType(type))
      );
  } else {
    if (style === "formal")
      filterProducts = filterProducts.filter((product) =>
        product.category.includes("Formal")
      );
    else if (style === "casual")
      filterProducts = filterProducts.filter((product) =>
        product.category.includes("Casual Wear")
      );
    else if (style === "gym")
      filterProducts = filterProducts.filter(
        (product) =>
          product.category.includes("Sporty Style") ||
          product.category.includes("Sports")
      );
    else if (style === "party")
      filterProducts = filterProducts.filter(
        (product) =>
          product.category.includes("Dresses") ||
          product.category.includes("Skirts")
      );
  }
  return filterProducts;
}

function AllItems({ products }) {
  const filterProducts = getProductFilterd(products);

  return filterProducts.length > 0 ? (
    <div className="flex flex-wrap gap-y-7 md:gap-7 justify-center xl:justify-normal">
      {filterProducts.map((product) => (
        <ListItem key={product.id} product={product} />
      ))}
    </div>
  ) : (
    <p className=" text-primary-Black text-center font-bold text-3xl ">
      Sorry! no products with same filters in our Collection
    </p>
  );
}

export default AllItems;

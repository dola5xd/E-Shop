"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "../_context/CartContext";
import { addtoCart } from "../_lib/actions";

function CartProduct({ item }) {
  const { images, count, title, description, price, id, added_at } = item;
  const [newCount, setNewCount] = useState(count);
  const { setCart, cart } = useCart();

  function handelDelete() {
    setCart((prev) => prev.filter((product) => product.id !== id));
    localStorage.setItem(
      "cart",
      JSON.stringify(cart.filter((item) => item.id !== id))
    );
  }

  useEffect(() => {
    if (newCount === 0)
      setCart((prev) => prev.filter((product) => product.id !== id));

    if (newCount !== count) {
      const editProduct = {
        images,
        count: newCount,
        title,
        description,
        price,
        id,
        added_at,
      };
      setCart((prev) => [
        ...prev.filter((product) => product.id !== id),
        editProduct,
      ]);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [newCount, count, setCart]);

  return (
    <li className="flex items-center gap-7 lg:gap-4 lg:py-3 w-full flex-col lg:flex-row ">
      <div className="relative aspect-square h-[150px]">
        <Link href={`/product/${id}`}>
          <Image
            src={images}
            fill
            alt={description}
            className="rounded object-cover"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-5 lg:w-1/3 lg:gap-3">
        <h1 className="text-base font-bold text-nowrap">{title}</h1>

        <p className="font-bold text-2xl">
          $ {Number(newCount * price).toFixed(2)}
        </p>
      </div>
      <div className="flex items-center lg:flex-col lg:items-end gap-5 lg:gap-12 h-full w-full lg:w-1/3">
        <button
          onClick={async () => {
            handelDelete();
            await addtoCart(cart.filter((item) => item.id !== id));
          }}
        >
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.25 3.50012H13.5V2.75012C13.5 2.15338 13.2629 1.58109 12.841 1.15913C12.419 0.737175 11.8467 0.500122 11.25 0.500122H6.75C6.15326 0.500122 5.58097 0.737175 5.15901 1.15913C4.73705 1.58109 4.5 2.15338 4.5 2.75012V3.50012H0.75C0.551088 3.50012 0.360322 3.57914 0.21967 3.71979C0.0790178 3.86044 0 4.05121 0 4.25012C0 4.44903 0.0790178 4.6398 0.21967 4.78045C0.360322 4.9211 0.551088 5.00012 0.75 5.00012H1.5V18.5001C1.5 18.8979 1.65804 19.2795 1.93934 19.5608C2.22064 19.8421 2.60218 20.0001 3 20.0001H15C15.3978 20.0001 15.7794 19.8421 16.0607 19.5608C16.342 19.2795 16.5 18.8979 16.5 18.5001V5.00012H17.25C17.4489 5.00012 17.6397 4.9211 17.7803 4.78045C17.921 4.6398 18 4.44903 18 4.25012C18 4.05121 17.921 3.86044 17.7803 3.71979C17.6397 3.57914 17.4489 3.50012 17.25 3.50012ZM7.5 14.7501C7.5 14.949 7.42098 15.1398 7.28033 15.2805C7.13968 15.4211 6.94891 15.5001 6.75 15.5001C6.55109 15.5001 6.36032 15.4211 6.21967 15.2805C6.07902 15.1398 6 14.949 6 14.7501V8.75012C6 8.55121 6.07902 8.36044 6.21967 8.21979C6.36032 8.07914 6.55109 8.00012 6.75 8.00012C6.94891 8.00012 7.13968 8.07914 7.28033 8.21979C7.42098 8.36044 7.5 8.55121 7.5 8.75012V14.7501ZM12 14.7501C12 14.949 11.921 15.1398 11.7803 15.2805C11.6397 15.4211 11.4489 15.5001 11.25 15.5001C11.0511 15.5001 10.8603 15.4211 10.7197 15.2805C10.579 15.1398 10.5 14.949 10.5 14.7501V8.75012C10.5 8.55121 10.579 8.36044 10.7197 8.21979C10.8603 8.07914 11.0511 8.00012 11.25 8.00012C11.4489 8.00012 11.6397 8.07914 11.7803 8.21979C11.921 8.36044 12 8.55121 12 8.75012V14.7501ZM12 3.50012H6V2.75012C6 2.55121 6.07902 2.36044 6.21967 2.21979C6.36032 2.07914 6.55109 2.00012 6.75 2.00012H11.25C11.4489 2.00012 11.6397 2.07914 11.7803 2.21979C11.921 2.36044 12 2.55121 12 2.75012V3.50012Z"
              fill="#FF3333"
            />
          </svg>
        </button>
        <div className="flex-1 bg-primary-darkWhite py-3 px-5 font-bold rounded-full flex items-center justify-between text-lg w-full xl:w-[calc(100%_-_20px)]">
          {" "}
          <button
            className="text-3xl"
            onClick={() => setNewCount((prev) => (prev > 0 ? prev - 1 : 0))}
          >
            -
          </button>
          {newCount}
          <button
            className="text-3xl"
            onClick={() => setNewCount((prev) => prev + 1)}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
}

export default CartProduct;

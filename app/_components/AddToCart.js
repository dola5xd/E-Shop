"use client";
import { useCart } from "@/app/_context/CartContext";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { addtoCart } from "../_lib/actions";

function AddToCart({ isLogedIn, data }) {
  const { id, title, description, price, images } = data;

  const [count, setCount] = useState(1);
  const { setCart, cart } = useCart();

  async function handelProduct() {
    if (count === 0) return;

    const existProductCount = cart
      .filter((items) => items.id === id)
      .map((item) => item.count)
      .reduce((pre, cur) => pre + cur, 0);

    const product = {
      id,
      title,
      description,
      price,
      images,
      count: count + existProductCount,
      added_at: new Date(),
    };

    setCart((prev) => [...prev.filter((item) => item.id !== id), product]);
    localStorage.setItem(
      "cart",
      JSON.stringify([...cart.filter((item) => item.id !== id), product])
    );

    toast(
      (t) => (
        <span className="md:text-balance text-wrap text-sm md:text-base">
          This product has been added succesfully! go to{" "}
          <Link href="/cart" className="underline">
            your cart
          </Link>
        </span>
      ),
      {
        style: {
          padding: "15px 25px",
          color: "#fff",
          backgroundColor: "#101010",
          fontSize: "18px",
          fontWeight: "bold",
          left: "50%",
        },
        iconTheme: {
          primary: "#fff",
          secondary: "#101010",
        },
        icon: "✔",
      }
    );

    if (isLogedIn)
      await addtoCart([...cart.filter((item) => item.id !== id), product]);
  }

  return (
    <div className="flex items-center gap-7 md:gap-4 flex-col md:flex-row">
      <div className="flex-1 bg-primary-darkWhite py-3 px-5 font-bold rounded-full flex items-center justify-between text-lg w-full md:w-auto">
        <button
          className="text-3xl"
          onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}
        >
          -
        </button>
        {count}
        <button
          className="text-3xl"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </button>
      </div>

      <button
        className="bg-primary-Black py-3 px-20 text-sm md:text-base w-full md:w-auto md:px-20 text-primary-White font-bold rounded-full relative hover:bg-primary-darkWhite hover:text-primary-Black duration-500 border border-primary-Black flex-1"
        onClick={handelProduct}
      >
        Add To Card
      </button>
    </div>
  );
}

export default AddToCart;

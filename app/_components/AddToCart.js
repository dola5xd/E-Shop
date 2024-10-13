"use client";
import { useCart } from "@/app/_context/CartContext";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { addtoCart } from "../_lib/actions";
import { useRouter } from "next/navigation";

function AddToCart({ isLogedIn, data }) {
  const router = useRouter();
  const { id, title, description, price, images } = data;

  const [count, setCount] = useState(1);
  const { setCart, cart } = useCart();

  function handelProduct() {
    if (count === 0) return;
    const product = {
      id,
      title,
      description,
      price,
      images,
      count,
      added_at: new Date(),
    };
    setCart((prev) => [
      ...prev.filter((item) => item.title !== title),
      product,
    ]);
    toast(
      (t) => (
        <span className="text-balance">
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
        },
        iconTheme: {
          primary: "#fff",
          secondary: "#101010",
        },
        icon: "✔",
      }
    );
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex-1 bg-primary-darkWhite py-3 px-5 font-bold rounded-full flex items-center justify-between text-lg">
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
      {!isLogedIn ? (
        <button
          className="bg-primary-Black py-3 px-20 text-primary-White font-bold rounded-full relative hover:bg-primary-darkWhite hover:text-primary-Black duration-500 border border-primary-Black flex-1"
          onClick={() => router.push("/login")}
        >
          Join us and start shopping!
        </button>
      ) : (
        <form action={() => addtoCart(cart)}>
          <button
            className="bg-primary-Black py-3 px-20 text-primary-White font-bold rounded-full relative hover:bg-primary-darkWhite hover:text-primary-Black duration-500 border border-primary-Black flex-1"
            onClick={handelProduct}
          >
            Add To Card
          </button>
        </form>
      )}
    </div>
  );
}

export default AddToCart;

"use client";

import Link from "next/link";
import { useCart } from "../_context/CartContext";
import CartProduct from "./CartProduct";

function CartProducts() {
  const { cart } = useCart();

  return (
    <ul className="flex flex-col gap-7 p-4 border border-black/20 rounded flex-1 xl:min-h-[325px] w-full lg:w-auto">
      {cart.length > 0 ? (
        cart
          .sort((prev, cur) => prev.added_at - cur.added_at)
          .map((product) => <CartProduct item={product} key={product.id} />)
      ) : (
        <p className="text-xl font-bold text-center py-20">
          No products in your cart. visit our{" "}
          <Link className="underline" href="/collection">
            collection
          </Link>{" "}
          and fill it! 😎
        </p>
      )}
    </ul>
  );
}

export default CartProducts;

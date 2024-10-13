"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../_context/CartContext";

function CartIcon() {
  const { cart } = useCart();

  return (
    <Link href="/cart">
      <button className="relative">
        <Image
          src="/assets/Svg/Cart.svg"
          alt="Cart-icon"
          width="25"
          height="25"
        />
        {cart.length !== 0 && (
          <span className=" absolute -top-5 -right-4 text-lg text-white bg-black text-center w-6 h-6 rounded-full flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </button>
    </Link>
  );
}

export default CartIcon;

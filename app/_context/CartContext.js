"use client";
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";
import { addtoCart, getUser } from "../_lib/OurApis";
const cartContext = createContext();

function CartProvider({ children }) {
  const session = useSession();
  const [cart, setCart] = useState([]);
  const localcart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  useEffect(() => {
    async function getUserCart() {
      if (session.data) {
        const user = await getUser(session.data.user.email);
        const userCart = user.cart?.map((product) => JSON.parse(product));

        setCart([...userCart, ...localcart] || []);
      } else {
        setCart(localcart || []);
      }
    }
    getUserCart();
  }, [session, setCart, localStorage]);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
}

function useCart() {
  const context = useContext(cartContext);
  if (!context) throw new Error("Context is outside provider!");
  return context;
}

export { CartProvider, useCart };

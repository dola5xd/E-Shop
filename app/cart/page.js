import CartProducts from "../_components/CartProducts";

import OrderSummary from "../_components/OrderSummary";
import { auth } from "../_lib/Auth";

import { Integralcf } from "../layout";

export const revalidate = 0;

async function page() {
  const session = await auth();
  return (
    <div className="py-10 items-center lg:items-start lg:px-10 xl:px-20 flex flex-col">
      <h1 className={`${Integralcf.className} font-bold text-2xl lg:text-4xl`}>
        Your Cart
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 my-10 rounded-md w-full p lg:px-5 xl:px-10">
        <CartProducts />
        <OrderSummary isLogedIn={session === null ? false : true} />
      </div>
    </div>
  );
}

export default page;

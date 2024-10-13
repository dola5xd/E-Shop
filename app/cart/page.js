import CartProducts from "../_components/CartProducts";

import OrderSummary from "../_components/OrderSummary";

import { Integralcf } from "../layout";

export const revalidate = 0;

function page() {
  return (
    <div className="py-10 px-20 flex flex-col">
      <h1 className={`${Integralcf.className} font-bold text-4xl`}>
        Your Cart
      </h1>
      <div className="flex items-start gap-5 my-10 rounded-md">
        <CartProducts />
        <OrderSummary />
      </div>
    </div>
  );
}

export default page;

"use client";

import { useRouter } from "next/navigation";
import { useCart } from "../_context/CartContext";
import { submitCart } from "../_lib/actions";
import { DELIVERY_FEE } from "../_utils/Constants";
import Link from "next/link";

function discount(subtotal, discount) {
  if (subtotal !== " --") return ((subtotal * discount) / 100).toFixed(2);
  return " --";
}

function OrderSummary({ isLogedIn }) {
  const router = useRouter();

  const { cart, setCart } = useCart();
  const subTotal =
    cart.length > 0
      ? cart
          .map((product) => product.price * product.count)
          .reduce((pre, cur) => pre + cur)
          .toFixed(2)
      : " --";

  const discountPrice = discount(subTotal, 20);

  const Total =
    cart.length > 0
      ? (Number(subTotal) + DELIVERY_FEE - Number(discountPrice)).toFixed(2)
      : " --";

  return (
    <div className="flex flex-col gap-7 py-6 md:p-6 border border-black/20 rounded min-h-[200px] w-full md:w-1/2">
      <h1 className="text-2xl md:text-3xl font-bold px-6 md:px-0">
        Order Summary
      </h1>
      <ul className="pr-5 flex flex-col gap-5 py-5 w-full px-3">
        <li>
          <h3 className="text-base md:text-xl flex items-center justify-between">
            SubTotal <span className="font-bold">${subTotal}</span>
          </h3>
        </li>
        <li>
          <h3 className="text-base md:text-xl flex items-center justify-between">
            Discount (-20%){" "}
            <span className="font-bold text-primary-redDiscount">
              - ${discountPrice}
            </span>
          </h3>
        </li>
        <li>
          <h3 className="text-base md:text-xl flex items-center justify-between">
            Delivery Fee{" "}
            <span className="font-bold">${DELIVERY_FEE.toFixed(2)}</span>
          </h3>
        </li>
        <hr className="h-[1px] w-full bg-black" />
        <li className="flex flex-col gap-5">
          <h3 className="text-base md:text-xl flex items-center justify-between">
            Total <span className="font-bold">${Total}</span>
          </h3>
          <div className="flex flex-col relative md:static md:flex-row items-center gap-3 w-full">
            <input
              type="text"
              placeholder="Add promo code"
              className="w-full bg-primary-darkWhite rounded-3xl text-lg py-4 px-5 pl-10 placeholder:text-sm md:placeholder:text-base"
            />
            <span className="absolute translate-x-3 -translate-y-1/2 md:translate-y-0 left-0 top-1/4 md:left-auto md:top-auto z-30">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.0766 10.4857L11.7653 1.17444C11.5917 0.999696 11.3851 0.861152 11.1576 0.766846C10.93 0.672541 10.686 0.62435 10.4397 0.625069H1.75001C1.45164 0.625069 1.16549 0.743595 0.954513 0.954574C0.743534 1.16555 0.625008 1.4517 0.625008 1.75007V10.4398C0.624289 10.6861 0.67248 10.9301 0.766785 11.1576C0.861091 11.3852 0.999635 11.5918 1.17438 11.7654L10.4856 21.0766C10.8372 21.4281 11.3141 21.6256 11.8113 21.6256C12.3084 21.6256 12.7853 21.4281 13.1369 21.0766L21.0766 13.1369C21.4281 12.7853 21.6255 12.3085 21.6255 11.8113C21.6255 11.3141 21.4281 10.8373 21.0766 10.4857ZM11.8113 19.2204L2.87501 10.2813V2.87507H10.2813L19.2175 11.8113L11.8113 19.2204ZM7.37501 5.87507C7.37501 6.17174 7.28703 6.46175 7.12221 6.70842C6.95739 6.9551 6.72312 7.14736 6.44903 7.26089C6.17494 7.37442 5.87334 7.40413 5.58237 7.34625C5.2914 7.28837 5.02413 7.14551 4.81435 6.93573C4.60457 6.72595 4.46171 6.45868 4.40383 6.1677C4.34595 5.87673 4.37566 5.57513 4.48919 5.30104C4.60272 5.02695 4.79498 4.79269 5.04165 4.62786C5.28833 4.46304 5.57834 4.37507 5.87501 4.37507C6.27283 4.37507 6.65436 4.5331 6.93567 4.81441C7.21697 5.09571 7.37501 5.47724 7.37501 5.87507Z"
                  fill="black"
                  fillOpacity="0.4"
                />
              </svg>
            </span>
            <button className="bg-black duration-500 hover:bg-black/60 text-white text-lg font-bold py-3 px-7 rounded-3xl w-full md:w-auto">
              Apply
            </button>
          </div>
        </li>
        {cart.length > 0 && (
          <li>
            {!isLogedIn ? (
              <Link href="/login">
                <button className="bg-black duration-500 hover:bg-black/60 text-white text-base md:text-lg font-bold py-4 px-5 md:px-7 rounded-3xl w-full flex items-center gap-4 justify-center [&>span]:duration-1000 [&>span]:hover:translate-x-full">
                  Login to Checkout{" "}
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.2959 4.4541L21.0459 11.2041C21.1508 11.3086 21.234 11.4328 21.2908 11.5696C21.3476 11.7063 21.3768 11.8529 21.3768 12.001C21.3768 12.149 21.3476 12.2957 21.2908 12.4324C21.234 12.5691 21.1508 12.6933 21.0459 12.7979L14.2959 19.5479C14.0846 19.7592 13.7979 19.8779 13.4991 19.8779C13.2002 19.8779 12.9135 19.7592 12.7022 19.5479C12.4908 19.3365 12.3721 19.0499 12.3721 18.751C12.3721 18.4521 12.4908 18.1654 12.7022 17.9541L17.5313 13.125L3.75 13.125C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5846 2.625 12.2984 2.625 12C2.625 11.7017 2.74353 11.4155 2.95451 11.2045C3.16548 10.9936 3.45163 10.875 3.75 10.875L17.5313 10.875L12.7013 6.04598C12.4899 5.83463 12.3712 5.54799 12.3712 5.2491C12.3712 4.95022 12.4899 4.66357 12.7013 4.45223C12.9126 4.24088 13.1992 4.12215 13.4981 4.12215C13.797 4.12215 14.0837 4.24088 14.295 4.45223L14.2959 4.4541Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            ) : (
              <button
                className="bg-black duration-500 hover:bg-black/60 text-white text-base md:text-lg font-bold py-4 px-5 md:px-7 rounded-3xl w-full flex items-center gap-4 justify-center [&>span]:duration-1000 [&>span]:hover:translate-x-full"
                onClick={async () => {
                  const cart = await submitCart();
                  setCart(cart);
                  localStorage.setItem("cart", cart);
                  router.push("/checkout");
                }}
              >
                Go to Checkout{" "}
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.2959 4.4541L21.0459 11.2041C21.1508 11.3086 21.234 11.4328 21.2908 11.5696C21.3476 11.7063 21.3768 11.8529 21.3768 12.001C21.3768 12.149 21.3476 12.2957 21.2908 12.4324C21.234 12.5691 21.1508 12.6933 21.0459 12.7979L14.2959 19.5479C14.0846 19.7592 13.7979 19.8779 13.4991 19.8779C13.2002 19.8779 12.9135 19.7592 12.7022 19.5479C12.4908 19.3365 12.3721 19.0499 12.3721 18.751C12.3721 18.4521 12.4908 18.1654 12.7022 17.9541L17.5313 13.125L3.75 13.125C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5846 2.625 12.2984 2.625 12C2.625 11.7017 2.74353 11.4155 2.95451 11.2045C3.16548 10.9936 3.45163 10.875 3.75 10.875L17.5313 10.875L12.7013 6.04598C12.4899 5.83463 12.3712 5.54799 12.3712 5.2491C12.3712 4.95022 12.4899 4.66357 12.7013 4.45223C12.9126 4.24088 13.1992 4.12215 13.4981 4.12215C13.797 4.12215 14.0837 4.24088 14.295 4.45223L14.2959 4.4541Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
            )}
          </li>
        )}
      </ul>
    </div>
  );
}

export default OrderSummary;

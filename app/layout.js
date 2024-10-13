import Header from "./_components/Header";
import localFont from "next/font/local";
import "./_styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { CartProvider } from "./_context/CartContext";
import Footer from "./_components/Footer";
import { Toaster } from "react-hot-toast";
import Subscribe from "./_components/Subscribe";
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: {
    template: "%s | Shop.co",
    default: "SHOP.CO | Get what you want !",
  },

  description:
    "We have clothes that suits your style and which you’re proud to wear. From women to men.",
};

export const Satoshi = localFont({
  src: [
    {
      path: "./_fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./_fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./_fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-Satoshi",
});

export const Integralcf = localFont({
  src: "./_fonts/IntegralCF-Bold.woff",
  variable: "--font-Integralcf",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider>
        <body
          className={`${Satoshi.className} text-[1rem] antialiased h-screen`}
        >
          <Toaster position="bottom-right" reverseOrder={false} />
          <CartProvider>
            <Header />
            {children}
            <Subscribe />
            <Footer />
          </CartProvider>
        </body>
      </SessionProvider>
    </html>
  );
}

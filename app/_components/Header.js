import Link from "next/link";
import { Integralcf } from "../layout";
import Search from "./Search";
import Account from "./Account";
import CartIcon from "./CartIcon";
import { auth } from "../_lib/Auth";
import { getUser } from "../_lib/OurApis";

export const revalidate = 0;

async function Header() {
  const session = await auth();

  const user = await getUser(session?.user?.email);

  return (
    <header>
      {!user && (
        <div className="bg-primary-Black text-primary-White text-center py-2">
          Sign up and get 20% off to your first order.
          <Link href="/login" className="underline ml-1">
            Login Now
          </Link>
        </div>
      )}
      <nav
        className={`flex items-center justify-between  text-[1.5rem] px-10 py-5`}
      >
        <h1 className={`${Integralcf.className} text-[2.5rem]`}>
          <Link href="/">SHOP.CO</Link>
        </h1>
        <ul className="flex items-center gap-4 text-[1.3rem]">
          <li>
            <Link href="/collection">Shop</Link>
          </li>
          <li>
            <Link href="/collection?Sort=rating">Best Rating</Link>
          </li>
          <li>
            <Link href="/collection?Sort=newest">New Arrivals</Link>
          </li>
        </ul>
        <Search />
        <div className="flex items-center gap-7">
          <CartIcon />

          <Account fullname={user?.fullname} />
        </div>
      </nav>
    </header>
  );
}

export default Header;

import Link from "next/link";
import { Integralcf } from "../layout";
import Search from "./Search";
import Account from "./Account";
import CartIcon from "./CartIcon";
import { auth } from "../_lib/Auth";
import { getUser } from "../_lib/OurApis";
import MobileNav from "./MobileNav";
import SearchMobile from "./SearchMobile";

export const revalidate = 0;

async function Header() {
  const session = await auth();

  const user = await getUser(session?.user?.email);

  return (
    <header>
      {!user && (
        <div className="bg-primary-Black text-primary-White text-center py-2 text-xs lg:text-base">
          Sign up and get 20% off to your first order.
          <Link href="/login" className="underline ml-1">
            Login Now
          </Link>
        </div>
      )}
      <nav
        className={`flex items-center gap-7 lg:gap-0 justify-between  text-[1.5rem] px-5  lg:px-10 py-5`}
      >
        <div className="flex items-center gap-3">
          <MobileNav />
          <h1 className={`${Integralcf.className} text-lg lg:text-[2.5rem]`}>
            <Link href="/">SHOP.CO</Link>
          </h1>
        </div>

        <ul className="lg:flex items-center gap-4 text-[1.3rem] hidden">
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
        <div className="flex items-center gap-3 lg:gap-7">
          <SearchMobile />
          <CartIcon />
          <Account fullname={user?.fullname} />
        </div>
      </nav>
    </header>
  );
}

export default Header;

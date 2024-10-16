import SignInButton from "../_components/SignInButton";

function page() {
  return (
    <div className="py-10 flex flex-col gap-10 items-center text-center w-full">
      <h1 className="font-bold text-xl md:text-3xl">
        Start your journey by login!
      </h1>
      <SignInButton />
    </div>
  );
}

export default page;

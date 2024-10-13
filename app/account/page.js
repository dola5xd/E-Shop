import Image from "next/image";
import { auth } from "../_lib/Auth";
import { Integralcf } from "../layout";
import { changeInformation } from "../_lib/actions";
import { getUser } from "../_lib/OurApis";
import FormButton from "../_components/FormButton";

export const revalidate = 0;

async function page() {
  const session = await auth();
  const { fullname, email } = await getUser(session?.user?.email);
  const firstName = fullname.split(" ").at(0);
  return (
    <div className="px-20 pt-20">
      <div className="flex items-center gap-3 mb-20 ">
        <span className="block relative aspect-square rounded-full h-10">
          <Image
            src={session?.user?.image}
            fill
            alt="username image"
            className="object-cover rounded-full"
          />
        </span>
        <h1 className={`${Integralcf.className} font-bold text-3xl`}>
          Hi, {firstName}
        </h1>
      </div>
      <div className=" flex justify-between">
        <h1 className={`${Integralcf.className} font-bold text-2xl mb-10`}>
          Uptade your information:
        </h1>
        <form
          action={changeInformation}
          className="px-10 py-10 flex flex-col bg-primary-darkWhite rounded w-2/3 gap-7 [&>div]:flex [&>div]:items-center [&>div]:justify-between [&>div]:px-40 [&>div>label]:font-bold [&>div>label]:text-2xl [&>div>input]:py-2 [&>div>input]:bg-white/50 [&>div>input]:pr-10 [&>div>input]:pl-4 [&>div>input]:rounded"
        >
          <div>
            <label htmlFor="userName">Username:</label>
            <input
              type="text"
              name="name"
              id="userName"
              placeholder="Enter your username"
              defaultValue={fullname}
            />
          </div>
          <div>
            <label htmlFor="userEmail">Email:</label>
            <input
              type="email"
              name="email"
              id="userEmail"
              defaultValue={email}
              disabled
              className="bg-white/80 cursor-not-allowed"
            />
          </div>
          <div>
            <FormButton>Confirm changes!</FormButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;

import { Integralcf } from "../layout";

function Subscribe() {
  return (
    <div className=" px-10">
      <div className="bg-primary-Black text-primary-White flex items-center justify-between rounded-xl py-20 px-20 translate-y-28 ">
        <h1
          className={`${Integralcf.className}  text-[2.5rem] font-bold w-2/3`}
        >
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className="flex flex-col gap-3 flex-1 px-7">
          <input
            type="text"
            placeholder="Enter your email address"
            className="py-4 rounded-2xl px-7"
          />
          <button className="bg-primary-White text-primary-Black text-[1rem] font-medium py-3 rounded-2xl">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;

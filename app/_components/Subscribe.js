import { Integralcf } from "../layout";

function Subscribe() {
  return (
    <div className="px-5 sm:px-10">
      <div className="bg-primary-Black text-primary-White flex items-center justify-between rounded-xl py-10 sm:py-20 px-7 sm:px-20 sm:translate-y-28 flex-col gap-10 sm:gap-0 sm:flex-row">
        <h1
          className={`${Integralcf.className} text-xl sm:text-4xl font-bold sm:w-2/3`}
        >
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className="flex flex-col gap-3 flex-1 px-7">
          <input
            type="text"
            placeholder="Enter your email address"
            className="p-4 px-7 sm:py-4 rounded-2xl placeholder:text-sm"
          />
          <button className="bg-primary-White text-primary-Black text-sm sm:text-base  font-medium py-3 rounded-2xl">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;

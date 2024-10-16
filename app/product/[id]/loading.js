import Skeleton from "react-loading-skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-20 py-10 px-20">
      <Skeleton
        count={1}
        containerClassName="md:w-1/2"
        className="h-[500px] rounded-xl"
      />
      <Skeleton
        count={4}
        containerClassName="flex flex-col items-center gap-4 md:w-1/2"
        className="h-[50px] rounded-xl"
      />
    </div>
  );
}

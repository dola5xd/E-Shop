import Skeleton from "react-loading-skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Skeleton
      count={2}
      containerClassName="w-full h-full flex flex-col lg:flex-row gap-7"
      className="min-h-[260px] rounded-xl"
    />
  );
}

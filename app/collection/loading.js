import Skeleton from "react-loading-skeleton";

export default function Loading() {
  return (
    <Skeleton
      count={30}
      containerClassName="w-full h-full flex flex-wrap gap-2 p-20"
      className="min-h-[260px] rounded-xl"
    />
  );
}

import Skeleton from "react-loading-skeleton";

export default function Loading() {
  return (
    <Skeleton
      count={1}
      containerClassName="w-full h-full flex gap-7"
      className="min-h-[260px] rounded-xl"
    />
  );
}

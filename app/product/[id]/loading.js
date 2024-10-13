import Skeleton from "react-loading-skeleton";

export default function Loading() {
  return (
    <div className="flex items-center gap-20 py-10 px-20">
      <Skeleton
        count={1}
        containerClassName="w-1/2"
        className="h-[500px] rounded-xl"
      />
      <Skeleton
        count={4}
        containerClassName="flex flex-col items-center gap-4 w-1/2"
        className="h-[50px] rounded-xl"
      />
    </div>
  );
}

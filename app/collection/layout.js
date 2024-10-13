import Filter from "../_components/Filter";

export default function Layout({ children }) {
  return (
    <div className="flex w-full gap-7 px-7">
      <Filter />
      {children}
    </div>
  );
}

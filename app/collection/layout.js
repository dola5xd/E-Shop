import Filter from "../_components/Filter";

export default function Layout({ children }) {
  return (
    <div className="relative flex flex-col xl:flex-row w-full gap-7 lg:px-7">
      <Filter />
      {children}
    </div>
  );
}

import Filter from "../_components/Filter";

export default function Layout({ children }) {
  return (
    <div className="relative flex flex-col md:flex-row w-full gap-7 md:px-7">
      <Filter />
      {children}
    </div>
  );
}

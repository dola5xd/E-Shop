"use client";
import { useFormStatus } from "react-dom";
function FormButton({ children }) {
  const { pending } = useFormStatus();

  return (
    <button className="bg-primary-Black py-3 px-10 md:px-20 text-primary-White font-bold rounded-full relative hover:bg-primary-darkWhite hover:text-primary-Black duration-500 border border-primary-Black flex-1  w-full md:w-auto">
      {pending ? "Confirm..." : children}
    </button>
  );
}

export default FormButton;

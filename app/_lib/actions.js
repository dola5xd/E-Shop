"use server";

import { auth, signIn, signOut } from "./Auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";

export async function signInAction() {
  await signIn("google", { redirectTo: "/collection" });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
  revalidatePath("/");
}
export async function addtoCart(cart) {
  const session = await auth();

  if (!session) throw new Error("You must be loogged in");
  const { error } = await supabase
    .from("Users")
    .update([{ cart }])
    .eq("id", session?.userId);

  if (error) throw new Error("Your cart cant be submited");
}

export async function submitCart() {
  const session = await auth();
  if (!session) throw new Error("You must be loogged in");

  const { error } = await supabase
    .from("Users")
    .update([{ cart: [] }])
    .eq("id", session?.userId);

  if (error) throw new Error("Your cart cant be submited");

  return [];
}
export async function changeInformation(formData) {
  const name = formData.get("name");
  const session = await auth();
  if (!session) throw new Error("You must be loogged in");

  const { error } = await supabase
    .from("Users")
    .update([{ fullname: name }])
    .eq("id", session?.userId);

  if (error) throw new Error("Your cart cant be submited");
  revalidatePath("/account");
}

import { supabase } from "./supabase";

export async function getRating() {
  const { data, error } = await supabase.from("Rating").select("*");
  if (error) throw new Error("Can't fetch Rating!");
  return data;
}

export async function getAllProducts() {
  const { data: Products, error } = await supabase.from("Products").select("*");
  if (error) throw new Error("Can't fetch Products!");
  return Products;
}
export async function getNewProuducts() {
  const { data: Products, error } = await supabase
    .from("Products")
    .select("*")
    .range(7, 10);
  if (error) throw new Error("Can't fetch Products!");
  return Products;
}

export async function getTopProuducts() {
  const { data: Products, error } = await supabase
    .from("Products")
    .select("*")
    .gte("rating", "9")
    .range(0, 3);

  if (error) throw new Error("Can't fetch Products!");
  return Products;
}

export async function getProuduct(id) {
  const { data, error } = await supabase
    .from("Products")
    .select("*")
    .eq("id", id);
  if (error) throw new Error("Can't fetch Products!");
  return data;
}

export async function getByCatogry(category, title) {
  const { data, error } = await supabase.from("Products").select("*");
  const cat = data
    .filter((e) => e.category.includes(category) && e.title !== title)
    .slice(0, 4);
  const products = cat.length === 0 ? data.slice(0, 4) : cat;

  if (error) throw new Error(error.message);
  return products;
}

export async function getByType(category) {
  const { data, error } = await supabase
    .from("Products")
    .select("*")
    .contains("category", [category]);

  if (error) throw new Error(error.message);
  return data;
}

export async function getUser(email) {
  let { data } = await supabase
    .from("Users")
    .select("*")
    .eq("email", email)
    .single();

  // No error here! We handle the possibility of no guest in the sign in callback
  return data;
}
export async function createUser(userData) {
  const { data, error } = await supabase.from("Users").insert([userData]);

  if (error) {
    console.error(error);
    throw new Error("User could not be created");
  }
  return data;
}

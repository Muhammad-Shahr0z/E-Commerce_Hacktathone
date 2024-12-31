import { atom } from "jotai";
interface Product {
  category: string;
  imageUrl: string;
  price: number;
  slug: string;
  name: string;
  productDescription: string;
}



export const productsData = atom<Product[]>([]);
export const filterCatogory = atom<string>("allProducts");
export const inputValueAtom = atom<string>("");

import { atom } from "jotai";
import { Product } from "../../interface";


export const productsData = atom<Product[]>([]);
export const filterCatogory = atom<string>("allProducts");
export const inputValueAtom = atom<string>("");

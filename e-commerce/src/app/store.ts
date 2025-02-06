import { atom } from "jotai";
import { BillingDetails, Product } from "../../interface";
import { DetailPreview } from "sanity";
import { atomWithStorage } from "jotai/utils";



 const initialBillingDetails: BillingDetails = {
    fullName: "",
    phoneNumber: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    paymentMethod: "cashOnDelivery", 
  }


export const customerFormDetails = atom<BillingDetails>(initialBillingDetails);

export const productsData = atom<Product[]|null>(null);
export const filterCatogory = atom<string>("allProducts");
export const inputValueAtom = atom<string>("");


// Manage Loading State in Jotai for stripe payment
export const isStripeLoading = atom<boolean>(false);

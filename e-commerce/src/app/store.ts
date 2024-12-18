import { atom } from "jotai";



const productsArray = [

   
  // DECORATION ITEMS


  { id: 1, name: "The Candy Chair", price: 250, image: "/products/1.png" },
  { id: 2, name: "Pluto Vase Set", price: 125, image: "/products/2.png" },
  { id: 3, name: "The Silky Vase", price: 95, image: "/products/3.png" },
  { id: 4, name: "The Candy Chandelier", price: 750, image: "/products/4.png" },
  { id: 5, name: "Studio Vase Set", price: 85, image: "/products/5.png" },
  { id: 6, name: "The Silky Vase", price: 95, image: "/products/6.png" },
  { id: 7, name: "The Lucky Lamp", price: 99, image: "/products/7.png" },
  { id: 8, name: "Studio Vase Set", price: 85, image: "/products/8.png" },
  { id: 9, name: "The Silky Vase", price: 95, image: "/products/9.png" },
  { id: 10, name: "The Lucky Lamp", price: 299, image: "/products/10.png" },
  { id: 11, name: "The Lucky Lamp", price: 299, image: "/products/11.png" },
  { id: 12, name: "The Lucky Lamp", price: 299, image: "/products/12.png" },


// TABLES

  { id: 13, name: "Home Study Desk", price: 150, image: "/tables/T1.jpg" },
  { id: 14, name: "Office Executive Desk", price: 200, image: "/tables/T2.jpg" },
  { id: 15, name: "Home Computer Table", price: 180, image: "/tables/T3.jpg" },
  { id: 16, name: "Office Conference Table", price: 250, image: "/tables/T4.jpg" },
  { id: 17, name: "Home Dining Table", price: 300, image: "/tables/T5.jpeg" },
  { id: 18, name: "Office Workstation Desk", price: 275, image: "/tables/T6.jpeg" },
  { id: 19, name: "Home Coffee Table", price: 320, image: "/tables/T7.jpg" },
  { id: 20, name: "Office Reception Desk", price: 290, image: "/tables/T8.webp" },
  { id: 21, name: "Home Writing Table", price: 350, image: "/tables/T9.jpg" },
  { id: 22, name: "Office Meeting Table", price: 400, image: "/tables/T10.jpg" },
  { id: 23, name: "Home Folding Table", price: 380, image: "/tables/T11.jpeg" },
  { id: 24, name: "Office Standing Desk", price: 420, image: "/tables/T12.webp" },



// CUTLERY
  { id: 25, name: "Stainless Steel Cutlery Set", price: 50, image: "/tables/T13.jpg" },
  { id: 26, name: "Elegant Dinner Cutlery Set", price: 60, image: "/tables/T14.webp" },
  { id: 27, name: "Modern Tableware Cutlery", price: 55, image: "/tables/T15.webp" },
  { id: 28, name: "Luxury Gold-Plated Cutlery Set", price: 70, image: "/tables/T16.jpg" },
  { id: 29, name: "Compact Everyday Cutlery Set", price: 65, image: "/tables/T17.webp" },
  { id: 30, name: "Premium Stainless Steel Set", price: 75, image: "/tables/T18.jpg" },
  { id: 31, name: "Designer Cutlery Set", price: 80, image: "/tables/T19.webp" },
  { id: 32, name: "Antique Wooden Handle Cutlery", price: 85, image: "/tables/T20.jpg" },
  { id: 33, name: "Classic Dinner Cutlery Set", price: 90, image: "/tables/T21.webp" },
  { id: 34, name: "Luxury Dining Cutlery Set", price: 95, image: "/tables/T22.jpg" },
  { id: 35, name: "Modern Silver Cutlery Set", price: 100, image: "/tables/T23.jpg" },
  { id: 36, name: "Vintage Cutlery Set", price: 110, image: "/tables/T24.jpg" },

  // CHAIRS

  { id: 37, name: "Home Chair", price: 120, image: "/chairs/T25.jpg" },
  { id: 38, name: "Office Chair", price: 150, image: "/chairs/T26.jpg" },
  { id: 39, name: "Ergonomic Office Chair", price: 180, image: "/chairs/T27.jpg" },
  { id: 40, name: "Luxury Leather Chair", price: 250, image: "/chairs/T28.webp" },
  { id: 41, name: "Recliner Chair", price: 200, image: "/chairs/T29.jpg" },
  { id: 42, name: "Dining Chair Set", price: 130, image: "/chairs/T30.webp" },
  { id: 43, name: "Modern Wooden Chair", price: 160, image: "/chairs/T31.jpg" },
  { id: 44, name: "Mesh Back Chair", price: 140, image: "/chairs/T32.webp" },
  { id: 45, name: "High Back Office Chair", price: 220, image: "/chairs/T33.webp" },
  { id: 46, name: "Swivel Chair", price: 170, image: "/chairs/T34.webp" },
  { id: 47, name: "Adjustable Desk Chair", price: 180, image: "/chairs/T35.webp" },
  { id: 48, name: "Luxury Armchair", price: 280, image: "/chairs/T36.jpg" },

  // TableWare

  { id: 49, name: "Classic Tableware Set", price: 80, image: "/tableware/T37.webp" },
  { id: 50, name: "Elegant Tableware Collection", price: 90, image: "/tableware/T38.webp" },
  { id: 51, name: "Modern Tableware Set", price: 95, image: "/tableware/T39.webp" },
  { id: 52, name: "Luxury Gold Tableware", price: 120, image: "/tableware/T40.avif" },
  { id: 53, name: "Ceramic Tableware Set", price: 110, image: "/tableware/T41.avif" },
  { id: 54, name: "Minimalist Tableware Set", price: 85, image: "/tableware/T42.avif" },
  { id: 55, name: "Rustic Tableware Set", price: 100, image: "/tableware/T43.jpeg" },
  { id: 56, name: "Gourmet Tableware Set", price: 130, image: "/tableware/T44.jpeg" },
  { id: 57, name: "Luxury Porcelain Tableware", price: 140, image: "/tableware/T45.jpeg" },
  { id: 58, name: "Antique Tableware Set", price: 150, image: "/tableware/T46.webp" },
  { id: 59, name: "Fine Bone China Tableware", price: 160, image: "/tableware/T47.avif" },
  { id: 60, name: "Exquisite Tableware Set", price: 170, image: "/tableware/T48.avif" }
];



export const productsData = atom(productsArray);

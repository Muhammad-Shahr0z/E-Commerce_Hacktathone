import { atom } from "jotai";



const productsArray = [

   
  // DECORATION ITEMS


  { id: 1, name: "Candy Glaze", price: 250, image: "/products/1.png" },
  { id: 2, name: "Aurora Vase", price: 125, image: "/products/2.png" },
  { id: 3, name: "Velvet Vase", price: 95, image: "/products/3.png" },
  { id: 4, name: "Porcelain Bloom", price: 750, image: "/products/4.png" },
  { id: 5, name: "Studio Craft", price: 85, image: "/products/5.png" },
  { id: 6, name: "Satin Vase", price: 95, image: "/products/6.png" },
  { id: 7, name: "Lunar Glow", price: 99, image: "/products/7.png" },
  { id: 8, name: "Clay Studio", price: 85, image: "/products/8.png" },
  { id: 9, name: "Ivory Vase", price: 95, image: "/products/9.png" },
  { id: 10, name: "Amber Charm", price: 299, image: "/products/10.png" },
  { id: 11, name: "Cerulean Glow", price: 299, image: "/products/11.png" },
  { id: 12, name: "Frosted Serenity", price: 299, image: "/products/12.png" },
  


// TABLES

  { id: 13, name: "Home Study", price: 150, image: "/tables/T1.jpg" },
  { id: 14, name: "Office Executive", price: 200, image: "/tables/T2.jpg" },
  { id: 15, name: "Home Computer", price: 180, image: "/tables/T3.jpg" },
  { id: 16, name: "Office Conference", price: 250, image: "/tables/T4.jpg" },
  { id: 17, name: "Home Dining ", price: 300, image: "/tables/T5.jpeg" },
  { id: 18, name: "Office Workstation", price: 275, image: "/tables/T6.jpeg" },
  { id: 19, name: "Home Coffee", price: 320, image: "/tables/T7.jpg" },
  { id: 20, name: "Office Reception", price: 290, image: "/tables/T8.webp" },
  { id: 21, name: "Home Writing", price: 350, image: "/tables/T9.jpg" },
  { id: 22, name: "Office Meeting", price: 400, image: "/tables/T10.jpg" },
  { id: 23, name: "Home Folding", price: 380, image: "/tables/T11.jpg" },
  { id: 24, name: "Office Standing", price: 420, image: "/tables/T12.webp" },



// CUTLERY
  { id: 25, name: "Stainless Steel", price: 50, image: "/tables/T13.jpg" },
  { id: 26, name: "Elegant Dinner", price: 60, image: "/tables/T14.webp" },
  { id: 27, name: "Modern Tableware", price: 55, image: "/tables/T15.webp" },
  { id: 28, name: "Luxury Gold-Plated", price: 70, image: "/tables/T16.jpg" },
  { id: 29, name: "Compact Everyday", price: 65, image: "/tables/T17.webp" },
  { id: 30, name: "Premium Stainless", price: 75, image: "/tables/T18.jpg" },
  { id: 31, name: "Designer Cutlery", price: 80, image: "/tables/T19.webp" },
  { id: 32, name: "Antique Wooden", price: 85, image: "/tables/T20.jpg" },
  { id: 33, name: "Classic Dinner", price: 90, image: "/tables/T21.webp" },
  { id: 34, name: "Luxury Dining", price: 95, image: "/tables/T22.jpg" },
  { id: 35, name: "Modern Silver", price: 100, image: "/tables/T23.jpg" },
  { id: 36, name: "Vintage Cutlery", price: 110, image: "/tables/T24.jpg" },

  // CHAIRS

  { id: 37, name: "Home Chair", price: 120, image: "/chairs/T25.jpg" },
  { id: 38, name: "Office Chair", price: 150, image: "/chairs/T26.jpg" },
  { id: 39, name: "Ergonomic Office", price: 180, image: "/chairs/T27.jpg" },
  { id: 40, name: "Luxury Leather", price: 250, image: "/chairs/T28.webp" },
  { id: 41, name: "Recliner Chair", price: 200, image: "/chairs/T29.jpg" },
  { id: 42, name: "Dining Chair", price: 130, image: "/chairs/T30.webp" },
  { id: 43, name: "Modern Wooden", price: 160, image: "/chairs/T31.jpg" },
  { id: 44, name: "Mesh Back", price: 140, image: "/chairs/T32.webp" },
  { id: 45, name: "High Back ", price: 220, image: "/chairs/T33.webp" },
  { id: 46, name: "Swivel Chair", price: 170, image: "/chairs/T34.webp" },
  { id: 47, name: "Adjustable Desk", price: 180, image: "/chairs/T35.webp" },
  { id: 48, name: "Luxury Armchair", price: 280, image: "/chairs/T36.jpg" },

  // TableWare

  { id: 49, name: "Classic Tableware", price: 80, image: "/tableware/T37.webp" },
  { id: 50, name: "Elegant Tableware", price: 90, image: "/tableware/T38.webp" },
  { id: 51, name: "Modern Tableware", price: 95, image: "/tableware/T39.webp" },
  { id: 52, name: "Luxury Gold", price: 120, image: "/tableware/T40.webp" },
  { id: 53, name: "Ceramic Tableware", price: 110, image: "/tableware/T41.jpg" },
  { id: 54, name: "Minimalist Tableware", price: 85, image: "/tableware/T42.jpg" },
  { id: 55, name: "Rustic Tableware", price: 100, image: "/tableware/T43.jpg" },
  { id: 56, name: "Gourmet Tableware", price: 130, image: "/tableware/T44.jpg" },
  { id: 57, name: "Luxury Porcelain", price: 140, image: "/tableware/T45.jpeg" },
  { id: 58, name: "Antique Tableware", price: 150, image: "/tableware/T46.webp" },
  { id: 59, name: "Fine Bone China", price: 160, image: "/tableware/T47.jpg" },
  { id: 60, name: "Exquisite Tableware", price: 170, image: "/tableware/T48.jpg" }
];



export const productsData = atom(productsArray);
export const filterCatogory = atom<string>("allProducts");

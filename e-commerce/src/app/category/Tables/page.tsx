import ProductGrid from "@/app/components/ProductGrid";
import { client } from "@/sanity/lib/client";

// Re-fetch data every 1 hour (360 seconds)
export const revalidate = 360; 

export default async function CutleryPage() {
  const query = `*[_type == "products" && category == "tables"]{
    name, category, price,
    "slug": slug.current,
    "imageUrl": image.asset->url
  }`;

  const products = await client.fetch(query);
  return <ProductGrid products={products} title="Tables Collection" />;
}

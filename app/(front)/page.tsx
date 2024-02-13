import ProductsItems from "@/components/products/productsItems";
import data from "@/lib/data";

export default function Home() {
  return (
    <>
      <h2> latest Product </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductsItems key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
}

import HeroSection from "@/components/heropage/heroSection";

import { Metadata } from "next";

import FlashDeal from "@/components/flashDeal/flashDeal";
import ContinueShopping from "@/components/continueShopping/shopping";
import WhyChoose from "@/components/whyChooes/whyChoose";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || "aj super shop",
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    "next js server connection and server reastud",
};

export default function Home() {
  // const featureProducts = await ProductService.getFeatured();
  // const latestProducts = await ProductService.getLatest();

  return (
    <div>
      {/* this is home page of my ecommarc website land all of your decretion in landign page */}

      <HeroSection />

      <FlashDeal />
      <ContinueShopping />
      <WhyChoose />
      {/* <FeatureProduct /> */}

      {/* rest of the fetur and product itmes */}
      {/* <div className="w-full carousel rounded-box mt-4">
        <h1>this is latest product</h1>
        {featureProducts.map((product, index) => (
          <div
            key={product._id?.toString()}
            id={`slide-${index}`}
            className="carousel-item relative w-full"
          >
            <p>{`#slide-${index}`}</p>
            <Link href={`/product/${product.slug}`}>
              <img src={product.image} className="w-full" />
            </Link>
            <div className="absolute flex justify-between transform -translate-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide-${
                  index === 0 ? featureProducts.length - 1 : index - 1
                }`}
                className="btn btn-circle"
              >
                {"<"}
              </a>
              <a
                href={`#slide-${
                  index === featureProducts.length - 1 ? 0 : index + 1
                }`}
                className="btn btn-circle"
              >
                {"> "}
              </a>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-5xl py-6"> latest Product </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {latestProducts.map((product) => (
          <ProductsItems
            key={product.slug}
            product={convertDocToObj(product)}
          />
        ))}
      </div> */}
    </div>
  );
}

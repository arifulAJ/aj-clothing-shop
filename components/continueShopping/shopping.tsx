import ProductService from "@/lib/services/productServices";
import ShippingCard from "./shippingCard";

const ContinueShopping = async () => {
  const latestProducts = await ProductService.getLatest();
  return (
    <div className="py-4 md:pt-16 px-2 md:px-8 lg:px-24">
      <hr />
      <h1 className="text-black font-semibold text-2xl py-8">
        Continue your shopping
      </h1>
      <div className="grid md:grid-cols-3 gap-4">
        {latestProducts.map((item) =>
          item.discounts ? (
            <></>
          ) : (
            <ShippingCard item={item} key={item._id?.toString()} />
          )
        )}
      </div>
    </div>
  );
};

export default ContinueShopping;

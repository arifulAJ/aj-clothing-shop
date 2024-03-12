import { Product } from "@/lib/models/ProductModels";
import Link from "next/link";

const FlashDealCart = ({ item }: { item: Product }) => {
  const { slug, image, name } = item;
  return (
    <div>
      <div className="card w-96 px-4  glass">
        <Link href={`product/${slug}`}>
          <img className="h-40" src={image} alt={name} />

          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{item.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FlashDealCart;

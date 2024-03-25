import EachcollectionProduct from "@/components/collection/eachcollectionProduct";
import ProductService from "@/lib/services/productServices";

const EachCollection = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const getCollection = await ProductService.getByCollection(id);

  return (
    <div>
      <div className="bg-orange-700 p-6 ">
        <h1 className="text-center text-3xl font-bold  capitalize text-white">
          the collection of {id}
        </h1>
        <p className="text-white font-light text-center pt-2">
          Buy all products in this collection
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {getCollection.length > 0 ? (
          getCollection.map((item) => (
            <EachcollectionProduct item={item} key={item._id?.toString()} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default EachCollection;

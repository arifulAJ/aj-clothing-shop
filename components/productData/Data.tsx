"use client";
import React, { useState } from "react";

const ProductForm: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    name: "",
    slug: "",
    category: "",
    image: "",
    price: 0,
    brand: "",
    rating: 0,
    numReviews: 0,
    countInStock: 0,
    description: "",
    isFeatured: false,
    discounts: [],
    flashDeal: false,
    dicountPrice: {},
    colors: [],
    size: [],
    banner: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you can handle form submission, such as sending the product data to the server
    console.log(product);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setProduct((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Slug:</label>
        <input
          type="text"
          name="slug"
          value={product.slug}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Brand:</label>
        <input
          type="text"
          name="brand"
          value={product.brand}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          value={product.rating}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Number of Reviews:</label>
        <input
          type="number"
          name="numReviews"
          value={product.numReviews}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Count in Stock:</label>
        <input
          type="number"
          name="countInStock"
          value={product.countInStock}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Is Featured:</label>
        <input
          type="checkbox"
          name="isFeatured"
          checked={product.isFeatured}
          onChange={handleChange}
        />
      </div>
      {/* Add more input fields for other product properties */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;

interface Product {
  name: string;
  slug: string;
  category: string;
  image: string;
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  countInStock: number;
  description: string;
  isFeatured: boolean;
  discounts: string[]; // Assuming discounts are stored as IDs
  flashDeal: boolean;
  dicountPrice: any; // Define a proper type for discountPrice
  colors: string[]; // Assuming colors are strings
  size: string[]; // Assuming size are strings
  banner: string;
}

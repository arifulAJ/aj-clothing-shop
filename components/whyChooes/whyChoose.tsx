import React from "react";

const WhyChoose = () => {
  return (
    <div className=" bg-gray-100 py-4 md:py-10 px-2 md:px-20">
      <div className="text-center ">
        <p className="text-xs">Best Product</p>
        <h2 className="text-3xl text-black font-extrabold">Why Choose Us</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        <div className="text-center rounded-md shadow-lg overflow-hidden">
          <img
            className="w-20 h-20  mx-auto"
            src="https://res.cloudinary.com/arifulislam/image/upload/v1711782182/delivery-truck-with-packages-behind-svgrepo-com_foyqxl.png"
            alt="track"
          />
          <p className="text-black text-2xl">Fast Delivery</p>
          <p className="p-2 text-sm text-gray-600">
            Welcome to ajonline shop! Choose us for top-quality products,
            innovative solutions, and unparalleled customer satisfaction
          </p>
        </div>
        <div className="text-center rounded-md shadow-lg overflow-hidden">
          <img
            className="w-20 h-20  mx-auto"
            src="https://res.cloudinary.com/arifulislam/image/upload/v1711782434/credit-card-svgrepo-com_1_ki9xig.png"
            alt="Free"
          />
          <p className="text-black text-2xl">Free Shipping</p>
          <p className="p-2 text-sm text-gray-600">
            Discover the advantage of free shipping on every order with ajonline
            shop, where quality products and exceptional service are always
            guaranteed.
          </p>
        </div>
        <div className="text-center rounded-md shadow-lg overflow-hidden">
          <img
            className="w-20 h-20  mx-auto"
            src="https://res.cloudinary.com/arifulislam/image/upload/v1711779405/bitwarden-svgrepo-com-removebg-preview_nsnc1f.png"
            alt="Secure"
          />
          <p className="text-black text-2xl">Secure Checkout</p>
          <p className="p-2 text-sm text-gray-600">
            Rest easy with secure payment options at ajonline shop, ensuring
            your transactions are safe and worry-free.
          </p>
        </div>
        <div className="text-center rounded-md shadow-lg overflow-hidden">
          <img
            className="w-20 h-20  mx-auto"
            src="https://res.cloudinary.com/arifulislam/image/upload/v1711779597/cart-shopping-add-solid-svgrepo-com_1_sz3ois.png"
            alt="Easy Returns"
          />
          <p className="text-black text-2xl">Easy Returns</p>
          <p className="p-2 text-sm text-gray-600">
            Enjoy hassle-free returns at ajonline shop, making the process
            simple and convenient for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

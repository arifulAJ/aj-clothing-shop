// import bcrypt from "bcrypt";
// Define the password to hash
// const passwordToHash = "123456";

// Generate the hashed password synchronously with bcrypt
//const hashedPassword = bcrypt.hashSync(passwordToHash, 10); // 10 is the number of rounds for salt generation

// const data = {
//   users: [
//     {
//       name: "arif",
//       email: "arif@example.com",
//       password: hashedPassword, // Use the hashed password here
//       isAdmin: true,
//     },
//     {
//       name: "jone",
//       email: "jon@example.com",
//       password: hashedPassword, // Use the hashed password here
//       isAdmin: false,
//     },
//   ],
import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
  ],
  products: [
    {
      name: "litle girl red frog",
      slug: "litle-girl-red-frog",
      category: "Frog",
      image:
        "https://res.cloudinary.com/arifulislam/image/upload/v1709708464/little_girl_red_dres_wnehz1.jpg",
      price: 32,
      brand: "Aarong",
      rating: 4,
      numReviews: 8,
      countInStock: 20,
      description:
        "this is little girl  red frog  there are diffrent varient of it",
      isFeatured: true,
      banner:
        "https://res.cloudinary.com/arifulislam/image/upload/v1709708464/little_girl_red_dres_wnehz1.jpg",
    },
    {
      name: "Full lenght scart",
      slug: "full-length-scart",
      category: "scart",
      image:
        "https://res.cloudinary.com/arifulislam/image/upload/v1709708464/full_scart_rwdvto.jpg",
      price: 46,
      brand: "DorjiBari",
      rating: 4.5,
      numReviews: 8,
      countInStock: 30,
      description:
        "the most populer  one in the market also there are doffrent varient of  it ",
      isFeatured: true,
      banner:
        "https://res.cloudinary.com/arifulislam/image/upload/v1709708464/full_scart_rwdvto.jpg",
    },
    {
      name: "Logn scart  with white  color",
      slug: "logn-scart-with-white-color",
      category: "Scart",
      image:
        "https://res.cloudinary.com/arifulislam/image/upload/v1709708464/log_scart_white_ljyak4.jpg",
      price: 16,
      brand: "Richman",
      rating: 4.5,
      numReviews: 8,
      countInStock: 60,
      description: "this is most beautiful  and long scart with white color.",
      isFeatured: true,
      banner:
        "https://res.cloudinary.com/arifulislam/image/upload/v1709708464/log_scart_white_ljyak4.jpg",
    },
    {
      name: "Short scart ",
      slug: "short-scart",
      category: "Scart",
      image:
        "https://res.cloudinary.com/arifulislam/image/upload/v1709708464/sort_scart_gpcbvc.jpg",
      price: 12,
      brand: "Luwise vuiton",
      rating: 4.8,
      numReviews: 8,
      countInStock: 30,
      description: "This is very populer one  for the summer ",
      isFeatured: true,
      banner:
        "https://res.cloudinary.com/arifulislam/image/upload/v1709708464/sort_scart_gpcbvc.jpg",
    },
    {
      name: "Long lehenga",
      slug: "long-lehenga",
      category: "lehenga",
      image:
        "https://res.cloudinary.com/arifulislam/image/upload/v1709708464/log_dres_iz4koz.jpg",
      price: 52,
      brand: "Luwise vuiton",
      rating: 4.8,
      numReviews: 8,
      countInStock: 30,
      description: "a populer lehenga in the india ",
      isFeatured: true,
      banner:
        "https://res.cloudinary.com/arifulislam/image/upload/v1709708464/log_dres_iz4koz.jpg",
    },
  ],
};

export default data;

// import bcrypt from "bcrypt";
// // Define the password to hash
// const passwordToHash = "123456";

// // Generate the hashed password synchronously with bcrypt
// const hashedPassword = bcrypt.hashSync(passwordToHash, 10); // 10 is the number of rounds for salt generation

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
    {
      name: "Jane",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "free shirt",
      slug: "free-shirt",
      category: "Shirts",
      image:
        "https://media.centrepointstores.com/i/centrepoint/9206464-MXMWOVENTOPST1123S-SPW2223922_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-m-prt-pdp-2x$",
      price: 72,
      brand: "Luwise vuiton",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "a populer shirt",
      isFeatured: true,
      banner:
        "https://media.centrepointstores.com/i/centrepoint/9206464-MXMWOVENTOPST1123S-SPW2223922_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-m-prt-pdp-2x$",
    },
    {
      name: "medium shirt",
      slug: "midium-shirt",
      category: "Shirts",
      image: "https://fabrilife.com/products/646c762a7496e-square.jpg",
      price: 62,
      brand: "Luwise vuiton",
      rating: 4.5,
      numReviews: 8,
      countInStock: 10,
      description: "a populer shirt",
      isFeatured: true,
      banner: "https://fabrilife.com/products/646c762a7496e-square.jpg",
    },
    {
      name: "small shirt",
      slug: "small-shirt",
      category: "Shirts",
      image: "https://fabrilife.com/products/646c762a7496e-square.jpg",
      price: 52,
      brand: "Luwise vuiton",
      rating: 4.8,
      numReviews: 8,
      countInStock: 30,
      description: "a populer shirt",
      isFeatured: true,
      banner: "https://fabrilife.com/products/646c762a7496e-square.jpg",
    },
    {
      name: "small shirt16",
      slug: "small-shirt16",
      category: "Shirts16",
      image: "https://fabrilife.com/products/646c762a7496e-square.jpg",
      price: 52,
      brand: "Luwise vuiton6",
      rating: 4.8,
      numReviews: 8,
      countInStock: 30,
      description: "a populer shirt6",
      isFeatured: true,
      banner: "https://fabrilife.com/products/646c762a7496e-square.jpg",
    },
    {
      name: "small shirt125",
      slug: "small-shirt125",
      category: "Shirts25",
      image: "https://fabrilife.com/products/646c762a7496e-square.jpg",
      price: 52,
      brand: "Luwise vuiton5",
      rating: 4.8,
      numReviews: 8,
      countInStock: 30,
      description: "a populer shirt5",
      isFeatured: true,
      banner: "https://fabrilife.com/products/646c762a7496e-square.jpg",
    },
    {
      name: "small shirt124",
      slug: "small-shirt124",
      category: "Shirts24",
      image: "https://fabrilife.com/products/646c762a7496e-square.jpg",
      price: 52,
      brand: "Luwise vuiton4",
      rating: 4.8,
      numReviews: 8,
      countInStock: 30,
      description: "a populer shirt",
      isFeatured: true,
      banner: "https://fabrilife.com/products/646c762a7496e-square.jpg",
    },
    {
      name: "small shirt123",
      slug: "small-shirt123",
      category: "Shirts23",
      image: "https://fabrilife.com/products/646c762a7496e-square.jpg",
      price: 52,
      brand: "Luwise vuiton3",
      rating: 4.8,
      numReviews: 8,
      countInStock: 30,
      description: "a populer shirt3",
      isFeatured: true,
      banner: "https://fabrilife.com/products/646c762a7496e-square.jpg",
    },
  ],
};

export default data;

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
  // users: [
  //   {
  //     name: "John",
  //     email: "admin@example.com",
  //     password: bcrypt.hashSync("123456"),
  //     isAdmin: true,
  //   },
  // ],

  products: [
    {
      name: "litle girl red frog",
      slug: "litle-girl-red-frog",
      category: "Frog",
      collectionProduct: "litel-girl",
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
      discounts: 0.25,

      banner:
        "https://res.cloudinary.com/arifulislam/image/upload/v1709708464/little_girl_red_dres_wnehz1.jpg",
    },
    {
      name: "Full lenght scart",
      slug: "full-length-scart",
      category: "scart",
      collectionProduct: "woman",
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

      discounts: 0.25,

      banner:
        "https://res.cloudinary.com/arifulislam/image/upload/v1709708464/full_scart_rwdvto.jpg",
    },
    {
      name: "Logn scart  with white  color",
      slug: "logn-scart-with-white-color",
      category: "Scart",
      collectionProduct: "woman",
      image:
        "https://res.cloudinary.com/arifulislam/image/upload/v1709708464/log_scart_white_ljyak4.jpg",
      price: 16,
      brand: "Richman",
      rating: 4.5,
      numReviews: 8,
      countInStock: 60,
      description: "this is most beautiful  and long scart with white color.",
      isFeatured: true,
      discounts: 0.25,

      banner:
        "https://res.cloudinary.com/arifulislam/image/upload/v1709708464/log_scart_white_ljyak4.jpg",
    },
    {
      name: "Short scart ",
      slug: "short-scart",
      category: "Scart",
      collectionProduct: "woman",
      image:
        "https://res.cloudinary.com/arifulislam/image/upload/v1710831459/sort_scart-min_ejp99x.jpg",
      price: 12,
      brand: "Luwise vuiton",
      rating: 4.8,
      numReviews: 8,
      countInStock: 30,
      description: "This is very populer one  for the summer ",
      isFeatured: true,

      banner:
        "https://res.cloudinary.com/arifulislam/image/upload/v1710831459/sort_scart-min_ejp99x.jpg",
    },
    {
      name: "Long lehenga",
      slug: "long-lehenga",
      category: "lehenga",
      collectionProduct: "woman",
      image:
        "https://res.cloudinary.com/arifulislam/image/upload/v1709708464/log_dres_iz4koz.jpg",
      price: 52,
      brand: "Luwise vuiton",
      rating: 4.8,
      numReviews: 8,
      countInStock: 30,
      description: "a populer lehenga in the india ",
      isFeatured: true,
      discounts: 0.25,

      color: ["Black", "White"],

      banner:
        "https://res.cloudinary.com/arifulislam/image/upload/v1709708464/log_dres_iz4koz.jpg",
    },
    {
      name: "Shoulder Bag",
      slug: "Shoulder-Bag",
      category: "bags",
      collectionProduct: "bag",
      image:
        "https://res.cloudinary.com/arifulislam/image/upload/v1710830727/sidebad-min_evyjwc.jpg",
      price: 250,
      brand: " Senda Vietnam",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description:
        "a masterpiece of craftsmanship, merging traditional soldering with cutting-edge litz wire technology. Adorn yourself with elegance and innovation, as each intricate joint embodies a legacy of excellence in both form and function",
      isFeatured: false,

      color: ["Red", "Black", "Oreange"],

      banner:
        "https://res.cloudinary.com/arifulislam/image/upload/v1710830727/sidebad-min_evyjwc.jpg",
    },
    {
      name: "Hand Bag by crocodile leather",
      slug: "Hand-Bag-crocodile",
      category: "bags",
      collectionProduct: "bag",
      image:
        "https://res.cloudinary.com/arifulislam/image/upload/v1710830730/corcdail_bag-min_ezpdvr.jpg",
      price: 550,
      brand: " seman leather",
      rating: 4.5,
      numReviews: 8,
      countInStock: 40,
      description:
        "Introducing our Crocodile Leather Hand Bag: a symbol of luxury and sophistication. Crafted with precision and care, each bag exudes timeless elegance and unparalleled quality. Elevate your style with this exquisite accessory, a statement piece that speaks volumes about your discerning taste.",
      isFeatured: false,

      color: ["Black", "Green"],

      banner:
        "https://res.cloudinary.com/arifulislam/image/upload/v1710830730/corcdail_bag-min_ezpdvr.jpg",
    },
    {
      name: "Small Hand Bag ",
      slug: "small-Hand-Bag",
      category: "bags",
      collectionProduct: "bag",
      image:
        "https://res.cloudinary.com/arifulislam/image/upload/v1710830707/had_bag_arefd8.jpg",
      price: 450,
      brand: "luies vuiton",
      rating: 4.5,
      numReviews: 8,
      countInStock: 30,
      description:
        "Presenting our Small Hand Bag: a chic and versatile accessory designed for the modern woman on the go. Crafted with meticulous attention to detail, this compact yet stylish bag effortlessly combines fashion with functionality. Whether you're running errands or stepping out for a night on the town, this handbag is the perfect companion, offering convenience without compromising on style.",
      isFeatured: false,

      color: ["Red"],

      banner:
        "https://res.cloudinary.com/arifulislam/image/upload/v1710830707/had_bag_arefd8.jpg",
    },
    {
      name: "wedding dress ",
      slug: "wedding-dress",
      category: "wedding",
      collectionProduct: "wedding",
      image:
        "https://res.cloudinary.com/arifulislam/image/upload/v1711595388/cloth-min-removebg-preview-min_ebqycg.png",
      price: 450,
      brand: "action jaction",
      rating: 4.5,
      numReviews: 8,
      countInStock: 30,
      description:
        "This wedding dress epitomizes timeless elegance with its graceful silhouette and exquisite details. Crafted from luxurious ivory satin, the gown features a sweetheart neckline adorned with delicate lace appliqués that trail down the bodice, creating a romantic and feminine allure. The fitted bodice cinches at the waist, accentuating the bride's figure, before flowing into a voluminous A-line skirt that cascades into a sweeping train, adding a touch of grandeur to the ensemble.",
      isFeatured: false,

      color: ["white"],

      banner:
        "https://res.cloudinary.com/arifulislam/image/upload/v1711595388/cloth-min-removebg-preview-min_ebqycg.png",
    },
  ],
};

export default data;
